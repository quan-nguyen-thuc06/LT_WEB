<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	
	include_once('../config/db.php');
	include_once('../models/cars.php');

	$db = new db();

	$connect = $db->connect();

	$car = new Car($connect);
	$show = $car -> show();
	$car ->id = isset($_GET['id'])? $_GET['id']: die();

	$car ->show();
	$car_item= array(
		"id" => $car->id,
		"name"=>$car->name,
		"year"=>$car->year
	);

	print_r(json_encode($car));




?>