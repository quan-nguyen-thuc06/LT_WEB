<?php
class Address{
		private $conn;

		public $username;
		public $id;
		public $address;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function read(){
			$query = "SELECT * FROM tb_address WHERE username=?";
			$stmt = $this->conn->prepare($query);
			$stmt->bindParam(1,$this->username);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO tb_address SET username=:username , address=:address, id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->address = htmlspecialchars(strip_tags($this->address));
			$this->id = htmlspecialchars(strip_tags($this->id));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':address',$this->address);
			$stmt->bindParam(':id',$this->id);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		public function update(){
			$query = "UPDATE tb_address SET address=:address WHERE username=:username and id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->address = htmlspecialchars(strip_tags($this->address));
			$this->id = htmlspecialchars(strip_tags($this->id));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':address',$this->address);
			$stmt->bindParam(':id',$this->id);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		public function delete(){
			$query = "DELETE FROM tb_address  WHERE username=:username and id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->username = htmlspecialchars(strip_tags($this->username));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':username',$this->username);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	}
?>