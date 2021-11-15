import ItemAddress from "../Components/ItemAddress";
const items =[
	{
		"name": "Nguyen van A",
		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
		"phone": "0123456789"
	},
	{
		"name": "Nguyen van A",
		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
		"phone": "0123456789"
	},
	{
		"name": "Nguyen van A",
		"address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
		"phone": "0123456789"
	}
]
function Address (){
	{console.log(items);}
	return (
		<div class="container-fluid" style={{backgroundColor:'#EAEAEA'}}>
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
			<h4 style={{fontWeight:'bold'}}>CHỌN ĐỊA CHỈ</h4>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3'>
			{/* render list adress */}
			{
				items.map((item)=> <ItemAddress item={item} />)
			}
			
			<div class="row col-md-10 mt-3" style={{margin:'auto'}}>
				<div class="d-flex justify-content-end" style={{margin:'auto'}}>
					<button type="button" class="btn btn-success">Thêm địa chỉ</button>
				</div>
			</div>	
			</div>
			<div class='col-lg-4 col-sm-12'>
			<div class='row'>
				<div class='row col-md-9' style={{margin:'auto'}}>
					<div class="" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span>Số lượng</span>	<span class='float-end text-danger'>3 sản phẩm</span></p>
						<p class='mt-3'><span>Số lượng</span>	<span class='float-end text-danger'>206.000.000</span></p>
						<p class='mt-3'><span>Giảm giá</span>	<span class='float-end'><span>(-33%)</span>	<span class='text-danger'>6.700.000</span></span></p>
						<p class='mt-3'><span>Phí vận chuyển</span>	<span class='float-end text-danger'>50.000</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span>Tổng tiền</span>	<span class='float-end text-danger'>199.999.999</span></p>
					</div>
					<button type="button" class="btn btn-success mt-3" style={{borderRadius:'15px'}}>Xác nhận đơn hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}

export default Address;