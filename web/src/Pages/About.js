import './About.css'
import { Grid,Card, CardMedia, Typography } from '@material-ui/core';


const about = [
	{
        "image": "https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_sharkhung.png",
        "content": "“Tôi đặc biệt quan tâm đến mô hình kinh doanh, không chỉ là giải pháp hay là nền tảng, công nghệ còn đang trong giai đoạn nghiên cứu phát triển. Với tôi, năm nay các yêu cầu sẽ chặt chẽ hơn với sự lựa chọn sẽ có mức độ tiêu chuẩn cao hơn.” Ông cũng dành lời khuyên cho các startup trẻ, hãy tìm những người giỏi để học hỏi vì một người thầy giỏi sẽ giúp học sinh bớt rủi ro và tiết kiệm được “học phí”. Và đặc biệt, ông khuyên các startup khi đến với Shark Tank hãy chuẩn bị mọi thứ thật kỹ lưỡng, luôn giữ một tâm thế bình tĩnh, sáng suốt để đưa ra đầy đủ các phương án thuyết phục các nhà đầu tư."
    },
	{
        "image": "https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_tqh03442.jpg",
        "content": "“Có nhiều bạn start-up đang hiểu lầm và cho rằng Shark Liên lên Shark Tank không cần lợi nhuận, nhưng tôi có thể nói một doanh nghiệp không có tiền thì không thể làm được điều gì cả, nên hiệu quả hoạt động cho tương lai vẫn phải là tiên quyết. Công tác từ thiện không thể pha lẫn trong vận hành kinh doanh, đã là kinh doanh thì cần tính từng đồng, từng xu, từng con số hiệu quả,” bà Liên quả quyết."
    },
	{
        "image": "https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_shark_phu.jpg",
        "content": "Theo Shark Bình, đại dịch vừa qua đã ảnh hưởng nhiều đến các doanh nghiệp nhỏ và yếu thế, nên chuyển đổi số là kênh tất yếu giúp khu vực doanh nghiệp này tồn tại và phát triển. Với tư cách là “Shark công nghệ”-ông Bình quyết định trở thành Shark chính để có cơ hội đầu tư nhiều hơn nữa cho các start-up, giúp cho hàng triệu doanh nghiệp nhỏ chuyển đổi số mà không bị bỏ lại phía sau."
    },
	{
        "image": "https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_sharklouis.png",
        "content": "“Thời gian qua, SAM đã làm việc với các cổ đông chiến lược mong muốn đầu tư vào các lĩnh vực công nghệ, y tế, giáo dục và nông nghiệp thông qua các công ty có sự đột phá trong kinh doanh và khả năng phát triển bền vững. Trở lại Shark Tank lần này, tôi sẽ tập trung vào các start-up đã hoặc sắp có lợi nhuận trong các lĩnh vực trên. Đặc biệt là những start-up có tiềm năng đạt các chuẩn mực về môi trường, xã hội, quản trị (ESG)-thước đo khả năng phát triển bền vững được quốc tế công nhận,” ông nói."
    }
]

function Abouts({Opt}){
    return(
        <Grid container xs={11} direction="row" spacing={2} style={{padding:"0px 0px 20px 25px",margin:"50px"}}>
        	<Grid container xs={12} direction="row" style={{padding:"1%", backgroundColor:"white",border: "1px solid #87cefa"}} >
				<Grid item lg={4} style={{paddingTop:"5px"}}><img src={Opt.image} alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
            	<Grid container lg={8}>
                	<Grid item xs={12} style={{textAlign:"left", padding:"20px"}}><h3>{Opt.content}</h3></Grid>
            	</Grid>
        	</Grid>
    	</Grid>
    )
}

export default function About(){
	return (
	<div>
	<div id="demo" class="carousel slide" data-bs-ride="carousel">

	{/* <!-- Indicators/dots --> */}
	<div class="carousel-indicators">
		<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
		<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
		<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
	</div>
	
	{/* <!-- The slideshow/carousel --> */}
	<div class="carousel-inner">
		<div class="carousel-item active">
		<img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" class="d-block" style={{width:"100%"}}/>
		<div class="carousel-caption">
			<h3>Quảng Bình</h3>
			<p>Hình ảnh ban lãnh đạo viếng thăm hang Sơn Đoòng</p>
		</div>
		</div>
		<div class="carousel-item">
		<img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block" style={{width:"100%"}}/>
		<div class="carousel-caption">
			<h3>Đà Nẵng</h3>
			<p>Ban lãnh đạo tại đêm nhạc Midnight Autumn Festival</p>
		</div> 
		</div>
		<div class="carousel-item">
		<img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block" style={{width:"100%"}}/>
		<div class="carousel-caption">
			<h3>TP Hồ Chí Minh</h3>
			<p>Đêm mừng khai trương mở chi nhánh mới</p>
		</div>  
		</div>
	</div>
	
	{/* <!-- Left and right controls/icons --> */}
	<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
		<span class="carousel-control-prev-icon"></span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
		<span class="carousel-control-next-icon"></span>
	</button>
	</div>
	{/* Time line */}
	<div class="container">                      
    <div class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
            <h2 class="font-weight-bold" style={{padding:"5%"}}>Giai đoạn phát triển của công ty</h2>
            <p class="text-muted">Chúng tôi tự hào về những thành quả đã đạt được như ngày hôm nay. Đó là sự nỗ lực không ngừng và cố gắng hết sức của toàn thể các nhân viên trong công ty. Đặc biệt hơn là sự nỗ lực tìm tòi của giám đốc Quân Nguyễn và chủ tịch Tiến Lê đã giúp cho công ty tiếp tục phát triển và không ngừng vươn xa sau bao khó khăn thăng trầm.</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
					
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2003</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Công ty được thành lập</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2004</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Phát triển ở lĩnh vực mới</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2005</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Cho ra sản phẩm vượt trội</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2010</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Mở thêm 5 chi nhánh mới</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2021</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Giai đoạn hiện nay</p>
                    </div>
                </div>
				</div>
			</div>
		</div>
	</div>
	
	<Grid xs={12}><Typography style={{padding:"20px 0px 20px 0px", margin:"50px", textAlign:"center", fontSize:"40px", backgroundColor:"#cecece"}}>Gặp gỡ ban lãnh đạo</Typography></Grid>

	<Grid container xs={11} direction="row" spacing={2} style={{padding:"0px 0px 20px 25px",margin:"50px"}}>
        <Grid container xs={12} direction="row" style={{padding:"1%", backgroundColor:"white",border: "1px solid #87cefa"}} spacing={2} >
			<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_sharkhung.png" alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
        	<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_tqh03442.jpg" alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
			<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_shark_phu.jpg" alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
			<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://cdnimg.vietnamplus.vn/t620/uploaded/ngtntz/2021_04_27/vnp_sharklouis.png" alt="shark" class="d-block" style={{width:"100%", height:"267px"}} /> </Grid>				
    	</Grid>
    </Grid>
	{about.map(e => {
            return (
                <Abouts Opt={e} />
            )
        })}

	<Grid xs={12}><Typography style={{padding:"20px 0px 20px 0px", margin:"50px", textAlign:"center", fontSize:"40px", backgroundColor:"#cecece"}}>Nguồn đầu tư</Typography></Grid>
	
	<Grid container xs={11} direction="row" spacing={2} style={{padding:"0px 0px 20px 25px",margin:"50px"}}>
        <Grid container xs={12} direction="row" style={{padding:"1%", backgroundColor:"white",border: "1px solid #87cefa"}} spacing={2} >
			<Grid item lg={2} style={{paddingTop:"5px"}}><img src="https://goldidea.vn/upload/logo-unilever.jpg" alt="shark" class="d-block" style={{width:"100%"}} /> </Grid>
        	<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://thoitranghaianh.com/wp-content/uploads/2018/06/logo-sony.png" alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
			<Grid item lg={3} style={{paddingTop:"5px"}}><img src="https://www.beeart.vn/uploads/file/images/blog/apple/bee_art_logo_apple_2%20copy.jpg" alt="shark" class="d-block" style={{width:"100%"}}/> </Grid>
			<Grid item lg={3} style={{paddingTop:"5px"}}><img src="http://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/amazon-logo-2.jpg" alt="shark" class="d-block" style={{width:"100%", height:"267px"}} /> </Grid>				
    	</Grid>
    </Grid>
	
	</div>
	)
}