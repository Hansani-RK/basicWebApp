import React, { Component } from "react";
//import "./App.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      client_id: 2,
      client_secret: "3m6IOBCz2yufSKR4t5ePe9FOwIzVoozut5B2EIat",
      grant_type: "password"
    };
  }
  // fetch api here
  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/api/test").then(function(response) {
  //     response.json().then(function(resp) {
  //       console.log(resp);
  //     });
  //   });
  // }

  submit() {
    console.log(this.state);

    fetch("http://127.0.0.1:8000/oauth/token", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      response.json().then(function(resp) {
        console.log(resp);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Test api</h1>
        <input
          type="text"
          onChange={item => {
            this.setState({ username: item.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={item => {
            this.setState({ password: item.target.value });
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.submit();
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
