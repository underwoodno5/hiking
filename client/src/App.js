import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import CenteredTabs from './components/tab'



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
