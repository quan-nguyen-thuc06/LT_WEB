<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/News.php');

	$db = new db();

	$connect = $db->connect();

	$news = new News($connect);
	$read = $news -> read();
	$num = $read->rowCount();
	if($num>0){
		$news_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$news_item= array(
				"Id" => $Id,
				"Tilte"=>$Tilte,
				"Image"=>$Image,
				"Content"=>$Content,
				"Link"=>$Link
			);

			array_push($news_array,$news_item);
		}
		echo json_encode($news_array);
	}



?>