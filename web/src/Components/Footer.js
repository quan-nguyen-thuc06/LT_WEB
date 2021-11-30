import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
export default function Footer() {
    const [dataFooter,setDataFooter]=useState([])
    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/information/read.php')
        .then(response => {
            setDataFooter(response.data)
            //console.log(dataFooter)
        })
        .catch(error => console.log(error))
    }, [])
    let arrService = [];
    let arrSupport = [];
    if(dataFooter.length >0){
    arrSupport = dataFooter[0].Support.split(" + ")
    arrService = dataFooter[0].Service.split(" + ")
    }
    console.log(arrSupport)
    console.log(arrService)

    function RenderService(){
        return <Fragment >{arrService.slice(0, arrService.length).map((index) => {
            return(
                <p>{index}</p>
            )
            
        })}
        </Fragment>
    }

    function RenderSupport(){
        return <Fragment >{arrSupport.slice(0, arrSupport.length).map((index) => {
            return(
                <p>{index}</p>
            )
            
        })}
        </Fragment>
    }

    return (
        <>
        {/* <div id="footer"> */}
            <footer style={{ backgroundColor: "#f8e0dc" }} className="container-fluid " id="footer">
                <div className="row text-center ">
                    <div className="col-sm-3 mt-4 mb-4">
                        <h3>Tên và Logo cửa hàng</h3>
                        <p> Giới thiệu chung cửa hàng</p>
                    </div>
                    <div className="col-sm-3 mt-4 mb-4">
                        <h3>Liên hệ</h3>
                        <p><i className="fas fa-phone-alt"></i> {dataFooter[0].Phone}</p>
                        <p><i className="fas fa-mail-bulk"></i> {dataFooter[0].Email}</p>
                        <p><i className="fas fa-map-marker-alt"></i>{dataFooter[0].Address}</p>
                    </div>
                    <div className="col-sm-3 mt-4 mb-4">
                        <h3>Hỗ trợ khách hàng</h3>
                        {/* <p>Mua hàng từ xa</p>
                        <p>Quy định đổi trả</p> */}
                        <RenderService/>
                    </div>
                    <div className="col-sm-3 mt-4 mb-4">
                        <h3>Dịch vụ cung cấp</h3>
                        {/* <p>Dịch vụ sửa chữa</p>
                        <p>Nâng cấp phần cứng</p>
                        <p>Bảo hành sản phẩm</p> */}
                        <RenderSupport/>
                    </div>
                </div>
            </footer>
        {/* </div> */}
        </>
    );
}