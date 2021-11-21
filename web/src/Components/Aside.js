import React from 'react'
function Aside(){
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
          class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab"
          aria-current="true">
          {/* <i class="fas fa-tachometer-alt fa-fw me-3"></i> */}
          <span>Iphone</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active" data-toggle="list" role="tab">
            {/* <i class="fas fa-chart-area fa-fw me-3"></i> */}
          <span>Samsung</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
            {/* <i class="fas fa-lock fa-fw me-3"></i> */}
          <span>Xiaomi</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
            {/* <i class="fas fa-chart-line fa-fw me-3"></i> */}
          <span>Oppo</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
            {/* <i class="fas fa-chart-pie fa-fw me-3"></i> */}
          <span>Vivo</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
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
        <div class="border-bottom">
          <h3>Giá</h3>
          <h6>Chọn khoảng giá</h6>
          <div class='row'>
            <div class="col-6">
              <label for="exampleInput1">Từ</label>
              <input type="number" class="form-control" id="exampleInput1"></input>
            </div>
            <div class="col-6">
              <label for="exampleInput2">Đến</label>
              <input type="number" class="form-control" id="exampleInput2"></input>
            </div>
          </div>
          <button type="button" class="btn btn-success my-2">Áp dụng</button>
        </div>
        <h3>Màu sắc</h3>
        <div class="btn-group row row-sm border-bottom" role="group" aria-label="Basic radio toggle button group">
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio1" style={{width:'70px'}}>Đen</label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio2" style={{width:'70px'}}>Trắng</label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio3" style={{width:'70px'}}>Vàng </label>
          </div>
          <div class="col-auto col-sm-6">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
            <label class="btn btn-outline-secondary" for="btnradio4" style={{width:'70px'}}>Xanh</label>
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
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
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
                </div> 
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid col d-flex justify-content-center">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption>
                    </div>
                </div> 
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
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
                </div> 
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid col d-flex justify-content-center">
                        <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption>
                    </div>
                </div> 
            </div> 
        </section>
        </div>
  </div>
</div>
  )
  
}



export default Aside