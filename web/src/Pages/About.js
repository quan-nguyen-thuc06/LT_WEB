import './About.css'
import { Grid,Card, CardMedia, Typography } from '@material-ui/core';


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
			<h3>Los Angeles</h3>
			<p>We had such a great time in LA!</p>
		</div>
		</div>
		<div class="carousel-item">
		<img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block" style={{width:"100%"}}/>
		<div class="carousel-caption">
			<h3>Chicago</h3>
			<p>Thank you, Chicago!</p>
		</div> 
		</div>
		<div class="carousel-item">
		<img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block" style={{width:"100%"}}/>
		<div class="carousel-caption">
			<h3>New York</h3>
			<p>We love the Big Apple!</p>
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
            <h2 class="font-weight-bold">A Company Evolution</h2>
            <p class="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
					
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2003</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2004</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2005</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2010</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2020</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">In Fortune 500</p>
                    </div>
                </div>
				</div>
			</div>
		</div>
	</div>
	
	<Grid container direction="row" xs={10} style={{padding:"50px"}}>

		<Grid item xs={6}> thanh</Grid>
		<Grid item xs={6}> thanh</Grid>

	</Grid>

	</div>
	)
}