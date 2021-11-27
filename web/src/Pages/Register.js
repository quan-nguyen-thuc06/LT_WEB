
function Hiring (){
    return (
      <div className="container">
            <section class="vh-200" >
                <div class="container py-5 h-200">
                    <div class="row d-flex justify-content-center align-items-center h-200">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div class="card-body p-5">
                        <form>
                            <h3 class="mb-2 text-center fw-bolder">Đăng ký</h3>
                            <h6 class="mb-5 text-center">Mua hàng tiện lợi, nhanh chóng, thuận tiện.</h6>

                            <div class="form-outline mb-2">
                            <label for="text" class="form-label">Username:</label>
                            <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Nhập tên đăng nhập" minLength="6" required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="password" class="form-label">Mật khẩu:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nhập mật khẩu"  minLength="6" required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="password" class="form-label">Nhập lai mật khẩu:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nhập lại mật khẩu"  minLength="6" required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="text" class="form-label">Họ và tên:</label>
                            <input type="text" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Họ và tên"  required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="tel" class="form-label">Số điện thoại:</label>
                            <input type="tel" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Số điện thoại" pattern="[0][0-9]{9}" required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Email" required/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="date" class="form-label">Ngày sinh:</label>
                            <input type="date" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Ngày sinh"  required/>
                            </div>

                            
                            <div class="container-fluid row">
                                <div class="col-6 mt-3">
                                    <a href="/login" style={{color: "black"}}>Đăng nhập tại đây</a>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit">Đăng ký</button>
                                </div>
                            </div>
                        </form>   
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
      </div>
    );
  }
  
  export default Hiring;