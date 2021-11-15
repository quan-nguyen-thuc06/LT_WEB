import React from 'react'
import { NavLink } from "react-router-dom";
import { Card, Grid } from '@material-ui/core'
import { Typography } from "@material-ui/core";
import Textfield from '@atlaskit/textfield';


export default function Thongtincanhan() {

    function OnClick(){
        alert("Đã lưu thông tin");
    }

    return (
        <Grid container direction="row" spacing={3} justifyContent="center" style={{marginBottom:"5%"}}>
            <Grid item xs={4} sm={4} md={3} lg={2} >
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
                            <NavLink style={{textDecoration: "none"}} to={"/danhsachdonhang"}><Typography style={{paddingBottom: "10px",color:"black"}}>Danh sách đơn hàng</Typography></NavLink> 
                            <NavLink style={{textDecoration: "none"}} to={"/doimatkhau"}><Typography style={{paddingBottom: "10px",color:"black"}}>Đổi mật khẩu</Typography></NavLink> 
                            <NavLink style={{textDecoration: "none"}} to={"/"}><Typography style={{color: "red"}}>Đăng xuất</Typography></NavLink> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

            <Grid item xs={7} sm={7} md={8} lg={9}>
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
                                    <Grid item xs={12}><Typography>Email</Typography></Grid>
                                    <Textfield name="email" placehoder="In put email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12} ><Typography>Số điện thoại</Typography></Grid>
                                    <Textfield name="phone" placehoder="Input số điện thoại" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12}><Typography>Họ và tên</Typography></Grid>
                                    <Textfield name='name' placehoder='Input Họ và tên' />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12}><Typography>Ngày sinh</Typography></Grid>
                                    <Textfield name='name' placehoder='Input Ngày sinh' />
                                </Grid>
                
                                <Grid item xs={12} style={{paddingTop: "10px"}}>       
                                    <Grid item ><button onClick={() => OnClick()} style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}}>Lưu thông tin</button></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
    )
}
