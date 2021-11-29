import React from 'react'
import { Card, Grid,Typography } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import {useEffect,useState} from 'react'
import axios from "axios";


export default function Diachithanhtoan() {
    const [address, setAddress] = useState([]);
    const [item, setItem] = useState("");
    const [reload,setReload] = useState(false)
    let user = JSON.parse(localStorage.getItem('user'))
   
    useEffect(()=>{
		async function fetchData(){

			try {
				const res = await axios.get('http://localhost/Official/LT_WEB/server/api/address/read_address.php'
				,
				{ 
				  params:{
					username: user.username
				  }
				}
				)
				setAddress(res.data)
				
			  } catch (error) {
				console.log(error.message)
			  }
        }
        fetchData();
    },[reload])

    address.map((item)=>{
		item.name=user.fullname;		
	})
    console.log(address,"address")

    const add_address= async()=>{
        if(item!=""){
        try {
            const res = await axios.post('http://localhost/Official/LT_WEB/server/api/address/create_address.php'
            ,
            {
                "username": user.username,
                "address": item
            }
            )
            setReload(!reload)
          } catch (error) {
            console.log(error.message)
        }
        }
    }
    const remove= async (event)=>{
        if(address.length>1){
        let id = parseInt(event.target.name)
        try {
            const res =await axios.post('http://localhost/Official/LT_WEB/server/api/address/delete_address.php'
            ,
            { 
              id: id,
              username: user.username
            }
            )
            console.log(id, user.username,res.data)
            setReload(!reload)
            
          } catch (error) {
            console.log(error.message)
          }
        }
    }
    return (
        <Grid container direction="row" spacing={3} justifyContent="center" style={{marginBottom:"5%"}}>
            <Grid item xs={6} sm={4} md={3} lg={2} >
                <Card style={{
                    marginTop: "50px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
                    borderRadius: "15px"
                }}>
                    <Grid container direction="row" spacing={2} justifyContent="space-between">
                        <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                            <Grid item xs={12}> <Typography style={{fontWeight: "600", paddingBottom: "10px"}}>TÀI KHOẢN</Typography></Grid>
                            <Grid>
                            <NavLink style={{textDecoration: "none"}} to={"/thongtincanhan"}><Typography style={{paddingBottom: "10px",color:"black"}}>Thông tin cá nhân</Typography></NavLink> 
                            <NavLink style={{textDecoration: "none"}} to={"/diachithanhtoan"}><Typography style={{paddingBottom: "10px",color:"black"}}>Địa chỉ thanh toán</Typography></NavLink> 
                            {/* <NavLink style={{textDecoration: "none"}} to={"/danhsachdonhang"}><Typography style={{paddingBottom: "10px",color:"black"}}>Danh sách đơn hàng</Typography></NavLink>  */}
                            <NavLink style={{textDecoration: "none"}} to={"/doimatkhau"}><Typography style={{paddingBottom: "10px",color:"black"}}>Đổi mật khẩu</Typography></NavLink> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={9} style={{paddingTop: "70px"}}>
                <Grid container style={{paddingBottom: "20px"}}>
                    <Grid item xs={7} sm={9} lg={10} ><Typography style={{fontWeight: "600",textAlign: "left"}}>ĐỊA CHỈ THANH TOÁN</Typography></Grid>
                    <Grid item xs={5} sm={3} lg={2} ><button type="button" style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm địa chỉ</button></Grid>
                </Grid>
                <Grid container direction="row" spacing={10} justifyContent="center">
                    {address.map((Opt) => {
                                return (
                                    <Grid item xs={12} sm={6} md={6} lg={6} >
                                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                                        <Grid item xs={9} sm={8} lg={10}><Typography style={{fontWeight: "600"}}>{Opt.name}</Typography></Grid>
                                                        <Grid item xs={3} sm={4} lg={2}><Typography style={{color: "red"}}><button type="button" class="btn btn-danger" name={Opt.id} onClick={remove}>Xóa</button></Typography></Grid>
                                                    </Grid>
                                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{Opt.address}</Typography></Grid>
                                                <Grid item xs={12} container >
                                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{Opt.tp}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                )
                            })}
                </Grid>
            </Grid>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nhập địa chỉ mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <input type="text" class="form-control" id="address" placeholder="Enter address" name="address" onChange={(event)=>{
                            const target = event.target;
                            const value = target.value;
                            setItem(value);
                        }}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={add_address} data-bs-dismiss="modal">OK</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </Grid>
    )
}
