<?php
class Employment{
		private $conn;

		public $id;
		public $area;
		public $deadline;
		public $address;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function read(){
			$query = "SELECT * FROM employment";
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO employment SET area=:area, deadline=:deadline, address=:address";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->area = htmlspecialchars(strip_tags($this->area));
			$this->deadline = htmlspecialchars(strip_tags($this->deadline));
			$this->address = htmlspecialchars(strip_tags($this->address));

			$stmt->bindParam(':area',$this->area);
			$stmt->bindParam(':deadline',$this->deadline);
			$stmt->bindParam(':address',$this->address);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		public function update(){
			$query = "UPDATE employment SET area=:area, deadline=:deadline, address=:address WHERE id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->area = htmlspecialchars(strip_tags($this->area));
			$this->deadline = htmlspecialchars(strip_tags($this->deadline));
			$this->address = htmlspecialchars(strip_tags($this->address));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':area',$this->area);
			$stmt->bindParam(':deadline',$this->deadline);
			$stmt->bindParam(':address',$this->address);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}

		public function delete(){
			$query = "DELETE FROM employment where id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));

			$stmt->bindParam(':id',$this->id);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
		}
		
	}
?>