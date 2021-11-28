import Banner from '../Components/Banner';
import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
function Hiring (){
    const [data,setData]=useState([])
    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/employment/read.php')
        .then(response => {
            setData(response.data)
            //console.log(response.data)
        })
        .catch(error => console.log(error))
    }, [])
    
    if(data.length>0){
        console.log(data)
    }    

    function RenderProduct(){
        return <Fragment >{data.slice(0, data.length).map((index) => {
            return(
            <tr>
                <td scope="row">{index.id}</td>
                <td>{index.area}</td>
                <td>{index.deadline}</td>
                <td>{index.address}</td>
            </tr>
            )
            
        })}
        {console.log(data)}
        </Fragment>
    }

    return (
      <div className="container">
            <Banner/>
            <div className="container mt-5 table-responsive">
            <div class="table-wrapper">
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th class="col-1">STT</th>
                        <th class="col-4">Vị trí tuyển dụng</th>
                        <th class="col-2">Hạn nộp</th>
                        <th class="col-5">Địa điểm</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderProduct/>
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Kế toán</td>
                        <td>13/1/2022</td>
                        <td>TPHCM</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Tư vấn bán hàng</td>
                        <td>29/4/2022</td>
                        <td>Hà Nội</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Hỗ trợ kỹ thuật phần mềm</td>
                        <td>24/4/2022</td>
                        <td>Long An</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td >Sửa chữa laptop, điện thoại</td>
                        <td>28/2/2022</td>
                        <td>Huế</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td >Tiếp đón khách hàng</td>
                        <td>24/12/2022</td>
                        <td>Nha Trang</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td >Nhân viên vệ sinh</td>
                        <td>20/11/2022</td>
                        <td>Toàn quốc</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td >Bảo vệ</td>
                        <td>2/9/2022</td>
                        <td>Hải Phòng</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td >Quản lý</td>
                        <td>31/10/2022</td>
                        <td>Phú Quốc</td>
                    </tr> */}
                </tbody>
                </table>
            </div>
            </div>
      </div>
    );
  }
  
  export default Hiring;