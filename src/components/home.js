import React, {Component} from 'react';


export default class Home extends Component {

    constructor() {
        super()

        this.state = {

        }

        document.getElementById("blocks").style.display ="";
        document.getElementById("my-gallery").style.display = "none";
        document.getElementById("contacts").style.display = "none";

    }
    render() {
        return(
            <div className='home-wrapper'>
                <h3>Welcome to my Photographic Exploration of Central Florida Wildlife</h3>
                
            </div>
            
        )};
}


