import React, {Component} from 'react';

export default class Contact extends Component {
    constructor() {
        super()

        this.state = {

        }
        document.getElementById("blocks").style.display = "none";
        document.getElementById("my-gallery").style.display = "none";
        document.getElementById("contacts").style.display = "";
    }
    render () {
        return (
            <div className='contact-wrapper'>
                <h3>Want to contact Parker?</h3>
                  <p> Please fill out the information below
                   to inquire about wildlife locations 
                   or to order prints! </p>
            </div>
        )};
}