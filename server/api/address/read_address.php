<?php
	//show all address of user
	// [
	// 	{
	// 	"id": "1",
	// 	"username": "admin",
	// 	"address": "268 Lý Thường Kiệt,Phường 14,Quận 10,Thành phố Hồ Chí Minh"
	// 	}
	// ]

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/tb_address.php');

	$db = new db();

	$connect = $db->connect();

	$tb_address = new Address($connect);
	$read = $tb_address -> read();

	$num = $read->rowCount();
	if($num>0){
		$address_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$address_item= array(
				"id" => $id,
				"username"=>$username,
				"address"=>$address
			);

			array_push($address_array,$address_item);
		}
		echo json_encode($address_array);
	}



?>