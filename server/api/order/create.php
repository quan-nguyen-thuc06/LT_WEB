<?php

	// {
	// 	"id": 2,
	// 	"username": "admin",
	// 	"shipment": 50000,
	// 	"pay_method": "COD",
	// 	"belong_to_cart":[
	// 	{
	// 		"id": 1,
	// 		"Product_id": 1,
	// 		"Quantity": 50
	// 	},
	// 	{
	// 		"id": 2,
	// 		"Product_id": 1,
	// 		"Quantity": 50
	// 	},
	// 	{
	// 		"id": 3,
	// 		"Product_id": 1,
	// 		"Quantity": 50
	// 	}
	// 	]
	// }

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/belong_to_cart.php');
	include_once('../../models/order_product.php');

	$db = new db();

	$connect = $db->connect();
	$order_product = new Order_product($connect);
	$belong_to_cart = new Belong_to_cart($connect);
	$data = json_decode(file_get_contents("php://input"));
	//get id
	$order = new Order_product($connect);
	$order->username = $data->username;
	$num = $order->getmaxid();

	$order_product->id = $num+1;
	$order_product->username = $data->username;
	$order_product->shipment = $data->shipment;
	$order_product->pay_method = $data->pay_method;
	$arr_bl_to_cart = $data->belong_to_cart;
	
	//get id for belong_to_cart
	$bltc = new Belong_to_cart($connect);
	$bltc->Cart_id= $num+1;
	$num_bltc = $bltc->getmaxid() + 1;
	
	if($order_product->create()){
		
		for($i=0;$i<count($arr_bl_to_cart);$i++){

			$belong_to_cart->id=$num_bltc;
			$belong_to_cart->Product_id=$arr_bl_to_cart[$i]->Product_id;
			$belong_to_cart->Cart_id= $num+1;
			$belong_to_cart->Quantity=$arr_bl_to_cart[$i]->Quantity;
			$belong_to_cart->Rom=$arr_bl_to_cart[$i]->Rom;
			$belong_to_cart->Color=$arr_bl_to_cart[$i]->Color;
			
			if(!$belong_to_cart->create()){
				echo json_encode('fail');
			}
			$num_bltc +=1;
		}
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>