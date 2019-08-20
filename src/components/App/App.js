import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />

          <div className="container">
              You Typed: SOMETHING
          </div>
      </div>
    );
  }
}

export default App;
