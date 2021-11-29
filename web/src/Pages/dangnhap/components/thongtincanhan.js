import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { Card, Grid } from '@material-ui/core'
import { Typography } from "@material-ui/core";
import Profile from './components/profile';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Thongtincanhan() {

    const initial = {
        email:"a@gmail.com",
        phone:"01234566",
        name:"customer",
        dob:"21/12/2021"
    }

    const [profile, setProfile] = useState(initial);
    const [error,setError] = useState("");
    const [image, setImage] =  useState("https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png")
    let user = JSON.parse(localStorage.getItem('user'))
    const Input =async (details) => {
        console.log(details);

        if(details.email !=="" && details.phone.length==10 && details.name !=="" && details.dob !==""){
        // console.log(alert("lưu thông tin thành công"));
        try {
            const res = await axios.put('http://localhost/Official/LT_WEB/server/api/login/update_info.php'
            ,
            {
                "username": user.username,
                "phone": details.phone,
                "email": details.email,
                "b_day": details.dob,
                "fullname": details.name,
                "image": image
            }
            )
            user.fullname = details.name;
            user.image = image;
            localStorage.setItem('user',JSON.stringify(user));
            toast.success('lưu thông tin thành công:)', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          } catch (error) {
            console.log(error.message)
        }

        setProfile({
            email: details.email,
            phone: details.phone,
            name: details.name,
            dob: details.dob
        });
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
                                
                                <Grid container >
                                    <Grid item lg={5} xs={4} ></Grid>
                                    <Grid item>
                                        <img src={image} alt="Logo" style={{width:"150px"}} class="rounded-pill shadow" data-bs-toggle="modal" data-bs-target="#exampleModal11"/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                        <Profile Input={Input} error={error} />
                                </Grid>
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Nhập đường dẫn của hình ảnh</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <input type="text" class="form-control" id="address" placeholder="Nhập đường dẫn của hình ảnh" name="address" onChange={(event)=>{
                                                const target = event.target;
                                                const value = target.value;
                                                setImage(value);
                                            }}/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-success"  data-bs-dismiss="modal">OK</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
    )
}
