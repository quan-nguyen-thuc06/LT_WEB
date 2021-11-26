import { Grid,Card, CardMedia } from '@material-ui/core';

const tintucs = [
    {
        "image": "https://i1-sohoa.vnecdn.net/2021/11/24/106587904-15928703582020-06-22-9383-3954-1637693990.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=piMozHJqgFOvaMYZ0Pn4ig",
        "title": "Apple kiện công ty làm phần mềm hack iPhone",
        "content": "Apple kiện NSO Group, công ty Israel chuyên bán phần mềm cho các cơ quan chính phủ, giúp họ cài chương trình gián điệp vào iPhone. Apple cho biết, phần mềm do thám Pegasus của NSO Group đã lây nhiễm vào các thiết bị của nạn nhân, chủ yếu là các nhà báo và luật sư về nhân quyền.",
        "link": "https://vnexpress.net/apple-kien-cong-ty-lam-phan-mem-hack-iphone-4393610.html"
    },
    {
        "image": "https://i1-sohoa.vnecdn.net/2021/11/23/DSC09788-6129-1637638993.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=u3n2UIzfwrpCmFuQxMt4wg",
        "title": "Bắt đầu vòng Sơ loại Tech Awards 2021",
        "content": "Chương trình bình chọn Sản phẩm Công nghệ Xuất sắc - Tech Awards 2021 bắt đầu 12h trưa nay và kéo dài đến 30/11. Độc giả sẽ tham gia bình chọn cho 19 hạng mục của Tech Awards, gồm 83 sản phẩm, dịch vụ, nền tảng và 47 thương hiệu gia dụng và nhà thông minh, chia thành ba nội dung: Sản phẩm số, Thương hiệu gia dụng và Thương hiệu - ứng dụng Việt.",
        "link": "https://vnexpress.net/bat-dau-vong-so-loai-tech-awards-2021-4393215.html"
    },
    {
        "image": "https://i1-sohoa.vnecdn.net/2021/11/22/DSC4367-1629625968-jpeg-6603-1637597931.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=bafp0mGTsaCmsj8XNWFNfg",
        "title": "Samsung chiếm thị phần smartwatch của Apple",
        "content": "Galaxy Watch4 giúp Samsung tăng trưởng mạnh ở mảng đồng hồ thông minh, trong khi Apple Watch sụt giảm 10% thị phần. Theo thống kê của hãng nghiên cứu thị trường Counterpoint Research, Apple tiếp tục giữ vị trí thứ nhất trong lĩnh vực smartwatch trong quý III/2021, nhưng thị phần đã giảm xuống còn 22% so với mức 33% cùng kỳ năm ngoái.",
        "link": "https://vnexpress.net/samsung-chiem-thi-phan-smartwatch-cua-apple-4393058.html"
    },
    {
        "image": "https://i1-sohoa.vnecdn.net/2021/11/20/imrs-6257-1637390823.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=K2z1ErUj_7bKp14dpdhAwg",
        "title": "Thiết bị smarthome trôi nổi - 'sân chơi' mới của hacker",
        "content": "Các thiết bị nhà thông minh như bóng đèn, ổ cắm điện... ngày càng rẻ và phổ biến, nhưng phần mềm điều khiển chúng rất dễ bị hacker tấn công. Một buổi chiều năm 2015, Chet Wisniewski bước vào cửa hàng Fry's Electronics ở Las Vegas, lựa chọn một số bóng đèn thông minh và các thiết bị kết nối cho smarthome.",
        "link": "https://vnexpress.net/thiet-bi-smarthome-troi-noi-san-choi-moi-cua-hacker-4391090.html"
    }
]

function CardTintucs({Opt}){
    return(
        <Grid container xs={12} direction="row" spacing={2} style={{paddingBottom:"50px"}}>
            <Grid xs={1}></Grid>
            <Grid container lg={10} direction="row" style={{padding:"1%", backgroundColor:"white",border: "1px solid #87cefa"}} >
                <Grid item lg={4} style={{paddingTop:"5px"}}><CardMedia component="img" image={Opt.image} /> </Grid>
                <Grid container lg={8} xs={12}>
                    <Grid item xs={12} style={{textAlign:"left", padding:"20px 0px 0px 20px"}}><a href={Opt.link} style={{color:"#606060"}}><h1>{Opt.title}</h1> </a></Grid>
                    <Grid item xs={12} style={{textAlign:"left", paddingLeft:"20px"}}><h4>{Opt.content}</h4></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function Tintuc(){
    return(
        <Grid container direction="row" spacing={2} justifyContent="left" style={{paddingTop:"50px",marginBottom:"5%"}}>
            <Grid container>
                <Grid lg={1}></Grid>
                <Grid lg={10} style={{paddingBottom:"50px"}}>
                    <Card>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://cdn.tgdd.vn/2021/11/banner/cbfold3-830-300-830x300.png" alt="first slide"></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn.tgdd.vn/2021/11/banner/830-300-830x300-9.png" alt="Second slide"></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn.tgdd.vn/2021/10/banner/renno6-seri-830-300-830x300-3.png" alt="Third slide"></img>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            {
            tintucs.map(e => {
                return (
                    <CardTintucs Opt={e} />
                )
                })
            }
        </Grid>
    );
}