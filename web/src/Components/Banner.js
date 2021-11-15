import React from 'react'
function Banner(){
  return(
    <div class="container">
      <main class="card">
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
                  <img src="assets/images/banners/slide1.jpg" alt="First slide" /> 
                </div>
                <div class="carousel-item">
                  <img src="assets/images/banners/slide2.jpg" alt="Second slide" />
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
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Men clothing</h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
                    <img src="assets/images/items/1.jpg" height="80" class="rounded mx-auto d-block" />
                  </div>
                </a>
                <a href="#">
                  <div class="card-banner border-bottom">
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Winter clothing </h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
                    <img src="assets/images/items/2.jpg" height="80" class="rounded mx-auto d-block" />
                  </div>
                </a>
                <a href="#">
                  <div class="card-banner border-bottom">
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Home inventory</h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
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
      </main> 
    </div>
  )
}
export default Banner