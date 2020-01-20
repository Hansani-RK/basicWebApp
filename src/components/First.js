import React, { Component } from "react";

class About extends Component {
  // fetch api here
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/test").then(function(response) {
      response.json().then(function(resp) {
        console.log(resp);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <p>About</p>
//         </div>
//     );
// };

export default About;
