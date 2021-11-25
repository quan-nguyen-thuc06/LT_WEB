<?php
	//show all cart of user details
	// http://localhost/Official/LT_WEB/server/api/order/read.php?username=admin
	// [
	// {
	// 	"id": 1,
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
	//	]

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/belong_to_cart.php');
	include_once('../../models/order_product.php');

	$db = new db();

	$connect = $db->connect();

	$order_product = new Order_product($connect);
	$belong_to_cart = new Belong_to_cart($connect);
	$order_product->username =isset($_GET['username'])? $_GET['username']: die();
	$read = $order_product -> read();
	$num = $read->rowCount();
	if($num>0){
		$order_product_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			// print_r($row);
			// extract($row);

			//read belong_to_cart
			$arr_bl_to_cart=[];
			$belong_to_cart->Cart_id=$row["id"];
			$read_bltc = $belong_to_cart -> read();
			$num_bltc = $read_bltc->rowCount();
			if($num_bltc>0){
				while($row_bltc=$read_bltc->fetch(PDO::FETCH_ASSOC)){
					extract($row_bltc);
					$item= array(
						"id" => $id,
						"Product_id"=>$Product_id,
						"Cart_id"=>$Cart_id,
						"Quantity"=>$Quantity
					);
		
					array_push($arr_bl_to_cart,$item);
				}
			}
			extract($row);
			$order_product_item= array(
				"id" => $id,
				"username"=>$username,
				"shipment"=>$shipment,
				"pay_method"=>$pay_method,
				"belong_to_cart"=>$arr_bl_to_cart
			);

			array_push($order_product_array,$order_product_item);
		}
		echo json_encode($order_product_array);
	}



?>