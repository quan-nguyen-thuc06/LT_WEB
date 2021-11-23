<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../config/db.php');
	include_once('../models/cars.php');

	$db = new db();

	$connect = $db->connect();

	$car = new Car($connect);
	$read = $car -> read();

	$num = $read->rowCount();
	if($num>0){
		$car_array=[];
		$car_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$car_item= array(
				"id" => $id,
				"name"=>$name,
				"year"=>$year
			);

			array_push($car_array,$car_item);
		}
		echo json_encode($car_array);
	}



?>