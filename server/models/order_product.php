<?php
class Order_product{
		private $conn;

		public $id;
		public $username;
		public $shipment;
		public $pay_method;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		// //read data
		public function read(){
			$query = "SELECT * FROM order_product WHERE username=?";
			$stmt = $this->conn->prepare($query);
			$stmt->bindParam(1,$this->username);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO order_product SET username=:username, id=:id, shipment=:shipment, pay_method=:pay_method";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->shipment = htmlspecialchars(strip_tags($this->shipment));
			$this->pay_method = htmlspecialchars(strip_tags($this->pay_method));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':shipment',$this->shipment);
			$stmt->bindParam(':pay_method',$this->pay_method);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		
		// public function delete(){
		// 	$query = "DELETE FROM order_product  WHERE username=:username and id=:id and id_product=:id_product";
		// 	$stmt = $this->conn->prepare($query);
		// 	//clean data
		// 	$this->id = htmlspecialchars(strip_tags($this->id));
		// 	$this->username = htmlspecialchars(strip_tags($this->username));
		// 	$this->id_product = htmlspecialchars(strip_tags($this->id_product));

		// 	$stmt->bindParam(':id',$this->id);
		// 	$stmt->bindParam(':username',$this->username);
		// 	$stmt->bindParam(':id_product',$this->id_product);
		// 	if($stmt->execute()){
		// 		return true;
		// 	}
		// 	printf("error %s.\n",$stmt->error);
		// 	return false;
		// }
	}
?>