import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
function HotProducts(){
    const [data,setData]=useState([])
    const history = useHistory();
    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/product/read.php')
        .then(response => {
            setData(response.data)
            //console.log(response.data)
        })
        .catch(error => console.log(error))
    }, [])
    // if(data.length>0){
    //     console.log(data)
    //     console.log(data[0].images.slice(0,data[0].images.indexOf('+')))
    // }    
    
    // function getPosition(string, subString, index) {
    //     return string.split(subString, index).join(subString).length;
    //   }
    function handleClick(index){
        for (var j=0; j<data.length; j++){
            if(data[j].id==index.id){
              history.push('/chitietsanpham',data[j])  
            } 
        }
        
        
        //  console.log(j)
      }

    function nthIndex(str, pat, n){
        var L= str.length, i= -1;
        while(n-- && i++<L){
            i= str.indexOf(pat, i);
            if (i < 0) break;
        }
        return i;
    }


    function RenderProduct(){
        return <Fragment >{data.slice(0, 5).map((index) => {
            var start = index.images.indexOf('+')
            return(
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid" onClick={() =>handleClick(index)}>
                        <a href="/chitietsanpham"  class="img-wrap"> <img src={index.images.slice(start +2 ,nthIndex(index.images,'+',2))} /> </a>
                        <figcaption class="info-wrap">
                            <a href="/chitietsanpham"  class="title">{index.product_name}</a>
                            {console.log(index.id)}
                            <div class="price mt-1">{index.price} Đ</div>
                        </figcaption>
                    </div>
                </div>  
            )
            
        })}
        {console.log(data)}
        </Fragment>
    }
  return(
    <div class="container">
        <section  class="padding-bottom-sm">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Sản phẩm nổi bật</h4>
            </header>
            
            <div class="row row-sm">
                <RenderProduct/>
                {/* <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div> 
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div> 
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Great product name here</a>
                            <div class="price mt-1">$56.00</div> 
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div> 
                        </figcaption>
                    </div>
                </div> 
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>  */}
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid col d-flex justify-content-center text-center">
                        {/* <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption> */}
                        <a href="/admin/additem" class="title"><h2>Thêm sản phẩm mới</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        </a>
                        
                    </div>
                </div> 
                
            </div> 
        </section>
    </div>
  )
}
export default HotProducts