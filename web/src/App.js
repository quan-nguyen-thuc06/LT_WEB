import React, { Component } from 'react';

import './App.css';
import Demo from './Components/Demo';
import Routes from './Pages/Routes';



class App extends Component {
  render(){
    return (
        <div className="App">        
          <Demo title='Header' />
          <Routes />
        </div>
    );
  }
}

export default App;
