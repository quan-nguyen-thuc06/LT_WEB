<?php
	// cac noi dung phan cach nhau bang dau +
	// [
	// 	{
	// 	"Id": "1",
	// 	"Image": "https://image.freepik.com/free-vector/gradient-real-estate-facebook-cover_23-2149051101.jpg+https://image.freepik.com/free-vector/gradient-real-estate-facebook-cover_23-2149051101.jpg+https://image.freepik.com/free-vector/gradient-real-estate-facebook-cover_23-2149051101.jpg",
	// 	"Intro": "khong the tin duoc",
	// 	"Develop": "2013-2014:thanh lap cong ty+2015-2020:dang phat trien",
	// 	"Mission": "khong the tin duoc",
	// 	"Aim": "khong the tin duoc"
	// 	}
	// ]

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/Introduction.php');

	$db = new db();

	$connect = $db->connect();

	$intro = new Introduction($connect);
	$read = $intro -> read();
	$num = $read->rowCount();
	if($num>0){
		$intro_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$intro_item= array(
				"Id" => $Id,
				"Image"=>$Image,
				"Intro"=>$Intro,
				"Develop"=>$Develop,
				"Mission"=>$Mission,
				"Aim"=>$Aim
			);

			array_push($intro_array,$intro_item);
		}
		echo json_encode($intro_array);
	}



?>