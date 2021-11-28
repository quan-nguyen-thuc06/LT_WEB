import React, { Component } from 'react';
//using for bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import './App.css';
import Demo from './Components/Demo';
import Routes from './Pages/Routes';
import Header from './Components/Header'
import Footer from './Components/Footer'
import EditItem from './Pages/EditItem'
import ManageWebsite from './Pages/ManageWebsite';
import ManageProduct from './Pages/ManageProduct';
import ManageUser from './Pages/ManageUser';
import ProductPortfolio from './Pages/ProductPortfolio';
import HomeAdmin from './Pages/HomeAdmin';
import Hiring from './Pages/Hiring';
import Login from './Pages/Login';
import OrderConfirm from './Pages/OrderConfirm';
import Address from './Pages/Address';
class App extends Component {
  render(){
    return (
        <div className="App">        
          <Header/>
          {/* <ManageUser/> */}
          <Routes />
          <Footer/>
        </div>
    );
  }
}

export default App;