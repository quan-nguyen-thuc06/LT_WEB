import React from 'react'
import { Grid,Card, CardMedia, Typography } from '@material-ui/core';
import Button from '@atlaskit/button';
import Icon from '../Images/Star.png';

const product = {
    "product_name": "Điện thoại iphone 11 128GB",
    "price": 26000000,
    "image": {
        "image1":"https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanh-la-1-org.jpg",
        "image2":"https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-tim-1-1-org.jpg",
        "image3":"https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-den-1-1-org.jpg",
    },
    "brand": "Apple",
    "capacity":{
        "capacity1":"128GB",
        "capacity2":"256GB",
        "capacity3":"512GB",
    },
    "color":{
        "color1":"Xanh nhạt",
        "color2":"Tím",
        "color3":"Đen",
    },
    "promotion":[
        "Tặng phiếu mua hàng 100.000đ, áp dụng mua thẻ cào, thẻ game.",
        "Giảm thêm 5% khi mua cùng sản phẩm bất kì có giá cao hơn.",
        "Giảm thêm 800.000đ khi tham gia thu cũ đổi mới.",
        "Giảm 50% giá mua gói bảo hiểm rơi vỡ 6 tháng (trị giá đến 1.000.000đ).",
        "Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim Vinaphone trả sau (Trị giá đến 3.000.000đ).",
        "Hoàn tiền 5% tối đa 500.000đ cho hóa đơn từ 500.000đ khi thanh toán qua ví Moca trên ứng dụng Grab.",
    ],
    "screen": "Màn hình: OLED6.7,Super Retina XDR, Hệ điều hành: iOS 14.",
    "camera": "Camera sau: 3 camera 12 MP, Camera trước: 12 MP.",
    "ram": "Chip: Apple A14 Bionic, RAM: 6 GB.",
    "rom": "Bộ nhớ trong: 128 GB, SIM: 1 Nano SIM và 1 eSIMHỗ trợ 5G.",
    "battery": "Pin, Sạc: 3687 mAh, 20 W.",
}

const CountComment = 1;

const sameproduct = [
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    },
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    },
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    },
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    },
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    },
    {
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
        "name": "iphone 12 mini",
        "price": 18000000,
    }
]

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

export default function Sanphamchitiet() {
    return (
        <Grid xs={12} container direction="row" spacing={2} justifyContent="left" style={{paddingTop:"50px",marginBottom:"5%"}}>
                <Grid lg={5} container>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={product.image.image1} alt="first slide"></img>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={product.image.image2} alt="Second slide"></img>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={product.image.image3} alt="Third slide"></img>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </Grid>

                <Grid item xs={12} lg={6} container direction="row" style={{textAlign:"left",paddingLeft:"20px"}} >
                    <Grid item xs={12} lg={12}>
                        <Grid ><h4 style={{fontWeight:"600"}}>{product.product_name}</h4></Grid>
                        <Grid ><Typography>Hãng: {product.brand}</Typography></Grid>

                        <Grid container style={{paddingTop:"10px"}}>
                            <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E" }} class="btn btn-outline-secondary mb-3">{product.capacity.capacity1}</button>
                            <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">{product.capacity.capacity2}</button>
                            <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">{product.capacity.capacity3}</button>
                        </Grid>
                        

                        <Grid container style={{paddingTop:"10px"}}>       
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E" }} class="btn btn-outline-secondary mb-3">{product.color.color1}</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">{product.color.color2}</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">{product.color.color3}</button>
                        </Grid>
                        
                        <Grid item style={{color: "red", paddingTop:"10px", fontWeight:"700"}}><h2>{product.price}đ</h2></Grid>
                        <Grid ><h4>Ưu đãi khuyến mãi </h4></Grid>
                        <Grid ><Typography>(áp dụng đến 23h 21/10)</Typography></Grid>
                        <Grid>
                            {
                                product.promotion.map(e =>{
                                    return(
                                        <div>
                                            <ul>
                                                <li>{e}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid container x={12}>
                            <Grid item xs={5}>
                            </Grid>
                            <Grid item xs={6}>
                            <form>
                                <Button onClick={() => {alert("Nhấn mua hàng");}} appearance="primary" style={{backgroundColor:"#1AC67E"}}>Mua ngay</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} container >
                    <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Sản phẩm tương tự</h4></Grid>
                    
                    <Grid xs={12} container spacing={2} style={{textAlign:"center",paddingLeft:"30px"}}>
                            {
                                sameproduct.map(e => {
                                    return (
                                        <SameProductCard Opt={e} />
                                    )
                                })
                            }
                    </Grid>
                    
                    <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Mô tả sản phẩm</h4></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}>
                        <div>
                            <ul>
                                <li>{product.screen}</li>
                                <li>{product.camera}</li>
                                <li>{product.ram}</li>
                                <li>{product.rom}</li>
                                <li>{product.battery}</li>
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
                        <Grid xs={12} lg={12} style={{paddingLeft:"70px"}}>{CountComment} Nhận xét</Grid>
                    </Grid>
                    

                    <span id="ratings"></span>

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
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Mới nhất</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Có hình ảnh</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Đã mua hàng</button>
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
