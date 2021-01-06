import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault()
  
// axios({
//     method: 'POST',
//     url:'https://capstone-api-myra-james.herokuapp.com/user/authentication',
//     data: {
//         username: this.state.username,
//         password: this.state.password
//     }
// })

    // axios.post("https://capstone-api-myra-james.herokuapp.com/user/authentication", this.state.username, this.state.password, "application/json")

    axios({
        method: 'post', 
        url: 'https://capstone-api-myra-james.herokuapp.com/user/authentication',
        data: {username: this.state.username,password: this.state.password},
        headers: {"content-type": "application/json"}
        
      })

            .then(response => {
                console.log(this.props);
                console.log(response);
                console.log(response.data.status);
                if (response.data === "SUCCESS") {
                this.props.handleSuccessfulAuth();
                } else {
                this.setState({
                    errorText: "Wrong email or password"
                });
                this.props.handleUnsuccessfulAuth();
                }
            })
            .catch(error => {
                this.setState({
                errorText: "An error occurred", error
                });
                this.props.handleUnsuccessfulAuth();
            });

            event.preventDefault();
            }


  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}




// console.log(this.props);
// console.log(response);
// console.log(response.data.status);






