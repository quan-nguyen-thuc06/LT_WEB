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

function ShoppingCarts() {
	return (
		<div class="container-fluid" style={{backgroundColor:'#EAEAEA'}}>
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
		<h4 style={{fontWeight:'bold'}}>GIỎ HÀNG</h4>
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
					<div class="" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>3 sản phẩm</span></p>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>206.000.000</span></p>
						<p class='mt-3'><span class="text-secondary">Giảm giá</span>	<span class='float-end'><span>(-33%)</span>	<span class='text-danger'>6.700.000</span></span></p>
						<p class='mt-3'><span class="text-secondary">Phí vận chuyển</span>	<span class='float-end text-danger'>50.000</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>199.999.999</span></p>
					</div>
					<button type="button" class="btn btn-success mt-3" style={{borderRadius:'15px'}}>Xác nhận đơn hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
	)
}
export default ShoppingCarts;