import React, { Component } from 'react';
import './App.css';
import CenteredTabs from './components/tab'

import Nav from './components/nav';




class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <CenteredTabs />
      </div>
    );
  }
}

export default App;
