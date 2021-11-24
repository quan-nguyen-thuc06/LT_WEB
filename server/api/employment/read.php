<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/employment.php');

	$db = new db();

	$connect = $db->connect();

	$employment = new Employment($connect);
	$read = $employment -> read();

	$num = $read->rowCount();
	if($num>0){
		$employment_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$employment_item= array(
				"id" => $id,
				"area"=>$area,
				"deadline"=>$deadline,
				"address"=>$address
			);

			array_push($employment_array,$employment_item);
		}
		echo json_encode($employment_array);
	}



?>