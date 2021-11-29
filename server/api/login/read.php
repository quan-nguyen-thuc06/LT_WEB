<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/client.php');

	$db = new db();

	$connect = $db->connect();

	$client = new Client($connect);
	$read = $client -> read();
	$num = $read->rowCount();
	if($num>0){
		$client_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$client_item= array(
				"username" => $username,
				"password"=>$password,
				"fullname"=>$fullname,
				"phone"=>$phone,
				"email"=>$email,
				"b_day"=>$b_day,
				"image"=>$image,
				"role"=>$role
			);

			array_push($client_array,$client_item);
		}
		echo json_encode($client_array);
	}



?>