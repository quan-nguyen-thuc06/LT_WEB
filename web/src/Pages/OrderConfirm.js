import ItemOrder from "../Components/ItemOrder";
const itemOrders = [
    {
        "name": "Samsung Galaxy Z Fold3 5G",
        "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
        "price": 42000000,
        "oldprice": 45000000
    },
	{
        "name": "Samsung Galaxy Z Fold3 5G",
        "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
        "price": 42000000,
        "oldprice": 45000000
    }
]

function OrderConfirm() {
	return (
		<div class="container-fluid" style={{backgroundColor:'#EAEAEA'}}>
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
		<h4 style={{fontWeight:'bold'}}>XÁC NHẬN ĐƠN HÀNG</h4>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3'>
				<div class='row col-md-10' style={{backgroundColor:'#fff',  height:'519px', margin:'auto',borderRadius:'17px'}}>
					<div class='mt-3'>
						{
							itemOrders.map(item => <ItemOrder product={item}/>)
						}
					</div>
				</div>
			</div>
			<div class='col-lg-4 col-sm-12'>
			<div class='row'>
				<div class='row col-md-9' style={{margin:'auto'}}>
					<div class="mb-3" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>3 sản phẩm</span></p>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>206.000.000</span></p>
						<p class='mt-3'><span class="text-secondary">Giảm giá</span>	<span class='float-end'><span>(-33%)</span>	<span class='text-danger'>6.700.000</span></span></p>
						<p class='mt-3'><span class="text-secondary">Phí vận chuyển</span>	<span class='float-end text-danger'>50.000</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>199.999.999</span></p>
					</div>
					<div class="mb-3" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class="mt-3 text-secondary">Địa chỉ</p>
						<p style={{fontWeight:'bold'}}>Nguyễn Văn A</p>
						<small>268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh</small><br/>
						<small>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
								</svg>
							</span>
							<span class="ms-2">0123456789</span>
						</small>
						<p class='mt-3'>
							<span class='text-secondary'>Phương thức thanh toán</span><br/>
							<span>COD</span>
						</p>
					</div>
					<button type="button" class="btn btn-success mb-3" style={{borderRadius:'15px'}}>Đặt hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
	)
}
export default OrderConfirm;