import React from 'react'
import { Grid,Card, CardMedia, Typography } from '@material-ui/core';
import Button from '@atlaskit/button';
import Imagemain from '../Images/main1.png';
import ImageItem from '../Images/Item.png';
import Icon from '../Images/Star.png';
import Imagemain2 from '../Images/main2.png'
 
const infor = {
    image: Imagemain2,
    name: "Điện thoại iphone 11 128GB",
    brand: "Apple",
    price: 26000000,
    dlvoucher: "23h 21/10",
    op1: "Tặng phiếu mua hàng 100.000đ, áp dụng mua thẻ cào, thẻ game.",
    op2: "Giảm thêm 5% khi mua cùng sản phẩm bất kì có giá cao hơn.",
    op3: "Giảm thêm 800.000đ khi tham gia thu cũ đổi mới.",
    op4: "Giảm 50% giá mua gói bảo hiểm rơi vỡ 6 tháng (trị giá đến 1.000.000đ).",
    op5: "Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim Vinaphone trả sau (Trị giá đến 3.000.000đ).",
    op6: "Hoàn tiền 5% tối đa 500.000đ cho hóa đơn từ 500.000đ khi thanh toán qua ví Moca trên ứng dụng Grab.",
    des1: "Màn hình: OLED6.7,Super Retina XDR, Hệ điều hành: iOS 14.",
    des2: "Camera sau: 3 camera 12 MP, Camera trước: 12 MP.",
    des3: "Chip: Apple A14 Bionic, RAM: 6 GB.",
    des4: "Bộ nhớ trong: 128 GB, SIM: 1 Nano SIM và 1 eSIMHỗ trợ 5G.",
    des5: "Pin, Sạc: 3687 mAh, 20 W.",
    CountComment: 1,
}

const sameproduct = {
    p1: {
        image: ImageItem,
        name: "iphone 12 mini",
        price: 18000000,
    },
    p2: {
        image: ImageItem,
        name: "iphone 12 mini",
        price: 18000000,
    }
}

function SameProductCard({ Opt}){
    return(
        <Grid item xs={4} lg={2}>
            <Card>
                <Grid container>
                    <Grid item xs={3} lg={3}></Grid>
                    <Grid item xs={6} lg={7} style={{paddingTop:"10px"}}><CardMedia component="img" image={Opt.image}/></Grid>
                </Grid>
                <Grid item xs={12} lg={12}><Typography style={{padding:"15px 0px 0px 15px"}}>{Opt.name}</Typography></Grid>
                <Grid item xs={12} lg={12} style={{color: "red", fontWeight:"700"}}><h6>{Opt.price}đ</h6></Grid>
            </Card>
        </Grid>
    )
}

export default class Sanphamchitiet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            img: Imagemain
        }
        this.setImage = this.setImage.bind(this)
    }

    setImage(image) {
        this.setState({
            img: image
        })
    }

    render(){
    return (
        <Grid xs={12} container direction="row" spacing={2} justifyContent="left" style={{paddingTop:"50px",marginBottom:"5%"}}>
                <Grid lg={5} container>
                    <div><Grid item><CardMedia style={{border:"1px solid #C0C0C0"}} component="img" image={infor.image}/></Grid></div>
                </Grid>

                <Grid item xs={12} lg={6} container direction="row" style={{textAlign:"left",paddingLeft:"20px"}} >
                    <Grid item xs={12} lg={12}>
                        <Grid ><h4 style={{fontWeight:"600"}}>{infor.name}</h4></Grid>
                        <Grid ><Typography>Hãng: {infor.brand}</Typography></Grid>
                        <Grid container style={{paddingTop:"10px"}}>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E"}}>128GB</Button></Grid>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E", marginLeft:"10px"}}>256GB</Button></Grid>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E", marginLeft:"10px"}}>512GB</Button></Grid>
                        </Grid>

                        <Grid container style={{paddingTop:"10px"}}>       
                            <Grid item ><Button onClick={() => this.setImage(Imagemain)} appearance="primary" style={{backgroundColor:"#1AC67E"}}>Trắng</Button></Grid>
                            <Grid item ><Button onClick={() => this.setImage(Imagemain2)} appearance="primary" style={{backgroundColor:"#1AC67E", marginLeft:"10px"}}>Đen</Button></Grid>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E", marginLeft:"10px"}}>Vàng</Button></Grid>
                        </Grid>

                        <Grid item style={{color: "red", paddingTop:"10px", fontWeight:"700"}}><h2>{infor.price}đ</h2></Grid>
                        <Grid ><h4>Ưu đãi khuyến mãi </h4></Grid>
                        <Grid ><Typography>(áp dụng đến {infor.dlvoucher})</Typography></Grid>
                        <Grid>
                            <div>
                                <ul>
                                    <li>{infor.op1}</li>
                                    <li>{infor.op2}</li>
                                    <li>{infor.op3}</li>
                                    <li>{infor.op4}</li>
                                    <li>{infor.op5}</li>
                                    <li>{infor.op6}</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container x={12}>
                            <Grid item xs={5}>
                            </Grid>
                            <Grid item xs={6}>
                                {/* <Button onClick={() => {alert("Nhấn mua hàng");}} appearance="primary" style={{backgroundColor:"#1AC67E"}}>Mua ngay</Button> */}
                                <input onClick={() => {alert("Nhấn mua hàng");}} type="submit" value="Mua ngay" style={{backgroundColor:"#1AC67E",color:"#fff"}}></input>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} container >
                    <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Sản phẩm tương tự</h4></Grid>
                    
                    <Grid xs={12} container spacing={2} style={{textAlign:"center",paddingLeft:"30px"}}>
                            <SameProductCard Opt={sameproduct.p1}/>
                            <SameProductCard Opt={sameproduct.p1}/>
                            <SameProductCard Opt={sameproduct.p1}/>
                            <SameProductCard Opt={sameproduct.p1}/>
                            <SameProductCard Opt={sameproduct.p1}/>
                            <SameProductCard Opt={sameproduct.p1}/>
                    </Grid>
                    
                    <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Mô tả sản phẩm</h4></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}>
                        <div>
                            <ul>
                                <li>{infor.des1}</li>
                                <li>{infor.des2}</li>
                                <li>{infor.des3}</li>
                                <li>{infor.des4}</li>
                                <li>{infor.des5}</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid><h4 style={{margin:"5px 0px 10px 20px"}}>Đánh giá</h4></Grid>
                    
                    <Grid container xs={12} >
                        <Grid container xs={6} lg={3} >
                            <Grid item xs={2} lg={2}><h3 style={{paddingLeft:"50px"}}>5</h3></Grid>
                            <Grid item xs={1} lg={1}><CardMedia component="img" image={Icon} style={{paddingLeft:"10px"}} /></Grid>
                            <Grid item xs={1} lg={1}><CardMedia component="img" image={Icon} style={{paddingLeft:"10px"}} /></Grid>
                            <Grid item xs={1} lg={1}><CardMedia component="img" image={Icon} style={{paddingLeft:"10px"}} /></Grid>
                            <Grid item xs={1} lg={1}><CardMedia component="img" image={Icon} style={{paddingLeft:"10px"}} /></Grid>
                            <Grid item xs={1} lg={1}><CardMedia component="img" image={Icon} style={{paddingLeft:"10px"}} /></Grid>
                        </Grid>
                        <Grid xs={12} lg={12} style={{paddingLeft:"70px"}}>{infor.CountComment} Nhận xét</Grid>
                    </Grid>

                    <Grid container style={{paddingLeft:"20px"}}>
                            <Grid xs={12}>
                                <Grid container><form>
                                    <Grid item xs={12}><h4>Nhận xét</h4></Grid>
                                    <Grid item xs={6}><textarea placeholder="Viết Nhận xét" cols="75" rows="5"></textarea></Grid>
                                    <Grid item xs={6}><input type="submit" value="Submit" style={{backgroundColor:"#1AC67E",color:"#fff"}}></input> </Grid>
                                </form> </Grid>
                            </Grid>
                     </Grid>

                     <Grid container xs={12}>
                            <Grid item xs={12} style={{padding:"10px 0px 0px 20px"}}><h5>Lọc xem theo: </h5></Grid>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E",marginLeft:"20px"}}>mới nhất</Button></Grid>
                            <Grid item ><Button appearance="primary" style={{backgroundColor:"#1AC67E",marginLeft:"20px"}}>Có hình ảnh</Button></Grid>
                            <Grid item><Button appearance="primary" style={{backgroundColor:"#1AC67E",marginLeft:"20px"}}>Đã mua hàng</Button></Grid>
                    </Grid>

                    <Grid container style={{padding:"10px 10px 0px 30px"}}>
                        <Grid item xs={12}> <hr></hr> </Grid>
                        <Grid item xs={3} lg={2}>
                            <Grid><h5>Nguyễn Văn A</h5></Grid>
                            <Grid>Đã đánh giá 5</Grid>
                            <Grid>Đã mua hàng</Grid>
                        </Grid>
                        <Grid item xs={7} lg={10}>
                            <Grid><h5>Điện thoại rất đẹp</h5></Grid>
                            <Grid>Đã đăng nhận xét 3 giờ trước</Grid>
                            <Grid>Trả lời nhận xét</Grid>
                        </Grid>
                        <Grid item xs={6}> <hr></hr> </Grid>
                    </Grid>
                    
                </Grid>
        </Grid>
    )
    }
}
