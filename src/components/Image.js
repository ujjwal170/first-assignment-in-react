import React, { Component } from 'react';
import data from './content/data';
export class Image extends Component {
    render() {
        return (
            <>
            {console.log("this is props sent to Images.js ",this.props)}
            <div id="container2">
                <img
                    id="prev"
                    src={data[this.props.currentIndex].src}
                    title={data[this.props.currentIndex].title}
                    alt={data[this.props.currentIndex].title}
                />
                <p></p>
            </div>
            </>
        );
    }
}

export default Image;
