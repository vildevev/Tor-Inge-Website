import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Description from "./components/Description";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Description />
      </div>
    );
  }
}

export default App;
