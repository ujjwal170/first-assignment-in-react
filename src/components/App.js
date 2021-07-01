/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import data from './content/data';

import '../style/App.css';

import List from './List';
import Image from './Image';

export class App extends React.Component {
    state = {
        currentIndex: 0,
        allDiv: [],
    };

    componentDidMount() {
        window.addEventListener('keydown', this.keypressed);
    }

    keypressed = (e) => {
        let { currentIndex, allDiv } = this.state;

        if (e.keyCode == '38' || e.keyCode == '40') {
            this.remove_all_active_list();
            // loadImage(currentIndex);
        }

        if (e.keyCode == '38') {
            var newCurrentIndex = currentIndex;
            newCurrentIndex = (data.length - ( 1 + data.length-currentIndex)%data.length)%data.length; 
            //console.log("this is newcurrentindex ",newCurrentIndex); 
            //console.log("this is current index 1",currentIndex)
            this.setState({
                currentIndex: (newCurrentIndex%data.length),
            });
           // console.log("this is current index 2",currentIndex)
           // console.log("this is current all div item  ",allDiv[newCurrentIndex])
            allDiv[newCurrentIndex].classList.add('active');
        }

        if (e.keyCode == '40') {
            var newCurrentIndex = currentIndex;
            newCurrentIndex = (currentIndex + 1) % data.length;
           // console.log("this is newcurrentindex ",newCurrentIndex); 
           // console.log("this is current index 1",currentIndex)
            this.setState({
                currentIndex: newCurrentIndex,
            });
           // console.log("this is current index 2",currentIndex)
           // console.log("this is current all div item  ",allDiv[(currentIndex+1)%data.length])
            allDiv[(currentIndex+1)%data.length].classList.add('active');
        }
    };

    remove_all_active_list = () =>
        this.state.allDiv.forEach((el) => el.classList.remove('active'));
    
    divElement = (el) => {
        console.log("befire")
        this.setState({
            allDiv: el.childNodes,
        });
        console.log("after");
    };
    
    render() {
        return (
            <div className="container0">
                <List divElement={this.divElement} />
                <Image allDiv={this.state.allDiv} currentIndex={this.state.currentIndex}/>
            </div>
        );
    }
}

export default App;
