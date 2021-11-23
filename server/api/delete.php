<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: DELETE');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../config/db.php');
	include_once('../models/cars.php');

	$db = new db();

	$connect = $db->connect();

	$car = new Car($connect);
	$data = json_decode(file_get_contents("php://input"));
	$car->id= $data->id; 
	echo $car->id;
	if($car->delete()){
		echo json_encode(array('message','car deleted'));
	}
	else{
		echo json_encode(array('message','car not deleted'));
	}
?>