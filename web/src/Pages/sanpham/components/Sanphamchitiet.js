import React,{useEffect,useState} from 'react'
import { Grid,Card, CardMedia, Typography } from '@material-ui/core';
import Button from '@atlaskit/button';
import Rating from './rating'
import comment from './comment'
import axios from 'axios';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// const comments = {
//     "username":"Nguyễn Văn A",
//     "content":"Điện thoại rất đẹp",
//     "rating":5,
// }


function SameProductCard({ Opt}){
    return(
        <div class="col-xl-2 col-lg-3 col-md-4 col-6 ">
            <div class="card card-sm card-product-grid shadow">
                <a href="#" class="img-wrap"> <img src={Opt.image} /> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">{Opt.name}</a>
                    <div class="price mt-1">{Opt.price}</div> 
                </figcaption>
            </div>
        </div>
    )
}

export default function Sanphamchitiet() {
    const history = useHistory();
    let location = useLocation();
	let id = location.state.id;
    const [product,setProduct] =useState(
        {
            "id": "",
            "product_name": "",
            "price": "",
            "images": [],
            "type": "",
            "brand": "",
            "capacity": [],
            "color": [],
            "promotion": [],
            "Rom": "",
            "Ram": "",
            "screen": "",
            "battery": "",
            "same_product": []
          }
    )
    const [sameproduct,setSameproduct] =useState([])
    const [rom,setRom] =useState("")
    const [color,setColor]= useState("")
    let infor = {
        "id": "",
        "name": "",
        "image": "",
        "price": "",
        "oldprice": "",
        "color": "",
        "rom": "",
        "quantity":1
    }
    useEffect(
		async function getdata() {

			try {
				const res = await axios.get('http://localhost/Official/LT_WEB/server/api/product/show.php'
				,
				{ 
				  params:{
					id: id
				  }
				}
				)
                // console.log(res.data)
				setProduct(res.data)
				setSameproduct(res.data.same_product)
			  } catch (error) {
				console.log(error.message)
			  }
	    
    },[])
    const handleSubmit= () =>{
        toast.success('Sản phẩm đã thêm vào giỏ hàng', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        infor.id = product.id
        infor.name = product.product_name
        infor.image = product.images[1]
        infor.price = product.price
        infor.oldprice = parseInt(product.price)-3000000
        infor.color=color;
        infor.rom = rom;
        infor.name&&history.push('/Cart',infor)
    }
    const handCapacity=(event)=>{
        setRom(event.target.name)
    }
    return (
        <div class="container mt-3">
        <div class="row">
                <div class="col-lg-6 col-sm-12 mt-3">
                    <div id="carouselExampleControls" class=" carousel slide" data-ride="carousel">
                        <div class="carousel-inner ">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={product.images[0]} alt="first slide"></img>
                            </div>
                            {
                                product.images.map((image,index)=>{
                                    if(index!==0){
                                        return (
                                            <div class="carousel-item">
                                            <img class="d-block w-100" src={image} alt={"slide" + index }></img>
                                            </div>   
                                        )
                                    }
                                })
                            }
                        </div>
                        <div class="mt-4 mb-3 shadow" style={{ border: '2px solid #C4C4C4', borderRadius: '12px', textAlign: 'center' }}>
                            <h3>Thông tin chi tiết sản phẩm</h3>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">Kích thước màn hình</th>
                                        <td>{product.screen}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dung lượng Ram</th>
                                        <td>{product.Ram + " GB"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dung lượng ROM</th>
                                        <td>{rom}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dung lượng Pin</th>
                                        <td>{product.battery}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Màu sắc</th>
                                        <td>{color}</td>
                                    </tr>
                                </tbody>
                            </table>
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
                </div>
                <div class="col-lg-6 col-sm-12 mt-3" >       
                    <div>
                        <div class="card shadow">
                        <div class="card-header text-center"><h4 style={{fontWeight:"600"}}>{product.product_name}</h4></div>
                        <Grid ><p class= "ms-3 mt-3">Hãng: {product.brand}</p></Grid>

                        <div class="mx-3 mt-3">
                            
                            {
                                product.capacity.map((capacity,index)=>{
                                    if(index!==0){
                                        return (
                                            <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} name={capacity+ " GB"} class="btn btn-outline-secondary mb-3" onClick={handCapacity}>{capacity + " GB"}</button>
                                        )
                                    }
                                    return (
                                        <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E" }} name={capacity+ " GB"} class="btn btn-outline-secondary mb-3" onClick={handCapacity}>{capacity + " GB"}</button>
                                    )
                                })
                            }
                            
                        </div>
                        
                        

                        <div class="mx-3">       
                        {
                                product.color.map((color,index)=>{
                                    if(index!==0){
                                        return (
                                            <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3" name={color} onClick={(e)=>{setColor(e.target.name)}}>{color }</button>
                                        )
                                    }
                                    return (
                                        <button type="button" style={{ border:"0.5px solid #C4C4C4", borderRadius:"5%", color:"white", backgroundColor:"#1AC67E" }} class="btn btn-outline-secondary mb-3" name={color} onClick={(e)=>{setColor(e.target.name)}}>{color}</button>
                                    )
                                })
                            }
                        </div>

                        <Grid item style={{ paddingTop:"10px", fontWeight:"700"}}><h2 class="mx-3">Giá :<span class="float-end" style={{color: "red"}}>{product.price}đ</span></h2></Grid>
                        </div>
                            <div class=" card mt-3 shadow">
                                <div class="card-header text-center"><h4>Ưu đãi khuyến mãi </h4></div>
                                    <div class="card-body">
                                        {
                                            product.promotion.map((e)=>{

                                                return (
                                                    <p class="card-text"><i class="fa fa-check-circle text-success" aria-hidden="true"></i>{e}</p>
                                                    
                                                )
                                            })
                                        }
                                
                                    </div>
                            </div>
                        <div class="d-flex justify-content-center">
                        <button type="button" class="row btn btn-success mt-4"  onClick={handleSubmit}>
                            <p class="mb-0"><strong>Mua ngay</strong></p>
                            <span class="mt-0">Giao hàng tận nơi hoặc nhận tại của hàng</span>
                        </button>
                        </div>        
                    </div>
                </div>
                <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Sản phẩm tương tự</h4></Grid>
                    
                <Grid xs={12} container spacing={2} style={{textAlign:"center",paddingLeft:"30px"}}>
                        {sameproduct.map(e => {
                                    return (
                                        <SameProductCard Opt={e} />
                                    )
                        })}
                </Grid>
                    
                    {/* <Grid><h4 style={{margin:"20px 0px 20px 20px"}}>Mô tả sản phẩm</h4></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}>
                        <div>
                            <ul>
                                <li>{product.screen}</li>
                                <li>{product.Ram + " GB"}</li>
                                <li>{product.Rom + " GB"}</li>
                                <li>{product.battery}</li>
                            </ul>
                        </div>
                    </Grid> */}
                    
                    {/* <Grid><h4 style={{margin:"5px 0px 10px 20px"}}>Đánh giá và nhận xét</h4></Grid>
                    
                    <Grid container xs={12} >
                        <Grid container direction="row" xs={10} lg={5}>
                            <Grid item xs={3}><h4 style={{padding:"10px 0px 10px 20px"}}>Đánh giá:</h4></Grid>
                            <Grid item xs={5}><h4 style={{padding:"10px 0px 10px 0px"}}>5<FaStar className="star" color={"#ffc107"} size={30} /> </h4></Grid>
                        </Grid>

                    </Grid> */}
                    <div class="mt-5 text-center w-50 shadow" style={{ textAlign: "center", margin:"auto" }}>
                            <h3 class="pt-2">Đánh giá và nhận xét</h3>
                            <div class="d-flex justify-content-center">
                                <div class="content text-center">
                                    <div class="ratings"> <h3><span class="product-rating">4.6</span><span>/5</span></h3>
                                        <div class="stars" style={{ fontSize: "18px", color: "#28a745" }}> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        <div class="rating-text pt-2"> <span><h3>46 ratings & 15 reviews</h3></span> </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    {/* <Grid container style={{paddingLeft:"20px"}}>
                            <Grid xs={12}>
                                <Grid container><form>
                                    <Grid item xs={6}><textarea placeholder="Viết Nhận xét" cols="75" rows="5"></textarea></Grid>
                                    <Grid item xs={6}><input type="submit" value="Submit" style={{backgroundColor:"#1AC67E",color:"#fff"}}></input> </Grid>
                                </form> </Grid>
                            </Grid>
                     </Grid> */}

                     {/* <Grid container xs={12}>
                            <Grid item xs={12} style={{padding:"10px 0px 0px 20px"}}><h5>Lọc xem theo: </h5></Grid>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Mới nhất</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Có hình ảnh</button>
                            <button type="button" style={{ border: "0.5px solid #C4C4C4", borderRadius: "5%", color:"white", backgroundColor:"#1AC67E", marginLeft: "20px" }} class="btn btn-outline-secondary mb-3">Đã mua hàng</button>
                    </Grid> */}
{/* 
                    <Grid container style={{padding:"10px 10px 0px 30px"}}>
                        <Grid item xs={6}> <hr></hr> </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" >
                                <Grid item direction="column" >
                                    <Grid><h5>{comments.username}</h5></Grid>
                                    <Grid>Đã đánh giá {comments.rating}</Grid>
                                </Grid>
                                <Grid item style={{paddingLeft:"50px"}}><h5>{comments.content}</h5></Grid>
                            </Grid>
                        </Grid>
                    </Grid> */}

                {/* <Grid xs={12}><CommentBox/> </Grid> */}
        </div>
        </div>
    )
}
