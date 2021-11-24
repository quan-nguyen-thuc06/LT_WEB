<?php
class Product{
		private $conn;

		public $id;
		public $product_name;
		public $price;
		public $images;
		public $type;
		public $brand;
		public $capacity;
		public $color;
        public $promotion;
		public $same_product;
		public $screen;
		public $Rom;
		public $Ram;
		public $battery;

		//connect
		public function __construct($db){
			$this->conn = $db;	
		}

		//read data
		public function select($fragment){
			$query = "SELECT * FROM product WHERE product_name LIKE  '%{$fragment}%'";
			$stmt = $this->conn->prepare($query);
            
			//$this->product_name = htmlspecialchars(strip_tags($this->product_name));
			//$stmt->bindParam(':fragment',$this->product_name);
            // echo $query;
			$stmt->execute();
			//$result = $stmt->fetch(PDO::FETCH_ASSOC);
			//if($result&&$result['product_name']!=''){
			return $stmt;
			//}
			//return false;
		}

        public function create(){
			$query = "INSERT INTO product SET id=:id , product_name=:product_name, price=:price, images=:images, type=:type, brand=:brand, capacity=:capacity , color=:color, promotion=:promotion, same_product=:same_product, screen=:screen, Rom=:Rom, Ram=:Ram , battery=:battery";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->product_name = htmlspecialchars(strip_tags($this->product_name));
			$this->price = htmlspecialchars(strip_tags($this->price));
			$this->images = htmlspecialchars(strip_tags($this->images));
			$this->type = htmlspecialchars(strip_tags($this->type));
			$this->brand = htmlspecialchars(strip_tags($this->brand));
			$this->capacity = htmlspecialchars(strip_tags($this->capacity));
			$this->color = htmlspecialchars(strip_tags($this->color));
            $this->promotion = htmlspecialchars(strip_tags($this->promotion));
			$this->same_product = htmlspecialchars(strip_tags($this->same_product));
			$this->screen = htmlspecialchars(strip_tags($this->screen));
			$this->Rom = htmlspecialchars(strip_tags($this->Rom));
			$this->Ram = htmlspecialchars(strip_tags($this->Ram));
            $this->battery = htmlspecialchars(strip_tags($this->battery));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':product_name',$this->product_name);
			$stmt->bindParam(':price',$this->price);
			$stmt->bindParam(':images',$this->images);
			$stmt->bindParam(':type',$this->type);
			$stmt->bindParam(':brand',$this->brand);
			$stmt->bindParam(':capacity',$this->capacity);
			$stmt->bindParam(':color',$this->color);
            $stmt->bindParam(':promotion',$this->promotion);
			$stmt->bindParam(':same_product',$this->same_product);
			$stmt->bindParam(':screen',$this->screen);
			$stmt->bindParam(':Rom',$this->Rom);
			$stmt->bindParam(':Ram',$this->Ram);
			$stmt->bindParam(':battery',$this->battery);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}
        
        public function update(){
			$query = "UPDATE product SET product_name=:product_name, price=:price, images=:images, type=:type, brand=:brand, capacity=:capacity , color=:color, promotion=:promotion, same_product=:same_product, screen=:screen, Rom=:Rom, Ram=:Ram , battery=:battery WHERE id=:id";
			$stmt = $this->conn->prepare($query);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));
			$this->product_name = htmlspecialchars(strip_tags($this->product_name));
			$this->price = htmlspecialchars(strip_tags($this->price));
			$this->images = htmlspecialchars(strip_tags($this->images));
			$this->type = htmlspecialchars(strip_tags($this->type));
			$this->brand = htmlspecialchars(strip_tags($this->brand));
			$this->capacity = htmlspecialchars(strip_tags($this->capacity));
			$this->color = htmlspecialchars(strip_tags($this->color));
            $this->promotion = htmlspecialchars(strip_tags($this->promotion));
			$this->same_product = htmlspecialchars(strip_tags($this->same_product));
			$this->screen = htmlspecialchars(strip_tags($this->screen));
			$this->Rom = htmlspecialchars(strip_tags($this->Rom));
			$this->Ram = htmlspecialchars(strip_tags($this->Ram));
            $this->battery = htmlspecialchars(strip_tags($this->battery));

			$stmt->bindParam(':id',$this->id);
			$stmt->bindParam(':product_name',$this->product_name);
			$stmt->bindParam(':price',$this->price);
			$stmt->bindParam(':images',$this->images);
			$stmt->bindParam(':type',$this->type);
			$stmt->bindParam(':brand',$this->brand);
			$stmt->bindParam(':capacity',$this->capacity);
			$stmt->bindParam(':color',$this->color);
            $stmt->bindParam(':promotion',$this->promotion);
			$stmt->bindParam(':same_product',$this->same_product);
			$stmt->bindParam(':screen',$this->screen);
			$stmt->bindParam(':Rom',$this->Rom);
			$stmt->bindParam(':Ram',$this->Ram);
			$stmt->bindParam(':battery',$this->battery);

			if($stmt->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}   
        
        public function delete(){
            
            $query0 = "DELETE FROM belong_to_cart WHERE Product_id =:id";
            $query1 = "DELETE FROM comment WHERE id_product =:id";
            $query2 = "DELETE FROM product WHERE id =:id";
			//$query = "DELETE belong_to_cart, product, comment FROM belong_to_cart JOIN product ON belong_to_cart.Product_id = product.id JOIN comment ON comment.id_product = product.id WHERE product.id=:id";
			$stmt0 = $this->conn->prepare($query0);
            $stmt1 = $this->conn->prepare($query1);
            $stmt2 = $this->conn->prepare($query2);
			//clean data
			$this->id = htmlspecialchars(strip_tags($this->id));

			$stmt0->bindParam(':id',$this->id);
            $stmt1->bindParam(':id',$this->id);
            $stmt2->bindParam(':id',$this->id);

			if($stmt0->execute()&&$stmt1->execute()&&$stmt2->execute()){
				return true;
			}
			printf("error %s.\n",$stmt->error);
			return false;
		}      
	}
?>