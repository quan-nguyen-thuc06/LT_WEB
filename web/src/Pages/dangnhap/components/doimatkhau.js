import React, {useState} from 'react'
import { Card, Grid } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Password from './components/password'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Doimatkhau() {

    const initial = {
        newPass:"",
        Verify:"",
    }

    const [profile, setProfile] = useState(initial);
    const [error,setError] = useState("");
    let user = JSON.parse(localStorage.getItem('user'))

    const Input =async (details) => {
        console.log(details);
        if( details.newPass >7 && details.Verify >7 && details.newPass === details.Verify){
            try {
                const res = await axios.put('http://localhost/Official/LT_WEB/server/api/login/changepwd.php'
                ,
                {
                    "username": user.username,
                    "password": details.newPass
                }
                )
              } catch (error) {
                console.log(error.message)
            }
        toast.success('Đổi mật khẩu thành công:)', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setProfile({
            newPass: details.newPass,
            Verify: details.Verify,
        });
        // updatepw();
        }
        else{
            // console.log(alert("thông tin chưa hợp lệ"));
            toast.warning('thông tin chưa hợp lệ:)', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setProfile({
                newPass: "",
                Verify: "",
            })
        }
    }
   
    return (
        <Grid container direction="row" spacing={3} justifyContent="center" style={{marginBottom:"5%"}}>
            <ToastContainer />
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
                                {/* <NavLink style={{textDecoration: "none"}} to={"/"}><Typography style={{color: "red"}}>Đăng xuất</Typography></NavLink>  */}
                                </Grid>
                            </Grid>
                        </Grid>
                </Card>
            </Grid>

            <Grid item xs={12} sm={7} md={8} lg={9}>
                <Card style={{
                    marginTop: "50px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
                    borderRadius: "15px"
                }}>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item xs={12}  style={{textAlign: "left", padding: "20px"}}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}><Typography style={{fontWeight: "600",textAlign: "left", padding: "20px"}}>TẠO LẠI MẬT KHẨU</Typography></Grid>
                                
                                <Grid item xs={12}><Password Input={Input} error={error} /></Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
    )
}
