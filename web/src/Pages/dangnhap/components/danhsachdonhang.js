import React from 'react'
import { Card, Grid, CardMedia, Typography } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import Images1 from '../images/Item1.png'
import Images2 from '../images/Item2.png'

const item = {
    i1: {
        code: "#ORDER001",
        name: "Điện thoại iphone 13 256GB",
        price: 26000000 ,
        image: Images1,
        amout: 1
    },
    i2: {
        code: "#ORDER002",
        name: "Điện thoại Samsung Galaxy Z Fold3 5G 512GB",
        price: 44000000 ,
        image: Images2,
        amout: 1
    }
}

export default function Danhsachdonhang() {

    function OnClick(){
        alert("Xác nhận đơn hàng");
    }

    return (
        <Grid container direction="row" spacing={5} justifyContent="center" style={{marginBottom:"5%"}}>
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
                <Grid item xs={12}>
                    <Grid item xs={12}><Typography style={{fontWeight: "600",textAlign: "left", paddingBottom: "20px"}}>DANH SÁCH ĐƠN HÀNG</Typography></Grid>
                </Grid>
 
                <Grid container direction="column" spacing={10} justifyContent="center">
                    <Grid item xs={12}>
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={10} ><Typography style={{fontWeight: "600"}}>{item.i1.code}</Typography></Grid>
                                    <Grid item xs={2}><Typography onClick={() => OnClick()} style={{color: "#1AC67E",fontWeight: "600", textAlign:"right"}}>Hoàn thành</Typography></Grid>
                                </Grid>
                                
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={2} sm={2} md={1} lg={1}>
                                        <CardMedia component="img" image={item.i1.image} />
                                    </Grid>

                                    <Grid item xs={5} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>{item.i1.name}</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i1.price}đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>{item.i1.amout}</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>{item.i1.price}đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" spacing={2} style={{paddingTop:"10px", borderBottom:"1px solid #C0C0C0"}}>
                                    <Grid item xs={2} sm={2} lg={1} >
                                        <CardMedia component="img" image={item.i2.image} />
                                    </Grid>

                                    <Grid item xs={8} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>{item.i2.name}</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i2.price}đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>{item.i2.amout}</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>{item.i2.price}đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="right" style={{paddingTop:"20px"}}>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i1.price+ item.i2.price}đ</Typography></Grid>
                                    </Grid>
                                    <Grid item xs={12} container direction="row" >
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Phí vận chuyển: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>100.000đ</Typography></Grid>
                                    </Grid>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>   
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>70.100.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={10} ><Typography style={{fontWeight: "600"}}>{item.i2.code}</Typography></Grid>
                                    <Grid item xs={2}><Typography onClick={() => OnClick()} style={{color: "#1AC67E",fontWeight: "600", textAlign:"right"}}>Hoàn thành</Typography></Grid>
                                </Grid>
                                
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={2} sm={2} lg={1}>
                                        <CardMedia component="img" image={item.i1.image} />
                                    </Grid>

                                    <Grid item xs={5} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>{item.i1.name}</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i1.price}đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>{item.i1.amout}</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>{item.i1.price}đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" spacing={2} style={{paddingTop:"10px", borderBottom:"1px solid #C0C0C0"}}>
                                    <Grid item xs={2} sm={2} lg={1} >
                                        <CardMedia component="img" image={item.i2.image} />
                                    </Grid>

                                    <Grid item xs={8} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>{item.i2.name}</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i2.price}đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>{item.i2.amout}</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>{item.i2.price}đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="right" style={{paddingTop:"20px"}}>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>{item.i1.price + item.i2.price}đ</Typography></Grid>
                                    </Grid>
                                    <Grid item xs={12} container direction="row" >
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Phí vận chuyển: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>100.000đ</Typography></Grid>
                                    </Grid>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>   
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>70.100.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Card>
                    </Grid>

                    
                </Grid>
                
            </Grid>
        </Grid>
    )
}
