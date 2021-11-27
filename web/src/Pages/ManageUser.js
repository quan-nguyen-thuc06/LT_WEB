import React, { useState } from 'react'
import './ManageProduct.css'
import Header from '../Components/HeaderAdmin';
import Footer from '../Components/Footer';
function ManageCustomer(){
    const [userstate, setUserState] = useState(true);
    function handleUserState(){
        setUserState(!userstate)
    }
  return(
    <div class="container">
    <Header/>
    <div class="table-wrapper">
        <div class="table-title">
                        <div><h2>Quản lý khách hàng</h2></div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{width:'100px'}}>STT</th>
                            <th>Username</th>
                            <th style={{width:'150px'}}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>quan.nguyenthucquan</td>
                            <td>

                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>nguyenthucquan</td>
                            <td>
                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Quanidol</td>
                            <td>
                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>      
                    </tbody>
                </table>      
        </div>
        
    
    <Footer/>
</div>     
  )
}
  export default ManageCustomer;