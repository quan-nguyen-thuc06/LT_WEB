import React, { Component } from 'react';

// import './App.css';
import Demo from './Components/Demo';
import Routes from './Pages/Routes';
import Header from './Components/Header'
import Footer from './Components/Footer'
import EditItem from './Pages/EditItem'
import ManageWebsite from './Pages/ManageWebsite';
import ProductPortfolio from './Pages/ProductPortfolio'
class App extends Component {
  render(){
    return (
        <div className="App">        
          {/* <ManageWebsite/> */}
          <Header/>
          <Routes />
          <Footer/>
        </div>
    );
  }
}

export default App;