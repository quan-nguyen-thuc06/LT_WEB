import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {useState} from 'react';

function ShoppingCarts() {
	const [reload,setReload] = useState(false)
	const [loaddata,setLoaddata] = useState(false)
	let location = useLocation();
	let infoitem = location.state;
	if(!loaddata){
	if(localStorage.getItem('cart')!== null){
        let info = JSON.parse(localStorage.getItem('cart'))
		let check = false;
        for(let i=0;i<info.length;i++){
			if(info[i].id==infoitem.id&&info[i].rom!=infoitem.rom){
				info.push(infoitem)
				check= true;
				break;
			}
			if(info[i].id==infoitem.id&&info[i].rom==infoitem.rom){
				check= true;
				break;
			}
		}
		if(!check){
			info.push(infoitem)
		}
		console.log("infoitem")
		setLoaddata(true)
		localStorage.setItem('cart',JSON.stringify(info))
    }
	else{
		let info = [];
		info.push(infoitem)
		setLoaddata(true)
		localStorage.setItem('cart',JSON.stringify(info))
	}
}
	let info = JSON.parse(localStorage.getItem('cart'))
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
		<div class='row col-lg-8'>
		<div class='row col-md-10' style={{margin:'auto'}}>
		<h4 style={{fontWeight:'bold'}}>GIỎ HÀNG</h4>
		</div>
		</div>
		<div class='row'>
			<div class='col-lg-8 col-sm-12 mb-3 '>
				<div class='row col-md-10 shadow' style={{margin:'auto',borderRadius:'17px'}}>
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
				<div class='row col-md-9' style={{margin:'auto'}}>
					<div class="shadow" style={{backgroundColor:'#fff',borderRadius:'15px'}}>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>3 sản phẩm</span></p>
						<p class='mt-3'><span class="text-secondary">Số lượng</span>	<span class='float-end text-danger'>206.000.000</span></p>
						<p class='mt-3'><span class="text-secondary">Giảm giá</span>	<span class='float-end'><span>(-33%)</span>	<span class='text-danger'>6.700.000</span></span></p>
						<p class='mt-3'><span class="text-secondary">Phí vận chuyển</span>	<span class='float-end text-danger'>50.000</span></p>
						<hr class="solid"></hr>
						<p class='mt-3'><span class="text-secondary">Tổng tiền</span>	<span class='float-end text-danger'>199.999.999</span></p>
					</div>
					<button type="button" class="btn btn-success mt-3 ms-0" style={{borderRadius:'15px'}}>Xác nhận đơn hàng</button>
				</div>
			</div>
			</div>
		</div>
		</div>
	)
}
export default ShoppingCarts;