import React, { Component } from 'react';
import './App.css';
import HikeList from './components/hikeslist';

import Nav from './components/nav';




class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <HikeList />
      </div>
    );
  }
}

export default App;
