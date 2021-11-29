import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Header() {
    function Logout(){
        localStorage.removeItem('cart');
		localStorage.removeItem('address');
        localStorage.removeItem('role');
		localStorage.removeItem('user');
    }
    function LoginIcon(){
        if(localStorage.getItem("role")=="admin"){
            let user = JSON.parse(localStorage.getItem('user'))
            return(
            <div class="dropdown ms-3 float-end">
                        <a class="dropdown-toggle" data-bs-toggle="dropdown">
                            <img src={user.image} alt="Logo" style={{width:"40px"}} class="rounded-pill"/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shadow-lg">
                        <li><h5 class="dropdown-header">Đang đăng nhập với</h5></li>
                        <li><a class="dropdown-item" href="#">
                            {user.fullname}
                            </a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="/admin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                            Trang chủ
                            </a></li>
                        <li><a class="dropdown-item" href="/admin/product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            Quản lý sản phẩm</a>
                            </li>
                        <li><a class="dropdown-item" href="/admin/user">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                            Quản lý khách hàng
                            </a></li>
                        <li><a class="dropdown-item" href="/admin/website">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            Quản lý website
                            </a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item text-danger" href="/" onClick={Logout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                               Đăng xuất
                        </a>
                        </li>
                        </ul>
            </div>
            )
        }
        else if(localStorage.getItem("role")=="client"){
            let user = JSON.parse(localStorage.getItem('user'))
            return(
            <div class="dropdown ms-3 float-end">
                        <a class="dropdown-toggle" data-bs-toggle="dropdown">
                            <img src={user.image} alt="Logo" style={{width:"40px"}} class="rounded-pill"/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shadow-lg">
                        <li><h5 class="dropdown-header">Đang đăng nhập với</h5></li>
                        <li><a class="dropdown-item" href="#">
                            {user.fullname}
                            </a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="/dangnhap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                            Thông tin cá nhân
                            </a></li>
                       
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item text-danger" href="/" onClick={Logout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                               Đăng xuất
                        </a>
                        </li>
                        </ul>
            </div>
            )
        }
        else{
            return(
            <button class="btn btn-outline-primary me-3" type="button" onClick={() => window.location.href = "/Login"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        Đăng nhập
            </button>
            )
        }
    }
    return (<>
        <nav class=" navbar navbar-expand-lg navbar-light bg-light" id="header">
        <ToastContainer/>
            <div class="container-fluid">
                <a class="navbar-brand " href="/" style={{ fontFamily: "Roboto", fontSize: "36px" }}>Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/about">Giới thiệu chung</a>
                        </li>
						<li class="nav-item">
                            <a class="nav-link active" href="/">Sản phẩm</a>
                        </li>
						<li class="nav-item">
                            <a class="nav-link active" href="/tuyendung">Tuyển dụng</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#footer">Liên Hệ</a>
                        </li>
						<li class="nav-item">
                            <a class="nav-link active" href="/tintuc">Tin tức công nghệ</a>
                        </li>
                    </ul>
                    <a class="nav-link text-danger" href="#" onClick={()=>{
                        if (JSON.parse(localStorage.getItem('cart'))==null){
                            toast.warning('Giỏ hàng đang trống:)', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                        else{
                            window.location.href = "/Cart"
                        }
                    }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </a>
                    <div class='me-2'>
                        <input class="form-control" type="text" placeholder="Search" aria-label="text" 
						onKeyUp={(even) => {
                            if (even.key === "Enter") {
                                even.preventDefault();
                                document.getElementById('search').click()
                            }
                            // else setSearchTerm(even.target.value)
                        }} 
						/>
                    </div>
                    <div>
                        <button class="btn btn-outline-success me-2 " type="submit" id='search'>Search</button>
                    </div>
                    <LoginIcon/>
                    {/* <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/38658524_2085985321652461_6541998076784017408_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2xVt0QWDpQQAX86nrxx&_nc_ht=scontent-sin6-2.xx&oh=6ae78b1306d18be0174db59d69a2ec0b&oe=61C656C2" alt="Logo" style={{width:'40px'}} class="rounded-pill mx-3"/> */}
                </div>
            </div >
            {/* <ToastContainer /> */}
        </nav >
    </>)
}