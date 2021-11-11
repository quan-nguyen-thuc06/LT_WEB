import React from 'react';

function ShoppingCarts() {
	return (
		<div class="container-fluid" style={{backgroundColor:'#EAEAEA'}}>
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
			<h2>Giỏ hàng</h2>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3'>
				<div class='row col-md-10' style={{backgroundColor:'#fff',  height:'519px', margin:'auto',borderRadius:'17px'}}>
					<div class='mt-3'>
						<div class='row'>
						<div class='col-md-2 col-2 p-0'>
						<img class="img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg" alt="phone"/>
						</div>
						<div class='col-md-10 col-10'>
							<div class='row'>
								<div class='col-lg-8 col-md-8 col-7' style={{fontWeight:'bold'}}>Samsung Galaxy Z Fold3 5G</div>	
								<div class='col-lg-4 col-md-4 col-5'>
								<div class="d-flex justify-content-end">
								<button type="button" class="btn btn-outline-secondary" style={{width:'35px'}}>-</button>
                        		<input  class="form-control" type="text" value='9' style={{width:'35px'}}/>
                        		<button	type="button" class="btn btn-outline-secondary" style={{width:'35px'}}>+</button>
								<button type="button" class="btn" style={{width:'35px'}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
									<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
									</svg>
								</button>
								</div>
								</div>
								
							</div>
							<small><span>Đơn giá: </span>	<span class='text-danger'>43.000.000</span>		<span class="ms-2 text-decoration-line-through text-secondary">45.000.000</span></small><br/>
							<small><span>512 GB</span></small><br/>
							<small><span>Màu sắc: </span>	<span>Đỏ</span></small>	<span class='float-end text-danger'>199.999.999</span>
						</div>
						</div>
					<hr class="solid"></hr>
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
	)
}
export default ShoppingCarts;