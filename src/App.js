import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Match, Miss } from "react-router";
import NavBar from "./components/NavBar";
import Description from "./components/Description";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Description} />
        <Match pattern="/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

export default App;
