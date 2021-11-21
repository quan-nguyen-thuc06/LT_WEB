import './AddItem.css'
import React, {Component } from 'react'
import {Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class EditItem extends Component{
	constructor(props) {
		super(props);
		this.index=""
		this.state = {
		  validated: false,
		  textName: "",
		  textType: "",
		  textCost: "",
		  textColor: "",
		  txtMemory:"",
		  textDiscount: "",
		  textInfor: "",
		  textSpeFeatures: "",
		  textRelaPro: "",
		  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.imageHandler = this.imageHandler.bind(this);
		this.indexImage = this.indexImage.bind(this);
	      }
		  
		handleSubmit = (event) => {
		      const form = event.currentTarget;
		      if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		      }  
		      this.setState({validated: true});
		// var content = "Name: "+ this.state.textName;
		// console.log(content)
		};
	    
	      	handleInputChange(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
			[name]: value
			});
	     	 };
		imageHandler = (e) => {
			var indexImage =this.index;
			let reader = new FileReader();
			let file = e.target.files[0];
			reader.onloadend = () => {
			this.setState({
				[indexImage]: reader.result
			});
			}
			reader.readAsDataURL(file)
		  };
		indexImage=(e)=>{
			  const target = e.target;
			  const name = target.name;
			  this.index= name;
			console.log("start")
			document.getElementById("chosefile").click()
		}
	render() {

	return(
		<div class='container-fluid' id='product-list'>
		{/* <Header/> */}
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
		<div class ='row' style={{marginTop:'5px'}}>
		<h4 class="text-center">Thông tin sản phâm</h4>
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
				<Form.Control type="text" placeholder="Nhập hãng sản phẩm" style={{borderRadius:'9px'}} name="textType" value={this.state.textType} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Giá</Form.Label>
				<Form.Control type="text" placeholder="Nhập giá của sản phẩm" style={{borderRadius:'9px'}}required name="textCost" value={this.state.textCost} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
				Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Màu</Form.Label>
				<Form.Control type="text" placeholder="Nhập màu 1, màu 2,.." style={{borderRadius:'9px'}} required name="textColor" value={this.state.textColor} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Dung lượng bộ nhớ</Form.Label>
				<Form.Control type="text" placeholder="Nhập dung lượng bộ nhớ" style={{borderRadius:'9px'}} required name="txtMemory" value={this.state.txtMemory} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Thông tin ưu đãi</Form.Label>
				<Form.Control type="text" placeholder="Nhập các thông tin ưu đãi đặc biệt" style={{borderRadius:'9px'}}  name="textDiscount" value={this.state.textDiscount} onChange={this.handleInputChange}/>
				{/* <Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback> */}
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Mô tả chi tiết</Form.Label>
				<Form.Control type="text" placeholder="Nhập các mô tả chi tiết" style={{borderRadius:'9px'}} required name="textInfor" value={this.state.textInfor} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Các tính  năng đặc biệt</Form.Label>
				<Form.Control type="text" placeholder="Nhập các tính năng đặc biệt khác của sản phẩm" style={{borderRadius:'9px'}} name="textSpeFeatures" value={this.state.textSpeFeatures} onChange={this.handleInputChange} />
				{/* <Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback> */}
				</Form.Group>
			
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Các sản phẩm liên quan</Form.Label>
				<Form.Control type="text" placeholder="Nhập các dòng sản phẩm liên quan" style={{borderRadius:'9px'}} name="textRelaPro" value={this.state.textRelaPro} onChange={this.handleInputChange} />
				{/* <Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback> */}
				</Form.Group>
		
			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'25px'}}>
				<div class ='row'>
				<div class="col-md-10 col-sm-12 " style={{margin:'auto', boder:"1px groove #F57E7E"}}>
				<input type="file" style={{display:'none'}} accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
				onChange={this.imageHandler} id="chosefile"
          			ref={fileInput => this.fileInput=fileInput}/>
				<img class="img-fluid" src={this.state.image} name ="image" onClick={this.indexImage}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.indexImage}/>
				</div>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.indexImage}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src={this.state.image3} name ="image3" onClick={this.indexImage}/>
				</div>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src={this.state.image4} name ="image4" onClick={this.indexImage}/>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-3">
		<Button type="submit" variant="primary">Lưu thay đổi</Button>
		<Button type="submit" variant="success">Hủy</Button>

		{/* <button type="button" class="btn btn-success"  onClick={()=>{window.location.href = "/managerItem"}}>Hủy</button> */}
		</div>
		</Form>
		</div>
		</div>
		{/* <Footer/> */}
		</div>
	);
	}
}

export default EditItem;