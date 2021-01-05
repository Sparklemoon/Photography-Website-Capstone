import React, { Component } from 'react'



export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginError: false
        }



        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    document.getElementById("blocks").style.display ="none";
    document.getElementById("my-gallery").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    }
    
 

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        
        fetch("https//capstone-api-myra-james.herokuapp.com/user/post", {
            method:"POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data === "SUCCESS") {
                
            }
            else {
                this.setState({ loginFailed: true })
            }
        })
        .catch(error => {
            console.log("Error logging in:", error)
            this.setState({ loginError: true })
        })
    }

    render() {
        return (
            <div className='login-wrapper'>
                <h3>Login:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />

                    <input type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        placeholder="Password"
                    />

                    <button type="submit">Login</button>
                </form>
                {this.state.loginFailed ? <p>Invaild Credentials...</p> : null}
                {this.state.loginError ? <p>Error Logging In...PLease try again later :D</p> : null}
            </div>
        )}

      
    }










// import React, { Component } from 'react';
// import axios from 'axios';


// export default class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: "",
//             password: "",
//             errorText: ""
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value,
//             errorText: ""
//         });
//     }

//     handleSubmit(event) {
//         axios.post("https://capstone-api-myra-james.herokuapp.com", 
//         {
//           user: {
//               username: this.state.username,
//               password: this.state.password
//           }  
//         },
        
//         { withCredentials: true }
//       )
//         .then(response => {
//           if (response.data.status === 'created') {
//              this.props.handleSuccessfullAuth();
//           } else {
//               this.setState({
//                   errorText: "Wrong username or password"
//               });
//               this.props.handleUnsuccessfullAuth();
//           }
//         })
//         .catch(error => {
//             this.setState({
//                 errorText: "An error occured"
//             });
//             this.props.handleUnsuccessfullAuth();
//         });
        
    
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

//                 <div>{this.state.errorText}</div>
               
//                 <form onSubmit={this.handleSubmit}>
//                     <input 
//                       type="username"
//                       name="username"
//                       placeholder="Your username"
//                       value={this.state.username}
//                       onChange={this.handleChange}
//                     />

//                     <input 
//                       type="password"
//                       name="password"
//                       placeholder="Your password"
//                       value={this.state.password}
//                       onChange={this.handleChange}
//                      />

//                     <div>
//                        <button type="submit">Login</button> 
//                     </div>
                    
//                 </form>
//             </div>
//         );
//     }
// }