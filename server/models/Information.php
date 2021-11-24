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

        public function update(){
			$query = "UPDATE product SET Email=:Email, Address=:Address, Service=:Service, Support=:Support WHERE Phone=:Phone";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->Phone = htmlspecialchars(strip_tags($this->Phone));
			$this->Email = htmlspecialchars(strip_tags($this->Email));
			$this->Address = htmlspecialchars(strip_tags($this->Address));
			$this->Service = htmlspecialchars(strip_tags($this->Service));
			$this->Support = htmlspecialchars(strip_tags($this->Support));


			$stmt->bindParam(':id',$this->Phone);
			$stmt->bindParam(':product_name',$this->Email);
			$stmt->bindParam(':price',$this->Address);
			$stmt->bindParam(':images',$this->Service);
			$stmt->bindParam(':tyle',$this->Support);


			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}   
	}
?>