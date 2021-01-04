import React, {Component} from 'react';


export default class Gallery extends Component {
    constructor() {
        super()

        this.state = {

        }
        document.getElementById("my-gallery").style.display ="";
        document.getElementById("blocks").style.display = "none";
        document.getElementById("contacts").style.display = "none";
          
    }
    render() {
        return(
            <div className='gallery-wrapper'>
                <h3>Wildlife of Central Florida</h3>
            </div>
        )};
}