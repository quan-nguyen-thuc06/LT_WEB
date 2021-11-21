export default function Header() {

    return (<div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">
                <a class="navbar-brand " href="/" style={{ fontFamily: "Roboto", fontSize: "36px" }}>Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Giới thiệu chung</a>
                        </li>
						<li class="nav-item">
<<<<<<< HEAD
                            <a class="nav-link active" href="/sanpham">Sản phẩm</a>
                        </li>
						<li class="nav-item">
                            <a class="nav-link active" href="/tuyendung">Tuyển dụng</a>
=======
                            <a class="nav-link active" href="/">Sản phẩm</a>
                        </li>
						<li class="nav-item">
                            <a class="nav-link active" href="/">Tuyển dụng</a>
>>>>>>> Official
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#footer">Liên Hệ</a>
                        </li>
						<li class="nav-item">
<<<<<<< HEAD
                            <a class="nav-link active" href="/dangnhap">Tin tức công nghệ</a>
=======
                            <a class="nav-link active" href="/">Tin tức công nghệ</a>
>>>>>>> Official
                        </li>
                    </ul>
                    <a class="nav-link text-danger" href="Cart">
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
                    <button class="btn btn-outline-primary me-3" type="submit" onClick={() => window.location.href = "/Login"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        Đăng nhập
                    </button>
                </div>
            </div >
            {/* <ToastContainer /> */}
        </nav >
    </div>)
}