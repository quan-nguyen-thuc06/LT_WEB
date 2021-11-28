import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
function Banner(){
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
  // useEffect(()=>{
  //   const getData = async ()=>{
  //     try {
  //       const res = await axios.get('http://localhost/Official/LT_WEB/server/api/product/read.php') 
  //       setData(res.data)
  //       //console.log(res.data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   getData()
  // },[])
  // if(data.length>0){
  // console.log(data[0].images.slice(0,data[0].images.indexOf('+')))}

  function handleClick(i){
    history.push('/chitietsanpham',data[i])
    // console.log(i)
  }
  return(
    <div class="container">
      { data?

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
                  <img src="https://i.pinimg.com/564x/07/b4/27/07b427c6bfabfb5d663efaaf05392b0c.jpg" alt="First slide" /> 
                </div>
                <div class="carousel-item">
                  <img src="https://i.pinimg.com/564x/08/b6/20/08b62094c27a3e72f5860d428f062e54.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img src="https://i.pinimg.com/564x/9c/2c/fa/9c2cfa8072b450c15a538dffe3fb33f2.jpg" alt="Third slide" />
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
                <a href="/tintuc">
                  <h6 class="bg-blue text-center text-white mb-0 p-2">Tin tức công nghệ </h6>
                </a>
                <a href="/chitietsanpham" onClick={() =>handleClick(0)}>
                  <div class="card-banner border-bottom mt-2">
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Men clothing</h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
                    {data.length > 0 ?
                    <img src={data[0].images.slice(0,data[0].images.indexOf('+'))} height="80" class="rounded mx-auto d-block" />
                    :null
                    }
                  </div>
                </a>
                <a href="/chitietsanpham" onClick={() =>handleClick(1)}>
                  <div class="card-banner border-bottom mt-2">
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Winter clothing </h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
                    {data.length > 0 ?
                    <img src={data[1].images.slice(0,data[1].images.indexOf('+'))} height="80" class="rounded mx-auto d-block" />
                    :null
                    }
                    </div>
                </a>
                <a href="/chitietsanpham" onClick={() =>handleClick(2)}>
                  <div class="card-banner border-bottom mt-2" >
                    {/* <div class="py-3" style={{width:80}}>
                      <h6 class="card-title">Home inventory</h6>
                      <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                    </div>  */}
                    {data.length > 0 ?
                    <img src={data[2].images.slice(0,data[2].images.indexOf('+'))} height="80" class="rounded mx-auto d-block" />
                    :null
                    }
                  </div>
                </a>
              </aside>
            </div>
            {/* <a href="#" class="col-12">
              <div class="d-block d-md-none d-lg-none d-xl-none flex-grow-1">
                <h6 class="bg-blue text-center text-white mb-0 p-2">Tin tức công nghệ </h6>
                
              </div>
            </a> */}
          </div>
        </div> 
      </main> 
      :null
      }

    </div>
  )
}
export default Banner