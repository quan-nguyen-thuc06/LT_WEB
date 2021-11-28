import ItemAddress from "../Components/ItemAddress";
import axios from "axios";
import {useState, useEffect} from 'react';
// const items =[
// 	{
// 		"name": "Nguyen van A",
// 		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
// 		"phone": "0123456789"
// 	},
// 	{
// 		"name": "Nguyen van A",
// 		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
// 		"phone": "0123456789"
// 	},
// 	{
// 		"name": "Nguyen van A",
// 		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
// 		"phone": "0123456789"
// 	}
// ]
function Address (){
	const [items,setItems]=useState([])
	useEffect(
		async() => {

			try {
				const res = await axios.get('http://localhost/Official/LT_WEB/server/api/address/read_address.php'
				,
				{ 
				  params:{
					username: "admin"
				  }
				}
				)
				setItems(res.data)
				
			  } catch (error) {
				console.log(error.message)
			  }
	},[])
	items.map((item)=>{
		item.name="Nguyen Van A";
		item.phone="0123456789";			
	})
	return (
		<div class="container-fluid">
		<div class="mt-3 mb-5">
		<div class='row col-lg-8'>
		<div class='row col-md-10 mb-3' style={{margin:'auto'}}>
			<h4 style={{fontWeight:'bold'}}>CHỌN ĐỊA CHỈ</h4>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3'>
			{/* render list adress */}
			{
				items.map((item)=> <ItemAddress item={item} />)
			}
		
			</div>
			<div class='col-lg-4 col-sm-12 mb-5'>
			<div class='row'>
				<div class='row col-md-9' style={{margin:'auto'}}>
					<div class="shadow-lg" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span>Số lượng</span>	<span class='float-end text-danger'>3 sản phẩm</span></p>
						<p class='mt-3'><span>Số lượng</span>	<span class='float-end text-danger'>206.000.000</span></p>
						<p class='mt-3'><span>Giảm giá</span>	<span class='float-end'><span>(-33%)</span>	<span class='text-danger'>6.700.000</span></span></p>
						<p class='mt-3'><span>Phí vận chuyển</span>	<span class='float-end text-danger'>50.000</span></p>
						<hr class="solid"></hr>
						<p class='mt-3 mb-3'><span>Tổng tiền</span>	<span class='float-end text-danger'>199.999.999</span></p>
					</div>
					<button type="button" class="btn btn-success mt-3 ms-0" style={{borderRadius:'15px'}}>Xác nhận đơn hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
		</div>
	);
}

export default Address;