<?php
class Client{
		private $conn;

		public $username;
		public $password;
		public $fullname;
		public $phone;
		public $email;
		public $b_day;
		public $image;
		public $role;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function confirm(){
			$query = "SELECT * FROM client WHERE username=:username and password=:password and role=:role";
			$stmt = $this->conn->prepare($query);
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->password = htmlspecialchars(strip_tags($this->password));
			$this->role = htmlspecialchars(strip_tags($this->role));
			
			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':password',$this->password);
			$stmt->bindParam(':role',$this->role);

			$stmt->execute();
			$result = $stmt->fetch(PDO::FETCH_ASSOC);
			if($result&&$result['username']!=''){
				$this->username = $result['username'];
				$this->fullname = $result['fullname'];
				$this->phone = $result['phone'];
				$this->image = $result['image'];
				return true;
			}
			return false;
		}

		public function create(){
			$query = "INSERT INTO client SET username=:username , password=:password, fullname=:fullname, phone=:phone, email=:email, b_day=:b_day, image=:image , role=:role";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->password = htmlspecialchars(strip_tags($this->password));
			$this->fullname = htmlspecialchars(strip_tags($this->fullname));
			$this->phone = htmlspecialchars(strip_tags($this->phone));
			$this->email = htmlspecialchars(strip_tags($this->email));
			$this->b_day = htmlspecialchars(strip_tags($this->b_day));
			$this->image = htmlspecialchars(strip_tags($this->image));
			$this->role = htmlspecialchars(strip_tags($this->role));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':password',$this->password);
			$stmt->bindParam(':fullname',$this->fullname);
			$stmt->bindParam(':phone',$this->phone);
			$stmt->bindParam(':email',$this->email);
			$stmt->bindParam(':b_day',$this->b_day);
			$stmt->bindParam(':image',$this->image);
			$stmt->bindParam(':role',$this->role);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
		public function update(){
			$query = "UPDATE client SET password=:password, fullname=:fullname, phone=:phone, email=:email, b_day=:b_day, image=:image , role=:role WHERE username=:username";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->password = htmlspecialchars(strip_tags($this->password));
			$this->fullname = htmlspecialchars(strip_tags($this->fullname));
			$this->phone = htmlspecialchars(strip_tags($this->phone));
			$this->email = htmlspecialchars(strip_tags($this->email));
			$this->b_day = htmlspecialchars(strip_tags($this->b_day));
			$this->image = htmlspecialchars(strip_tags($this->image));
			$this->role = htmlspecialchars(strip_tags($this->role));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':password',$this->password);
			$stmt->bindParam(':fullname',$this->fullname);
			$stmt->bindParam(':phone',$this->phone);
			$stmt->bindParam(':email',$this->email);
			$stmt->bindParam(':b_day',$this->b_day);
			$stmt->bindParam(':image',$this->image);
			$stmt->bindParam(':role',$this->role);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}

		public function updateinfo(){
			$query = "UPDATE client SET  fullname=:fullname, phone=:phone, email=:email, b_day=:b_day, image=:image WHERE username=:username";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->fullname = htmlspecialchars(strip_tags($this->fullname));
			$this->phone = htmlspecialchars(strip_tags($this->phone));
			$this->email = htmlspecialchars(strip_tags($this->email));
			$this->b_day = htmlspecialchars(strip_tags($this->b_day));
			$this->image = htmlspecialchars(strip_tags($this->image));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':fullname',$this->fullname);
			$stmt->bindParam(':phone',$this->phone);
			$stmt->bindParam(':email',$this->email);
			$stmt->bindParam(':b_day',$this->b_day);
			$stmt->bindParam(':image',$this->image);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}


		public function updatepw(){
			$query = "UPDATE client SET password=:password WHERE username=:username";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));
			$this->password = htmlspecialchars(strip_tags($this->password));

			$stmt->bindParam(':username',$this->username);
			$stmt->bindParam(':password',$this->password);
			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}

		public function read(){
			$query = "SELECT * FROM client WHERE role = 'client' OR role = 'block'";
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}

		public function delete(){
			$query = "DELETE a,c FROM tb_address a JOIN client c ON c.username = a.username WHERE c.username=:username";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->username = htmlspecialchars(strip_tags($this->username));

			$stmt->bindParam(':username',$this->username);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
		}
		
	}
?>