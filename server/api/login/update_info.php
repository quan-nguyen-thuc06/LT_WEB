<?php

	//block thanh vien bang cach role='block'

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/client.php');

	$db = new db();

	$connect = $db->connect();

	$client = new Client($connect);
	$data = json_decode(file_get_contents("php://input"));
	$client->username = $data->username;
	$client->fullname = $data->fullname;
	$client->phone = $data->phone;
	$client->email = $data->email;
	$client->b_day = $data->b_day;
	$client->image = $data->image;
	if($client->updateinfo()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}

	//fetch() : tra ve doi tuong theo dang array
			//PDO::FETCH_ASSOC: Trả về dữ liệu dạng mảng với key là tên của column (column của các table trong database)
?>