import React from 'react'
import { Card, Grid,Typography } from '@material-ui/core'
import { NavLink } from "react-router-dom";

const diachi = {
    o1: {
        name: "Nguyễn Văn A",
        duong: "268 Lý Thường Kiệt",
        phuong: "Phường 14",
        quan: "Quận 10",
        tp: "Thành phố Hồ Chí Minh"
        },
    o2: {
        name: "Trần Văn B",
        duong: "Tòa H6",
        phuong: "Phường Đông Hòa",
        quan: "Thị xã Dĩ An",
        tp: "Tỉnh Bình Dương"
    },
    o3: {
        name: "Trần Văn B",
        duong: "Tòa H6",
        phuong: "Phường Đông Hòa",
        quan: "Thị xã Dĩ An",
        tp: "Tỉnh Bình Dương"
    }
}

const diachis = [
    diachi.o1,
    diachi.o2,
    diachi.o3
]

function DiachiCard({Opt}){
    return(
        <Grid item xs={6} sm={6} md={6} lg={6} >
            <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                    <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                        <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>{Opt.name}</Typography></Grid>
                            <Grid item xs={6} lg={2}><Typography onClick={() => {alert("Xóa địa chỉ");}} style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                        </Grid>
                    <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{Opt.duong}</Typography></Grid>
                    <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{Opt.phuong}</Typography></Grid>
                    <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{Opt.quan}</Typography></Grid>
                    <Grid item xs={12} container >
                        <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{Opt.tp}</Typography></Grid>
                        <Grid item xs={2} lg={2}><Typography style={{color: "#1AC67E",fontWeight: "600"}}>Mặc định</Typography></Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

export default function Diachithanhtoan() {
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

            <Grid item xs={7} sm={7} md={8} lg={9} style={{paddingTop: "70px"}}>
                <Grid container style={{paddingBottom: "20px"}}>
                    <Grid item xs={8} lg={10}>
                        <Grid item xs={12} style={{paddingTop: "10px"}} ><Typography style={{fontWeight: "600",textAlign: "left"}}>ĐỊA CHỈ THANH TOÁN</Typography></Grid>
                    </Grid>
                    <Grid item xs={3} lg={2} style={{ paddingTop: "10px"}}>
                        <Grid item xs={12} ><button onClick={() => {alert("Modal thêm địa chỉ");}} style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}}>Thêm địa chỉ</button></Grid>
                    </Grid>
                </Grid>
                
                <Grid container direction="row" spacing={10} justifyContent="center">

                    <DiachiCard Opt={diachi.o1}/>
                    
                    <DiachiCard Opt={diachi.o2}/>
                
                    <DiachiCard Opt={diachi.o1}/>
                    
                    <DiachiCard Opt={diachi.o2}/> 
                    {/* <Grid container>
                        {
                            diachis.map(e => {
                                return (
                                    <DiachiCard Opt={diachis.e} />
                                )
                            })
                        }
                    </Grid> */}
                </Grid>

            </Grid>

        </Grid>
    )
}
