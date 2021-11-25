import Header from '../Components/Header';
import Footer from '../Components/Footer';
function Hiring (){
    return (
      <div className="container">
            <Header/>
            <section class="vh-100" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div class="card-body p-5">
                        <form>
                            <h3 class="mb-2 text-center fw-bolder">Đăng nhập</h3>
                            <h6 class="mb-5 text-center">Mua hàng tiện lợi, nhanh chóng, thuận tiện.</h6>

                            <div class="form-outline mb-4">
                            <label for="text" class="form-label">Username:</label>
                            <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Nhập tên đăng nhập" minLength="6" required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label for="password" class="form-label">Mật khẩu:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nhập mật khẩu"  minLength="6" required/>
                            </div>
                            <div class="mb-3">
                            <a href="#" >Tạo tài khoản mới </a>
                            </div>
                            
                            <div class="container-fluid row">
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit">Admin</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit">Login</button>
                                </div>
                            </div>
                        </form>   
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

            <Footer/>
      </div>
    );
  }
  
  export default Hiring;