import ItemAddress from "../Components/ItemAddress";
import axios from "axios";
import {useState, useEffect} from 'react';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Address (){
	const [items,setItems]=useState([])
	let user = JSON.parse(localStorage.getItem('user'))
	let shipment = 500000
	useEffect(
		async() => {

			try {
				const res = await axios.get('http://localhost/Official/LT_WEB/server/api/address/read_address.php'
				,
				{ 
				  params:{
					username: user.username
				  }
				}
				)
				if(res.data)
					setItems(res.data)
				
			  } catch (error) {
				console.log(error.message)
			  }
	},[])
	items.map((item)=>{
		item.name=user.fullname;
		item.phone=user.phone;			
	})
	let info = JSON.parse(localStorage.getItem('cart'))
	let count=0;
	let total =0;
	for(let i =0;i<info.length;i++){
		count +=info[i].quantity;
		total +=info[i].quantity*info[i].price;
	}
	return (
		<div class="container-fluid">
			<ToastContainer/>
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
				<div class="shadow" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>{count+ " sản phẩm"} </span></p>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>{total +" Đ"}</span></p>
						<p class='mt-3'><span class="text-secondary">Phí vận chuyển</span>	<span class='float-end text-danger'>{shipment +" Đ"}</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>{total+ shipment + " Đ"}</span></p>
					</div>
				<button type="button" class="btn btn-success mt-3 ms-0 mb-5" style={{borderRadius:'15px'}} onClick={()=>{
					if(localStorage.getItem('address')==null){
						toast.warning('Bạn chưa chọn địa chỉ', {
							position: "top-center",
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
					});
					}
					else window.location.href = "/address/orderconfirm"
					}}>Xác nhận đơn hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
		</div>
	);
}

export default Address;