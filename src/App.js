import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/main-container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
