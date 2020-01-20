import React, { Component } from "react";
//import "./App.css";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      street_address: "",
      city: "",
      state: "",
      country: "",
      password: ""
    };
  }

  submit() {
    console.log(this.state);

    fetch("http://127.0.0.1:8000/api/user/create", {
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
        <h1>
          <center>Test api</center>
        </h1>
        <h5>First name</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ first_name: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Last name</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ last_name: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Email</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ email: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Phone number</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ phone_number: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Date of birth</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ date_of_birth: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Street address</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ street_address: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>City</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ city: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>State</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ state: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Country</h5>
        <input
          type="text"
          onChange={item => {
            this.setState({ country: item.target.value });
          }}
        />
        <br />
        <br />
        <h5>Password</h5>
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

export default Signup;
