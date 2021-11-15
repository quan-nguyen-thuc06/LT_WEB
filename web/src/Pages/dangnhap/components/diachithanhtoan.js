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
}

export default function Diachithanhtoan() {

    function AddClick(){
        alert("Modal thêm địa chỉ");
    }

    function DeleteClick(){
        alert("Xóa địa chỉ");
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

            <Grid item xs={7} sm={7} md={8} lg={9} style={{paddingTop: "70px"}}>
                <Grid container style={{paddingBottom: "20px"}}>
                    <Grid item xs={8} lg={10}>
                        <Grid item xs={12} style={{paddingTop: "10px"}} ><Typography style={{fontWeight: "600",textAlign: "left"}}>ĐỊA CHỈ THANH TOÁN</Typography></Grid>
                    </Grid>
                    <Grid item xs={3} lg={2} style={{ paddingTop: "10px"}}>
                        <Grid item xs={12} ><button onClick={() => AddClick()} style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}}>Thêm địa chỉ</button></Grid>
                    </Grid>
                </Grid>
                
                <Grid container direction="row" spacing={10} justifyContent="center">
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>{diachi.o1.name}</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography onClick={() => DeleteClick()} style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.duong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.phuong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.quan}</Typography></Grid>
                                <Grid item xs={12} container >
                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{diachi.o1.tp}</Typography></Grid>
                                    <Grid item xs={2} lg={2}><Typography style={{color: "#1AC67E",fontWeight: "600"}}>Mặc định</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>{diachi.o2.name}</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography onClick={() => DeleteClick()} style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o2.duong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o2.phuong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o2.quan}</Typography></Grid>
                                <Grid item xs={12} container >
                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{diachi.o2.tp}</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                </Grid>
                
                <Grid container direction="row" spacing={10} justifyContent="center">
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>{diachi.o1.name}</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography onClick={() => DeleteClick()} style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.duong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.phuong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.quan}</Typography></Grid>
                                <Grid item xs={12} container >
                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{diachi.o1.tp}</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>{diachi.o1.name}</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography onClick={() => DeleteClick()} style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.duong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.phuong}</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>{diachi.o1.quan}</Typography></Grid>
                                <Grid item xs={12} container >
                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>{diachi.o1.tp}</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                </Grid>

            </Grid>

        </Grid>
    )
}
