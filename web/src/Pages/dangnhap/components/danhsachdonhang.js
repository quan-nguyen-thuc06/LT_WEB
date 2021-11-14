import React from 'react'
import { Card, Grid, CardMedia, Typography } from '@material-ui/core'
import Images1 from '../images/Item1.png'
import Images2 from '../images/Item2.png'

export default function Danhsachdonhang() {
    return (
        <Grid container direction="row" spacing={5} justifyContent="center">
            <Grid item xs={4} sm={4} md={3} lg={2} >
                <Card style={{
                    marginTop: "50px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
                    borderRadius: "15px"
                }}>
                    <Grid container direction="row" spacing={2} justifyContent="space-between">
                        <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                            <Grid item xs={12}> <Typography style={{fontWeight: "600", paddingBottom: "10px"}}>TÀI KHOẢN</Typography></Grid>
                            <Grid item xs={12}> <Typography style={{paddingBottom: "10px"}}>Thông tin cá nhân</Typography></Grid>
                            <Grid item xs={12}> <Typography style={{paddingBottom: "10px"}}>Địa chỉ thanh toán </Typography></Grid>
                            <Grid item xs={12}> <Typography style={{paddingBottom: "10px"}}>Danh sách đơn hàng</Typography></Grid>
                            <Grid item xs={12}> <Typography style={{paddingBottom: "10px"}}>Đổi mật khẩu</Typography></Grid>
                            <Grid item xs={12}> <Typography style={{color: "red"}}>Đăng xuất</Typography></Grid>
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
                                    <Grid item xs={10} ><Typography style={{fontWeight: "00"}}>#ORDER001</Typography></Grid>
                                    <Grid item xs={2}><Typography style={{color: "#1AC67E",fontWeight: "600", textAlign:"right"}}>Hoàn thành</Typography></Grid>
                                </Grid>
                                
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={2} sm={2} md={1} lg={1}>
                                        <CardMedia component="img" image={Images1} />
                                    </Grid>

                                    <Grid item xs={5} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>Điện thoại iphone 13 256GB</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>26.000.000đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>1</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>26.000.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" spacing={2} style={{paddingTop:"10px", borderBottom:"1px solid #C0C0C0"}}>
                                    <Grid item xs={2} sm={2} lg={1} >
                                        <CardMedia component="img" image={Images2} />
                                    </Grid>

                                    <Grid item xs={8} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>Điện thoại Samsung Galaxy Z Fold3 5G 512GB </Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>44.000.000đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>1</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>44.000.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="right" style={{paddingTop:"20px"}}>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>70.000.000đ</Typography></Grid>
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
                                    <Grid item xs={10} ><Typography style={{fontWeight: "600"}}>#ORDER002</Typography></Grid>
                                    <Grid item xs={2}><Typography style={{color: "#1AC67E",fontWeight: "600", textAlign:"right"}}>Hoàn thành</Typography></Grid>
                                </Grid>
                                
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={2} sm={2} lg={1}>
                                        <CardMedia component="img" image={Images1} />
                                    </Grid>

                                    <Grid item xs={5} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>Điện thoại iphone 13 256GB</Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>26.000.000đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>1</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>26.000.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" spacing={2} style={{paddingTop:"10px", borderBottom:"1px solid #C0C0C0"}}>
                                    <Grid item xs={2} sm={2} lg={1} >
                                        <CardMedia component="img" image={Images2} />
                                    </Grid>

                                    <Grid item xs={8} sm={7} lg={10}>
                                        <Grid item xs={12}><Typography style={{paddingBottom: "5px"}}>Điện thoại Samsung Galaxy Z Fold3 5G 512GB </Typography></Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography style={{paddingBottom:"5px"}}>Đơn giá: </Typography></Grid>
                                            <Grid item xs={6} style={{color: "red", paddingLeft:"5px"}}><Typography>44.000.000đ</Typography></Grid>
                                        </Grid>
                                        <Grid item xs={12} container direction="row">
                                            <Grid item xs={1.5}><Typography >Số lượng: </Typography></Grid>
                                            <Grid item xs={6} style={{paddingLeft:"5px"}}><Typography>1</Typography></Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={2} sm={2} lg={1}>
                                        <Grid item xs={6} style={{color: "red", textAlign:"left", paddingTop:"50px"}}><Typography>44.000.000đ</Typography></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="right" style={{paddingTop:"20px"}}>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={2} lg={2}></Grid>
                                        <Grid item xs={7} lg={9}><Typography style={{paddingBottom:"5px",textAlign:"right"}}>Tổng giá trị: </Typography></Grid>
                                        <Grid item xs={2} lg={1} style={{color: "red", paddingLeft:"5px"}}><Typography>70.000.000đ</Typography></Grid>
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
