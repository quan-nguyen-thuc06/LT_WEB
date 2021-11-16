import React from 'react'
import {Form, Row, Col, FloatingLabel, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Banner(){
  return(
    <div class="container">
      <h1> TIN TỨC </h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/Files/2019/09/26/1202150/d89f0a8587115e23c8156aa36db9ccbe5b67fd2813ff0_1280x719-800-resize.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://genk.mediacdn.vn/2018/9/1/lien-quan-mobile-giai-dap-thac-mac-cua-game-thu-khi-choi-event-hai-nao-2-15358007405381780984988.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://genk.mediacdn.vn/2018/8/3/lien-quan-mobile-he-lo-hinh-anh-ingame-cua-tuong-goc-indonesia-wiro-sableng-3-15332726808882128170977.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <main class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-10 col-xl-10 col-lg-10">
              <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                <li data-target="#carousel1_indicator" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-19.jpg" alt="First slide" /> 
                </div>
                <div class="carousel-item">
                  <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img src="assets/images/banners/slide3.jpg" alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              </div> 
            </div>

            <div class="d-none d-md-block col-md-2 d-lg-block flex-grow-1">
              <aside class="special-home-right">
                <a href="#">
                  <h6 class="bg-blue text-center text-white mb-0 p-2">Tin tức công nghệ </h6>
                </a>
                <a href="#">
                  <div class="card-banner border-bottom">
                    <img src="assets/images/items/1.jpg" height="80" class="rounded mx-auto d-block" />
                  </div>
                </a>
                <a href="#">
                  <div class="card-banner border-bottom">
                    <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" height="80" class="rounded mx-auto d-block" />
                  </div>
                </a>
                <a href="#">
                  <div class="card-banner border-bottom">
                    <img src="assets/images/items/6.jpg" height="80" class="rounded mx-auto d-block" />
                  </div>
                </a>
              </aside>
            </div>
            <a href="#" class="col-12">
              <div class="d-block d-md-none d-lg-none d-xl-none flex-grow-1">
                <h6 class="bg-blue text-center text-white mb-0 p-2">Tin tức công nghệ </h6>
                
              </div>
            </a>
          </div>
        </div> 
      </main>  */}
      <h3>Một số tin tức hấp dẫn khác</h3>
      <br></br>
    <div class = "row">
      <div class ="col-md-7 col-sm-12">
        <a href="#">
          <div class="card-banner border-bottom">
            <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" height="120" width="400" class="rounded mx-auto d-block" />
          </div>
        </a>
      </div>
      <div class="col-md-5 col-sm-12">
        <h3>một cô gái xin đẹp đang câu cá giữu bờ hồ...<a href="#">xem thêm</a></h3>
      </div>
    </div>
    <div class = "row">
      <div class ="col-md-7 col-sm-12">
        <a href="#">
          <div class="card-banner border-bottom">
            <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" height="120" width="400" class="rounded mx-auto d-block" />
          </div>
        </a>
      </div>
      <div class="col-md-5 col-sm-12">
        <h1>kzcnskjhnkzcsnk</h1>
      </div>
    </div>
    <div class = "row">
      <div class ="col-md-7 col-sm-12">
        <a href="#">
          <div class="card-banner border-bottom">
            <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" height="120" width="400" class="rounded mx-auto d-block" />
          </div>
        </a>
      </div>
      <div class="col-md-5 col-sm-12">
        <h1>kzcnskjhnkzcsnk</h1>
      </div>
    </div>
    </div>
  )
}
export default Banner