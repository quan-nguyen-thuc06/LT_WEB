
import { useLocation } from "react-router-dom";
import RenderEditItem from "../Components/RenderEditItem"
import {useEffect,useState} from "react"
import axios from "axios";
function EditItem(){
	const location = useLocation();
	console.log(location)
	const id =parseInt(location.state.id);
	const [product,setProduct] = useState({})
	const [check,setCheck] = useState(false) //chua co data
	useEffect(()=>{
		async function fetchData() {
		try {
			const res = await axios.get('http://localhost/Official/LT_WEB/server/api/product/show.php'
			,
			{ 
			params:{
				id: id
			}
			}
			)
			setProduct(res.data)
			setCheck(true);
			console.log(res.data)
		  } catch (error) {
			console.log(error.message)
		  }
		}
		fetchData()
	},[])
	let productData;
	let url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU";
	if(check){
		productData={
			id: product.id,
			textbranch: product.brand,
			textType: product.type,
			textName: product.product_name,
			textColor: "",
			txtBattery: product.battery,
			txtPromotion: product.promotion,
			txtPrice: product.price,
			txtDisplaySize: product.screen, 
			txtRom: product.Rom,
			txtMemory: product.Ram,
			txtInStock: product.capacity[0],
			image: product.images[0] ? product.images[0] : url,
			image1: product.images[1] ? product.images[1] : url,
			image2: product.images[2] ? product.images[2] : url,
			image3: product.images[3] ? product.images[3] : url,
			image4: product.images[4] ? product.images[4] : url,
		  }
		let promotion=product.promotion[0];
		for(let i=1;i<product.promotion.length;i++){
			promotion = promotion+ "\n"+ product.promotion[i]
		}
		productData.txtPromotion = promotion;

		let color=product.color[0];
		for(let i=1;i<product.color.length;i++){
			color = color+ ", "+ product.color[i]
		}
		productData.textColor = color;
		console.log(productData)
	}

	if(productData){
		return(
			<RenderEditItem productData={productData}/>
		)
	}
	else{
			return <></>
		}
		
}
export default EditItem;