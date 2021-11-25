<?php
class News{
		private $conn;

		public $Id;
		public $Tilte;
		public $Image;
		public $Content;
		public $Link;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		// //read data
		public function read(){
			$query = "SELECT * FROM News";
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO News SET Id=:Id, Tilte=:Tilte,  Image=:Image, Content=:Content, Link=:Link";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->Id = htmlspecialchars(strip_tags($this->Id));
			$this->Tilte = htmlspecialchars(strip_tags($this->Tilte));
			$this->Image = htmlspecialchars(strip_tags($this->Image));
			$this->Content = htmlspecialchars(strip_tags($this->Content));
			$this->Link = htmlspecialchars(strip_tags($this->Link));

			$stmt->bindParam(':Id',$this->Id);
			$stmt->bindParam(':Tilte',$this->Tilte);
			$stmt->bindParam(':Image',$this->Image);
			$stmt->bindParam(':Content',$this->Content);
			$stmt->bindParam(':Link',$this->Link);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	}
?>