//import './Aside.css'
//import '../Contex/Sidebar.js'
import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function ProductPortfolio(){
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
  const[brand, setBrand] = useState('all')
  const[minPrice, setMinPrice] = useState(0) 
  const[maxPrice, setMaxPrice] = useState(100000000) 
  const[color, setColor] = useState('all')

  function HandleMinprice  (temp)  {
    setMinPrice(temp)
    console.log(temp)
  }
  function HandleMaxprice  (temp) {
    setMaxPrice(temp)
    console.log(temp)
  }
  function handleBrand (temp){
    setBrand(temp)
    console.log(temp)
  }
  function HandleColor (temp){
    setColor(temp)
    console.log(temp)
  }


  function RenderProduct(brand_param, min_pram, max_param, color_param){
      return <Fragment >{data.slice(0, data.length).map((index) => {
          var start = index.images.indexOf('+')
          var end = nthIndex(index.images,'+',2)
          var indexcolor = -1

          if (end == -1){
            end = index.images.length
          }

          //{console.log(brand_param)}
          if((index.brand==brand_param || brand=='all')&&(Number(index.price)>Number(min_pram) && Number(index.price) < Number(max_param) || min_pram=='' || Number(max_param)=='')&&(color_param=='all'|| index.color.indexOf(color_param)!=-1)){
          return(
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div class="card shadow card-sm card-product-grid" onClick={() =>handleClick(index)}>
                      <a href="/chitietsanpham"  class="img-wrap"> <img src={index.images.slice(start +2 ,end)} /> </a>
                      <figcaption class="info-wrap">
                          <a href="/chitietsanpham"  class="title">{index.product_name}</a>
                          <div class="price mt-1">{index.price} Đ</div>
                      </figcaption>
                  </div>
              </div>  
          )
          }
      })}
      {console.log(data)}
      </Fragment>
  }


  return(
<div class="container-fluid">
<div class="row">
<div class="col-xs-12 col-sm-4 col-md-3 col-xl-2 l-navbar active-nav" id="sidebarMenu" >
<nav class=" px-sm-2 px-0 bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <h3>Danh mục sản phẩm</h3>
        <a
          href="#"
          class="list-group-item list-group-item-action py-2 ripple active" data-toggle="list" role="tab"
          aria-current="true"
          onClick={() => handleBrand('all')}
          >
          {/* <i class="fas fa-tachometer-alt fa-fw me-3"></i> */}
          <span>Tất cả</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('Apple')}>
            {/* <i class="fas fa-chart-area fa-fw me-3"></i> */}
          <span>Iphone</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('SamSung')}>
            {/* <i class="fas fa-chart-area fa-fw me-3"></i> */}
          <span>Samsung</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('Xiaomi')}>
            {/* <i class="fas fa-lock fa-fw me-3"></i> */}
          <span>Xiaomi</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('Oppo')}>
            {/* <i class="fas fa-chart-line fa-fw me-3"></i> */}
          <span>Oppo</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('Vivo')}>
            {/* <i class="fas fa-chart-pie fa-fw me-3"></i> */}
          <span>Vivo</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab" onClick={() => handleBrand('Real me')}>
            {/* <i class="fas fa-chart-bar fa-fw me-3"></i> */}
          <span>Realme</span></a
        >
        {/* <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-globe fa-fw me-3"></i><span>International</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-building fa-fw me-3"></i><span>Partners</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
        > */}
        <div class="border-bottom my-3">
          <h3>Giá</h3>
          <h6>Chọn khoảng giá</h6>
          <div class='row'>
            <div class="col-6 col-sm-12">
              <label for="exampleInput1">Từ</label>
              <input type="number" class="form-control" id="exampleInput1" onChange={(event) => HandleMinprice(event.target.value)}></input>
            </div>
            <div class="col-6 col-sm-12">
              <label for="exampleInput2">Đến</label>
              <input type="number" class="form-control" id="exampleInput2" onChange={(event) => HandleMaxprice(event.target.value)}></input>
            </div>
          </div>
          {/* <div class="col text-center">
            <button type="button" class="btn btn-success my-2">Áp dụng</button>
          </div> */}
        </div>
        <h3>Màu sắc</h3>
        <div class="btn-group row row-sm border-bottom" role="group" aria-label="Basic radio toggle button group">
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio1" style={{width:'70px'}} onClick={() => HandleColor('Black')}>Đen</label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio2" style={{width:'70px'}} onClick={() => HandleColor('White')}>Trắng</label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio3" style={{width:'70px'}} onClick={() => HandleColor('Gray')}>Xám</label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio4" style={{width:'70px'}} onClick={() => HandleColor('Blue')}>Xanh</label>
          </div>
        </div>
      </div>
    </div>
  </nav>

</div>

  <div class=" col-sm-8 col-md-9 col-xl-10">


  <section  class="padding-bottom-sm  px-sm-2 px-0">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase"></h4>
            </header>
            
            <div class="row row-sm">
                
                {RenderProduct(brand, minPrice, maxPrice, color)}
            </div> 
        </section>
        </div>
  </div>
</div>
  )
  
}



export default ProductPortfolio;