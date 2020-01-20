import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    );
  }
}

export default App;
