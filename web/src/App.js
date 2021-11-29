import React, { Component } from 'react';
//using for bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import './App.css';
import Routes from './Pages/Routes';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  render(){
    return (
        <div className="App"> 
        <ToastContainer/>      
          <Header/>
          {/* <ManageUser/> */}
          <Routes />
          <Footer/>
        </div>
    );
  }
}

export default App;