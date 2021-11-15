import React, { Component } from 'react';

import './App.css';
import Demo from './Components/Demo';
import Routes from './Pages/Routes';
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  render(){
    return (
        <div className="App">        
          
          <Header/>
          <Routes />
          <Footer/>
        </div>
    );
  }
}

export default App;
