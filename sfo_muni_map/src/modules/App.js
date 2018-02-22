import React, { Component } from 'react';
import Header from './components/Header'
import CommuteMap from './components/CommuteMap'
import './App.css';
import { routesURL } from './services'



class App extends Component {
  render() {
    return (
      <div>
          <CommuteMap/>
      </div>
    );
  }
}

export default App;
