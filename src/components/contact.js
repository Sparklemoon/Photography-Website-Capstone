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
                <h3>Contact Information here</h3>
                
            </div>
        )};
}