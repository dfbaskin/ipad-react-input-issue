import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TextValue} from './components/text-value-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            Click the text below to toggle edit mode ...
          </div>
          <div>
            <a href="https://github.com/dfbaskin/ipad-react-input-issue">Source Code</a>
          </div>
        </div>
        <div className="App-intro">
          <TextValue textValue="My Text" editModeEnabled={false} />
        </div>
      </div>
    );
  }
}

export default App;
