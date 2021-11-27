import Banner from '../Components/Banner';
function Hiring (){
    return (
      <div className="container">
            <Banner/>
            <div className="container mt-5">
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Vị trí tuyển dụng</th>
                        <th scope="col">Hạn nộp</th>
                        <th scope="col">Địa điểm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
                </table>
            </div>
      </div>
    );
  }
  
  export default Hiring;