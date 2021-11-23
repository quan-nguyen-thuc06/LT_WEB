<?php
class Car{
		private $conn;

		public $id;
		public $name;
		public $year;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function read(){
			$query = "SELECT * FROM cars";
			$stmt = $this->conn->prepare($query);

			$stmt->execute();
			return $stmt;
		}

		public function show(){
			$query = "SELECT * FROM cars WHERE id=? LIMIT 1";
			$stmt = $this->conn->prepare($query);
			$stmt->bindParam(1,$this->id);
			$stmt->execute();
			//fetch() : tra ve doi tuong theo dang array
			//PDO::FETCH_ASSOC: Trả về dữ liệu dạng mảng với key là tên của column (column của các table trong database)
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			$this->name = $row['name'];
			$this->year = $row['year'];
		}

		public function create(){
			$query = "INSERT INTO cars SET id=:id, name=:name, year=:year";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->name = htmlspecialchars(strip_tags($this->name));
			$this->year = htmlspecialchars(strip_tags($this->year));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':name',$this->name);
			$stmt->bindParam(':year',$this->year);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}

		public function update(){
			$query = "UPDATE cars SET name=:name, year=:year WHERE id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			//strip_tags: loai bo cac the html
			//htmlspecialchars: loai bo tac dung cua the html
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->name = htmlspecialchars(strip_tags($this->name));
			$this->year = htmlspecialchars(strip_tags($this->year));

			//truyen bien vao
			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':name',$this->name);
			$stmt->bindParam(':year',$this->year);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}

		public function delete(){
			$query = "DELETE FROM cars  WHERE id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));

			$stmt->bindParam(':id',$this->id);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
	}
?>