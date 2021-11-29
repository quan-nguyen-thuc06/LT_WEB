import '../Pages/EditItem.css'
import React, {Component} from 'react'
import {Form, Button } from 'react-bootstrap'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';

const image_const = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU"

export default class RenderEditItem extends Component{
	constructor(props) {
		super(props);
		this.props = props;
		this.index=""
		this.url=""
		this.state = {
		  validated: false,
		  id: this.props.productData.id,
		  textName: this.props.productData.textName,
		  textType: this.props.productData.textType,
		  textbranch: this.props.productData.textbranch,
		  textColor: this.props.productData.textColor,
		  txtBattery:this.props.productData.txtBattery,
		  txtMemory: this.props.productData.txtMemory,
		  txtRom: this.props.productData.txtRom,
		  txtDisplaySize: this.props.productData.txtDisplaySize, 
		  txtInStock: this.props.productData.txtInStock,
		  txtPromotion:this.props.productData.txtPromotion,
		  txtPrice: this.props.productData.txtPrice,
		  image: this.props.productData.image,
		  image1: this.props.productData.image1,
		  image2: this.props.productData.image2,
		  image3: this.props.productData.image3,
		  image4: this.props.productData.image4,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	      }
		  
		handleSubmit = (event) => {
		      const form = event.currentTarget;
		      if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
		      }  
		      this.setState({validated: true});
			  if(this.state.textbranch&&this.state.textType&&this.state.textName&&this.state.textColor&&this.state.txtBattery&&this.state.txtPrice&&this.state.txtDisplaySize&&this.state.txtDisplaySize&&this.state.txtRom&&this.state.txtMemory&&this.state.txtInStock&&this.state.image!=image_const){
				let arrcolor = 	this.state.textColor.split(", ");
				let textColor =arrcolor[0];
				for(let i=1;i<arrcolor.length-1;i++){
					textColor = textColor + " + " + arrcolor[i];
				}
				textColor = textColor + " + " + arrcolor[arrcolor.length-1];
				
				let promotionarr = 	this.state.txtPromotion.split("\n");
				let promotion = promotionarr[0];
				for(let i=1;i<promotionarr.length-1;i++){
					promotion = promotion + " + " + promotionarr[i];
				}
				promotion = promotion + " + " + promotionarr[promotionarr.length-1];

				let image = "";
				if (this.state.image!=image_const) image+=this.state.image
				if (this.state.image1!=image_const) image= image + " + " + this.state.image1
				if (this.state.image2!=image_const) image= image + " + " + this.state.image2
				if (this.state.image3!=image_const) image= image + " + " + this.state.image3
				if (this.state.image4!=image_const) image= image + " + " + this.state.image4
				console.log(textColor,image)
				axios.put('http://localhost/Official/LT_WEB/server/api/product/update.php', {
						id: this.state.id,
						brand: this.state.textbranch,
						type: this.state.textType,
						product_name: this.state.textName,
						color: textColor,
						battery: this.state.txtBattery,
						promotion: promotion,
						price: this.state.txtPrice,
						screen: this.state.txtDisplaySize, 
						Rom: this.state.txtRom,
						Ram: this.state.txtMemory,
						capacity: parseInt(this.state.txtInStock),
						images: image
				}) 
				.then(function (response) {
					console.log(response);
					if(response.data=="success"){
						toast.success('Thay đổi thành công :)', {
							position: "top-right",
							autoClose: 600,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
						setTimeout(()=>{window.location.href = "/admin/product"},600)
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			}
			else{
				toast.warning('Xin hãy nhập đầy đủ thông tin :)', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		};
	    
	    handleInputChange(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;
		
			this.setState({
			[name]: value
			});
	    };

		On_click=(e)=>{
			const target = e.target;
			const name = target.name;
			this.index= name;
		  document.getElementById("openmodal").click()
	  	}
	render() {

	return(
		<div class='container-fluid' id='product-list'>
		<ToastContainer />
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<Form noValidate validated={this.state.validated} >
		<div class ='row' style={{marginTop:'5px'}}>
		<h4 class="text-center">Thông tin sản phẩm</h4>
			<div class="col-md-7 col-sm-12">
				<Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
				<Form.Label>Tên sản phẩm</Form.Label>
				<Form.Control type="text" placeholder="Tên sản phẩm" style={{borderRadius:'9px'}} name="textName" value={this.state.textName} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Please provide a valid city.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Loại</Form.Label>
				<Form.Control type="text" placeholder="Nhập loại sản phẩm" style={{borderRadius:'9px'}} name="textType" value={this.state.textType} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Hãng</Form.Label>
				<Form.Control type="text" placeholder="Nhập hãng sản phẩm" style={{borderRadius:'9px'}} name="textbranch" value={this.state.textbranch} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Gía</Form.Label>
				<Form.Control type="number" placeholder="Nhập giá" style={{borderRadius:'9px'}} required name="txtPrice" value={this.state.txtPrice} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Màu</Form.Label>
				<Form.Control type="text" placeholder="Nhập màu 1, màu 2,.." style={{borderRadius:'9px'}} required name="textColor" value={this.state.textColor} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nhập dung lượng pin</Form.Label>
				<Form.Control type="text" placeholder="Nhập dung lượng pin" style={{borderRadius:'9px'}}  name="txtBattery" value={this.state.txtBattery} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Dung lượng bộ nhớ</Form.Label>
				<Form.Control type="number" placeholder="Nhập dung lượng rom" style={{borderRadius:'9px'}} required name="txtRom" value={this.state.txtRom} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nhập dung lượng ram</Form.Label>
				<Form.Control type="number" placeholder="Nhập dung lượng ram" style={{borderRadius:'9px'}}  name="txtMemory" value={this.state.txtMemory} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Kích thước màn hình</Form.Label>
				<Form.Control type="text" placeholder="Nhập kích thước màn hình" style={{borderRadius:'9px'}} required name="txtDisplaySize" value={this.state.txtDisplaySize} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlTextarea1" style={{margin:'10px 0 2px'}}>
					<Form.Label>Chi tiết khuyến mãi</Form.Label>
					<Form.Control as="textarea" rows={3} name="txtPromotion" value={this.state.txtPromotion} onChange={this.handleInputChange}/>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Số lượng</Form.Label>
				<Form.Control type="number" placeholder="Nhập số lượng" style={{borderRadius:'9px'}}  name="txtInStock" value={this.state.txtInStock} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'25px'}}>
				<div class ='row'>
				<div class="col-md-9 col-sm-9 " style={{margin:'auto', boder:"1px groove #F57E7E"}}>
					  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2" id="openmodal" style={{display:'none'}}>Open modal</button>
				<img class="img-fluid" src={this.state.image} name ="image" onClick={this.On_click}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 " style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 " style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image3} name ="image3" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image4} name ="image4" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-5">
		{/* <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" onClick={this.remove}>Xóa sản phẩm</button> */}
		<Button type="button" variant="success" onClick={this.handleSubmit}>Lưu thay đổi</Button>
		<button type="button" class="btn btn-success" onClick={()=>{window.location.href = "/admin/product"}}>Hủy</button>
		</div>
		</Form>
		{/* <!-- The Modal2 --> */}
		<div class="modal fade" id="myModal2">
			<div class="modal-dialog">
				<div class="modal-content">

				{/* <!-- Modal Header --> */}
				<div class="modal-header">
					<h4 class="modal-title">Nhập đường dẫn hình ảnh</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

				{/* <!-- Modal body --> */}
				<div class="modal-body">
					<input type="text" class="form-control" placeholder="Đường dẫn hình ảnh" name="url" 
					onKeyUp={(even) => {
						if (even.key === "Enter") {
							even.preventDefault();
							document.getElementById('OKButton').click()
						}
						else this.url= even.target.value
					}}/>
				</div>

				{/* <!-- Modal footer --> */}
				<div class="modal-footer">
					{/* <button type="button" class="btn btn-primary" onClick={this.indexImage} data-bs-dismiss="modal">Chọn file</button> */}
					<button type="button" class="btn btn-success" id="OKButton" onClick={(e)=>{
						const indexImage =this.index;
							if(this.url!=''){
							const url = this.url;
							this.setState({
								[indexImage]: url
							});
						}
						}} 
					data-bs-dismiss="modal">OK</button>
					<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
				</div>

				</div>
			</div>
		</div>
		</div>
		</div>
		{/* <Footer/> */}
		</div>
	);
	}
}