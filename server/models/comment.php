<?php
class Comment{
		private $conn;

		public $username;
		public $id;
		public $id_product;
		public $rating;
		public $content;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function read(){
			$query = "SELECT * FROM comment WHERE id_product=?";
			$stmt = $this->conn->prepare($query);
			$stmt->bindParam(1,$this->id_product);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO comment SET username=:username , id_product=:id_product, id=:id, rating=:rating, content=:content";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->id_product = htmlspecialchars(strip_tags($this->id_product));
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->rating = htmlspecialchars(strip_tags($this->rating));
			$this->content = htmlspecialchars(strip_tags($this->content));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':id_product',$this->id_product);
			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':rating',$this->rating);
			$stmt->bindParam(':content',$this->content);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		
		public function delete(){
			$query = "DELETE FROM comment  WHERE username=:username and id=:id and id_product=:id_product";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->id_product = htmlspecialchars(strip_tags($this->id_product));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':id_product',$this->id_product);
			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	}
?>