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
            if (res.data != "incorrect"){
                check = true
                localStorage.setItem('user',JSON.stringify(res.data))
                localStorage.setItem('role',"admin")
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
            if (res.data != "incorrect"){
                check = true
                localStorage.setItem('user',JSON.stringify(res.data))
                localStorage.setItem('role',"client")
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
                            <h3 class="mb-2 text-center fw-bolder">????ng nh???p</h3>
                            <h6 class="mb-5 text-center">Mua h??ng ti???n l???i, nhanh ch??ng, thu???n ti???n.</h6>

                            <div class="form-outline mb-4">
                            <label for="text" class="form-label">Username:</label>
                            <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Nh???p t??n ????ng nh???p" minLength="6" required onChange={(event) => setAccount(event.target.value)} />
                            </div>

                            <div class="form-outline mb-4">
                            <label for="password" class="form-label">M???t kh???u:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nh???p m???t kh???u"  minLength="6" required onChange={(event) => setPw(event.target.value)} />
                            </div>
                            <div class="mb-3">
                            <a href="/register" >T???o t??i kho???n m???i </a>
                            </div>
                            
                            <div class="container-fluid row">
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="button" onClick={handleSubmit}>Admin</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="button" onClick={handleSubmit1}>Login</button>
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