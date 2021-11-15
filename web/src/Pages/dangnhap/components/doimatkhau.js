import React from 'react'
import { Card, Grid } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Textfield from '@atlaskit/textfield';

export default function Doimatkhau() {

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
                                <Grid item xs={12}><Typography style={{fontWeight: "600",textAlign: "left"}}>TẠO LẠI MẬT KHẨU</Typography></Grid>
                                
                                <Grid item xs={12}>
                                    <Grid item xs={12}><Typography>Mật khẩu hiện tại</Typography></Grid>
                                    <Textfield name="oldpass" placehoder="In put mật khẩu" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12} ><Typography>Mật khẩu mới</Typography></Grid>
                                    <Textfield name="newpass" placehoder="Input mật khẩu mới" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12}><Typography>Nhập lại mật khẩu mới</Typography></Grid>
                                    <Textfield name='renewpass' placehoder='nhập lại mật khẩu mới' />
                                </Grid>
                
                                <Grid item xs={12} style={{paddingTop: "10px"}} >
                                    <button onClick={() => {alert("Đổi mật khẩu thành công");}} style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}}>Đổi mật khẩu</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
    )
}
