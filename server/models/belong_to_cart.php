<?php
	class Belong_to_cart{
		private $conn;
	
		public $id;
		public $Product_id;
		public $Cart_id;
		public $Quantity;
		public $Rom;
		public $Color;
	
		//connect
		public function __construct($db){
			$this->conn = $db;	
		}
		
		//read data
		public function read(){
			$query = "SELECT * FROM belong_to_cart WHERE Cart_id=:Cart_id";
			$stmt = $this->conn->prepare($query);
			$this->Cart_id = htmlspecialchars(strip_tags($this->Cart_id));
			$stmt->bindParam(':Cart_id',$this->Cart_id);
			$stmt->execute();
			return $stmt;
		}
		//read data
		public function getmaxid(){
			$query = "SELECT max(id) as 'id' FROM belong_to_cart WHERE Cart_id=:Cart_id";
			$stmt = $this->conn->prepare($query);
			$this->Cart_id = htmlspecialchars(strip_tags($this->Cart_id));
			$stmt->bindParam(':Cart_id',$this->Cart_id);
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			return $row['id'];
		}

		public function create(){
			$query = "INSERT INTO belong_to_cart SET  id=:id,Product_id=:Product_id, Cart_id=:Cart_id, Quantity=:Quantity, Rom=:Rom, Color=:Color";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->Product_id = htmlspecialchars(strip_tags($this->Product_id));
			$this->Cart_id = htmlspecialchars(strip_tags($this->Cart_id));
			$this->Quantity = htmlspecialchars(strip_tags($this->Quantity));
			$this->Rom = htmlspecialchars(strip_tags($this->Rom));
			$this->Color = htmlspecialchars(strip_tags($this->Color));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':Product_id',$this->Product_id);
			$stmt->bindParam(':Cart_id',$this->Cart_id);
			$stmt->bindParam(':Quantity',$this->Quantity);
			$stmt->bindParam(':Rom',$this->Rom);
			$stmt->bindParam(':Color',$this->Color);
	
			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	
		// public function delete(){
		// 	$query = "DELETE FROM belong_to_cart  WHERE username=:username and id=:id and id_product=:id_product";
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