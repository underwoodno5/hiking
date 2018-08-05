import React, { Component } from 'react';
import './App.css';
import HikeList from './components/list';
import Nav from './components/nav';




class App extends Component {
  render() {
    return (
      <div>
      <Nav>
      </Nav>
     
      <HikeList>
      </HikeList>
      </div>
    );
  }
}

export default App;
