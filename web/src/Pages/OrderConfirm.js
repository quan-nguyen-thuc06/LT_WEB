import {useState} from 'react';

function OrderConfirm() {
	const [reload,setReload] = useState(false)
	let shipment = 500000
	let info = JSON.parse(localStorage.getItem('cart'))
	let address = localStorage.getItem('address')
	let count=0;
	let total =0;
	for(let i =0;i<info.length;i++){
		count +=info[i].quantity;
		total +=info[i].quantity*info[i].price;
	}
	const HandleIncrese = (event) => {
		console.log(event.target.name,"value")
		let info = JSON.parse(localStorage.getItem('cart'));
		for(let i=0;i<info.length;i++){
			if(info[i].id== event.target.name){
				info[i].quantity += 1; 
			}
		}
		localStorage.setItem('cart',JSON.stringify(info)) 
        setReload(!reload)
    }
    const HandleDecrese = (event) => {
		let info = JSON.parse(localStorage.getItem('cart'));
		let index;
		for(let i=0;i<info.length;i++){
			if(info[i].id== event.target.name){
				index = i; 
			}
		}
        if (info[index].quantity>0) {
	
			info[index].quantity -= 1; 
			localStorage.setItem('cart',JSON.stringify(info))
            setReload(!reload)
        }
    }
	const HandleDelete = (event)=>{
        let info = JSON.parse(localStorage.getItem('cart'));
		let index;
		for(let i=0;i<info.length;i++){
			if(info[i].id== event.target.name){
				index = i; 
			}
		}
		info.splice(index, 1);
		localStorage.setItem('cart',JSON.stringify(info)) 
		setReload(!reload)
    }
	return (
		<div class="container-fluid mt-3 mb-5">
		<div class="mt-3 mb-5">
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
		<h4 style={{fontWeight:'bold'}}>XÁC NHẬN ĐƠN HÀNG</h4>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3'>
				<div class='row col-md-10 shadow-lg' style={{ margin:'auto',borderRadius:'17px'}}>
					<div class='mt-3'>
						{
							info.map(product => {
								return(
								<>
								<div class='row'>
									<div class='col-md-2 col-2 p-0'>
										<img class="img-fluid" src={product.image} alt="phone"/>
										</div>
										<div class='col-md-10 col-10'>
											<div class='row'>
												<div class='col-lg-8 col-md-8 col-7' style={{fontWeight:'bold'}}>{product.name}</div>	
												<div class='col-lg-4 col-md-4 col-5'>
												<div class="d-flex justify-content-end">
												<button type="button" class="btn btn-outline-secondary" name={product.id} onClick={HandleDecrese} style={{width:'35px'}}>-</button>
												<input  class="form-control" type="text" value={product.quantity} style={{width:'35px'}}/>
												<button	type="button" class="btn btn-outline-secondary" name={product.id} onClick={HandleIncrese} style={{width:'35px'}}>+</button>
												<button type="button" class="btn" style={{width:'35px'}} name={product.id} onClick={HandleDelete}>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
													<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
													</svg>
												</button>
												</div>
												</div>
													
											</div>
											<small><span>Đơn giá: </span>	<span class='text-danger'>{product.price}</span>		<span class="ms-2 text-decoration-line-through text-secondary">{product.oldprice}</span></small><br/>
											<small><span>512 GB</span></small><br/>
											<small><span>Màu sắc: </span>	<span>Đỏ</span></small>	<span class='float-end text-danger'>{product.price * product.quantity}</span>
										</div>
									</div>
									<hr class="solid" ></hr>
									</>
								)
							})
						}
					</div>
				</div>
			</div>
			<div class='col-lg-4 col-sm-12'>
			<div class='row'>
				<div class='row col-md-9 mb-5' style={{margin:'auto'}}>
					<div class="shadow mb-3" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>{count+ " sản phẩm"} </span></p>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>{total +" Đ"}</span></p>
						<p class='mt-3'><span class="text-secondary">Phí vận chuyển</span>	<span class='float-end text-danger'>{shipment +" Đ"}</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>{total+ shipment + " Đ"}</span></p>
					</div>
					<div class="mb-3 shadow-lg" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class="mt-3 text-secondary">Địa chỉ</p>
						<p style={{fontWeight:'bold'}}>Nguyễn Văn A</p>
						<small>{address}</small><br/>
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
					<button type="button" class="btn btn-success ms-0 mt-4 mb-3" style={{borderRadius:'15px'}}>Đặt hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
		</div>
	)
}
export default OrderConfirm;