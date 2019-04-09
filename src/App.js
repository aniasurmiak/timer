import React, { Component } from 'react';
import face from './face.svg';
import Clock from './Clock.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={face} className="far fa-flushed" />

          <Clock />
        </header>

      </div>
    );
  }
}

export default App;
