<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../config/db.php');
	include_once('../models/cars.php');

	$db = new db();

	$connect = $db->connect();

	$car = new Car($connect);
	$data = json_decode(file_get_contents("php://input"));
	$car->id= $data->id; 
	$car->name= $data->name;
	$car->year= $data->year;
	if($car->update()){
		echo json_encode(array('message','car updated'));
	}
	else{
		echo json_encode(array('message','car not updated'));
	}
?>