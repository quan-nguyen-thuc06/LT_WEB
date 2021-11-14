import React from 'react'
import { Card, Grid } from '@material-ui/core'
import { Typography } from "@material-ui/core";

export default function Diachithanhtoan() {
    return (
        <Grid container direction="row" spacing={3} justifyContent="center">
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
                <Grid container style={{paddingBottom: "20px"}}>
                    <Grid item xs={8} lg={10}>
                        <Grid item xs={12} style={{paddingTop: "10px"}} ><Typography style={{fontWeight: "600",textAlign: "left"}}>ĐỊA CHỈ THANH TOÁN</Typography></Grid>
                    </Grid>
                    <Grid item xs={3} lg={2} style={{ paddingTop: "10px"}}>
                        <Grid item xs={12} ><button style={{backgroundColor: "#1AC67E", color: "white", borderRadius: "15px", height: "50px",width: "150px"}}>Thêm địa chỉ</button></Grid>
                    </Grid>
                </Grid>
                
                <Grid container direction="row" spacing={10} justifyContent="center">
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid item xs={12} container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>Nguyễn Văn A</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>268 Lý Thường Kiệt</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Phường 14</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Quận 10</Typography></Grid>
                                <Grid item xs={12} container >
                                    <Grid item xs={9} lg={10}><Typography style={{paddingBottom: "10px"}}>Thành phố Hồ Chí Minh</Typography></Grid>
                                    <Grid item xs={2} lg={2}><Typography style={{color: "#1AC67E",fontWeight: "600"}}>Mặc định</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>Nguyễn Văn A</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>268 Lý Thường Kiệt</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Phường 14</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Quận 10</Typography></Grid>
                                <Grid item xs={12}><Typography style={{paddingBottom: "10px"}}>Thành phố Hồ Chí Minh</Typography></Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                </Grid>
                
                <Grid container direction="row" spacing={10} justifyContent="center">
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>Nguyễn Văn A</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>268 Lý Thường Kiệt</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Phường 14</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Quận 10</Typography></Grid>
                                <Grid item xs={12}><Typography style={{paddingBottom: "10px"}}>Thành phố Hồ Chí Minh</Typography></Grid>
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <Card style={{boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)", borderRadius: "15px"}}>
                            <Grid item xs={12} style={{textAlign: "left", padding: "20px"}}>
                                <Grid container style={{paddingBottom: "10px"}}>
                                    <Grid item xs={6} lg={10}><Typography style={{fontWeight: "600"}}>Nguyễn Văn A</Typography></Grid>
                                    <Grid item xs={6} lg={2}><Typography style={{color: "red"}}>Xóa địa chỉ</Typography></Grid>
                                </Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>268 Lý Thường Kiệt</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Phường 14</Typography></Grid>
                                <Grid item xs={12}><Typography style={{ paddingBottom: "10px"}}>Quận 10</Typography></Grid>
                                <Grid item xs={12}><Typography style={{paddingBottom: "10px"}}>Thành phố Hồ Chí Minh</Typography></Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                </Grid>

            </Grid>

        </Grid>
    )
}
