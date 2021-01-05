import React, { Component } from 'react'



export default class PageManager extends Component {
    constructor() {
        super()

        this.state = {
            
        }

        this.getBackend = this.getBackend(this);
    }

    getBackend() {

         axios
           .get('https://capstone-api-myra-james.herokuapp.com/user/get', {
            withCredentials: true
           })
           .then(response => {
           console.log(response);
           })
           .catch(error => {
           console.log(error);
          })
          .then(function () {
          });
    }

    
    
    

    render() {
        this.getBackend();
        return (
            <div className='page-manager-upload-wrapper'>
                <Upload/>
            </div>
        )}
    }

