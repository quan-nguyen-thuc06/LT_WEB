import { React, useState, useEffect } from 'react'
import axios from 'axios';

function Login (){

    const [account, setAccount] = useState('')
    const [pw, setPw] = useState('')
    // const [check, setCheck] = useState(true)
    let check = false
    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost/Official/LT_WEB/server/api/login/confirm.php'
            ,
            { 
            
                username: account, password: pw, role: 'admin'
            
            }
            )
            if (res.data == "correct"){
                check = true
            }
            console.log(res.data)
            console.log(account)
            console.log(pw)
            console.log(check)

        } catch (error) {
            console.log(error.message)
        }
        if (check == true) {
            return  (window.location.href= "/admin")
        }

    }

    const handleSubmit1 = async () => {
        try {
            const res = await axios.post('http://localhost/Official/LT_WEB/server/api/login/confirm.php'
            ,
            { 
            
                username: account, password: pw, role: 'client'
            
            }
            )
            if (res.data == "correct"){
                check = true
            }
            console.log(res.data)
            console.log(account)
            console.log(pw)
            console.log(check)

        } catch (error) {
            console.log(error.message)
        }
        if (check == true) {
            return  (window.location.href= "/sanpham")
        }

    }

    return (
      <div className="container">
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
                            <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Nhập tên đăng nhập" minLength="6" required onChange={(event) => setAccount(event.target.value)} />
                            </div>

                            <div class="form-outline mb-4">
                            <label for="password" class="form-label">Mật khẩu:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nhập mật khẩu"  minLength="6" required onChange={(event) => setPw(event.target.value)} />
                            </div>
                            <div class="mb-3">
                            <a href="/register" >Tạo tài khoản mới </a>
                            </div>
                            
                            <div class="container-fluid row">
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit" onClick={handleSubmit}>Admin</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit" onClick={handleSubmit1}>Login</button>
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
  
  export default Login;