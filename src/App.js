import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from "antd";

// const theme = require("../config/theme");
// import { theme } from "./theme";
const theme = require("./theme.js");

class App extends Component {

  componentDidMount() {
    console.log(theme);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Button  type="primary">hehe</Button>
        </div>
      </div>
    );
  }
}

export default App;
