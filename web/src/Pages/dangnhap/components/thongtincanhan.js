import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { Card, Grid } from '@material-ui/core'
import { Typography } from "@material-ui/core";
import Profile from './components/profile';

export default function Thongtincanhan() {

    const initial = {
        email:"a@gmail.com",
        phone:"01234566",
        name:"customer",
        dob:"21/12/2021"
    }

    const [profile, setProfile] = useState(initial);
    const [error,setError] = useState("");

    const Input = details => {
        console.log(details);

        if(details.email !=="" && details.phone !=="" && details.name !=="" && details.dob !==""){
        console.log(alert("lưu thông tin thành công"));

        setProfile({
            email: details.email,
            phone: details.phone,
            name: details.name,
            dob: details.dob
        });
        }
        else{
            console.log(alert("thông tin chưa hợp lệ"));
            setProfile({
                email: "",
                phone: "",
                name: "",
                dob: ""
            })
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
                                <Grid item xs={12}><Typography style={{fontWeight: "600",textAlign: "left"}}>THÔNG TIN CÁ NHÂN</Typography></Grid>
                                
                                <Grid item xs={12}>
                                    <div className="profile">
                                        <Profile Input={Input} error={error} />
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
    )
}
