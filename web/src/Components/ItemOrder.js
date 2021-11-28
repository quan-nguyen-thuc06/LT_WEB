import {useState} from 'react';

function ItemOrder(props) {
	const [counter, setCounter] = useState(1)
	const HandleIncrese = () => {
		let info = JSON.parse(localStorage.getItem('cart'));
		for(let i=0;i<info.length;i++){
			if(info[i].id= props.product.id){
				info[i].quantity = counter + 1; 
			}
		}
		localStorage.setItem('cart',JSON.stringify(info)) 
        setCounter(counter + 1)
    }

    const HandleDecrese = () => {
        if (counter > 0) {
			let info = JSON.parse(localStorage.getItem('cart'));
			for(let i=0;i<info.length;i++){
				if(info[i].id= props.product.id){
					info[i].quantity = counter - 1; 
				}
			}
			localStorage.setItem('cart',JSON.stringify(info))
            setCounter(counter - 1)
        }
    }
	
	const HandleDelete = ()=>{
        let info = JSON.parse(localStorage.getItem('cart'));
		let index;
		for(let i=0;i<info.length;i++){
			if(info[i].id= props.product.id){
				index = i; 
			}
		}
		info.splice(index, 1);
		localStorage.setItem('cart',JSON.stringify(info)) 
		setCounter(counter - 1)
    }
	return (
		<>
			<div class='row'>
				<div class='col-md-2 col-2 p-0'>
					<img class="img-fluid" src={props.product.image} alt="phone"/>
					</div>
					<div class='col-md-10 col-10'>
						<div class='row'>
							<div class='col-lg-8 col-md-8 col-7' style={{fontWeight:'bold'}}>{props.product.name}</div>	
							<div class='col-lg-4 col-md-4 col-5'>
							<div class="d-flex justify-content-end">
							<button type="button" class="btn btn-outline-secondary" onClick={HandleDecrese} style={{width:'35px'}}>-</button>
                        	<input  class="form-control" type="text" value={counter} style={{width:'35px'}}/>
                        	<button	type="button" class="btn btn-outline-secondary" onClick={HandleIncrese} style={{width:'35px'}}>+</button>
							<button type="button" class="btn" style={{width:'35px'}} onClick={HandleDelete}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
								<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
								</svg>
							</button>
							</div>
							</div>
								
						</div>
						<small><span>Đơn giá: </span>	<span class='text-danger'>{props.product.price}</span>		<span class="ms-2 text-decoration-line-through text-secondary">{props.product.oldprice}</span></small><br/>
						<small><span>512 GB</span></small><br/>
						<small><span>Màu sắc: </span>	<span>Đỏ</span></small>	<span class='float-end text-danger'>{props.product.price * counter}</span>
					</div>
					</div>
			<hr class="solid"></hr>
		</>
	)
}
export default ItemOrder;