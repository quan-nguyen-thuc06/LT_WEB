<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/information.php');

	$db = new db();

	$connect = $db->connect();

	$information = new Information($connect);
	$read = $information -> read();

	$num = $read->rowCount();
	if($num>0){
		$information_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$information_item= array(
				"Phone" => $Phone,
				"Email"=>$Email,
				"Address"=>$Address,
				"Service"=>$Service,
                "Support"=>$Support
			);

			array_push($information_array,$information_item);
		}
		echo json_encode($information_array);
	}



?>