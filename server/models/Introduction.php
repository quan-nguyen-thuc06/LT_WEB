<?php
class Introduction{
		private $conn;

		public $Id;
		public $Image;
		public $Intro;
		public $Develop;
		public $Mission;
		public $Aim;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		// //read data
		public function read(){
			$query = "SELECT * FROM Introduction";
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO Introduction SET Id=:Id, Image=:Image,  Develop=:Develop, Intro=:Intro, Mission=:Mission, Aim=:Aim";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->Id = htmlspecialchars(strip_tags($this->Id));
			$this->Image = htmlspecialchars(strip_tags($this->Image));
			$this->Develop = htmlspecialchars(strip_tags($this->Develop));
			$this->Intro = htmlspecialchars(strip_tags($this->Intro));
			$this->Mission = htmlspecialchars(strip_tags($this->Mission));
			$this->Aim = htmlspecialchars(strip_tags($this->Aim));

			$stmt->bindParam(':Id',$this->Id);
			$stmt->bindParam(':Image',$this->Image);
			$stmt->bindParam(':Develop',$this->Develop);
			$stmt->bindParam(':Intro',$this->Intro);
			$stmt->bindParam(':Mission',$this->Mission);
			$stmt->bindParam(':Aim',$this->Aim);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	}
?>