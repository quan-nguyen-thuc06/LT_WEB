import React, { Component } from 'react';

import './App.css';
import Routes from './Pages/Routes';
import Header from './Components/Header'
import Footer from './Components/Footer'
// import Banner from './Components/Banner';
// import HotProducts from './Components/HotProducts';
// import Aside from './Components/Aside';
import HomeAdmin from './Pages/HomeAdmin'
//import Sidebar from './Contex/Sidebar'
import Hiring from './Pages/Hiring'
import ProductPortfolio from './Pages/ProductPortfolio'
import ManageCustomer from './Pages/ManageCustomer'
import OrderConfirm from './Pages/OrderConfirm'
import ManageWebsite from './Pages/ManageWebsite'

function App() {
  return (
    <div>
        <Header/>
        <Routes />

        <Footer/>
        
    </div>
    
  );

}

export default App;