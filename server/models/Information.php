<?php
class Information{
		private $conn;

		public $Phone;
		public $Email;
		public $Address;
		public $Service;
		public $Support;


		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function read(){
			$query = "SELECT * FROM Information";
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}

        public function update(){
			$query = "UPDATE Information SET Email=:Email, Address=:Address, Service=:Service, Support=:Support WHERE Phone=:Phone";
			$stmt = $this->conn->prepare($query);
			
			//clean data
			$this->Phone = htmlspecialchars(strip_tags($this->Phone));
			$this->Email = htmlspecialchars(strip_tags($this->Email));
			$this->Address = htmlspecialchars(strip_tags($this->Address));
			$this->Service = htmlspecialchars(strip_tags($this->Service));
			$this->Support = htmlspecialchars(strip_tags($this->Support));


			$stmt->bindParam(':Phone',$this->Phone);
			$stmt->bindParam(':Email',$this->Email);
			$stmt->bindParam(':Address',$this->Address);
			$stmt->bindParam(':Service',$this->Service);
			$stmt->bindParam(':Support',$this->Support);


			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}   
	}
?>