import { React, useState, useEffect } from 'react'
import axios from 'axios';

function Hiring (){
    const [username_, setUsername] = useState('')
    const [password_, setPassword] = useState('')
    const [confirmPassword_, setConfirmPassword] = useState('')
    const [fullname_, setFullname] = useState('')
    const [phone_, setPhone] = useState('')
    const [email_, setEmail] = useState('')
    const [b_day_, setB_day] = useState('')
    const [image_, setImage] = useState('')
    let check = false
    // let info={
    //     'username': '',
    //     'password': '',
    //     'confirmPassword': '',
    //     'fullname': '',
    //     'phone': '',
    //     'email': '',
    //     'b_day': '',
    //     'image': 'khongconull',
    //     'role': 'client'
    // };
    function checksubmit (){
        if(username_ != '' && password_ != '' && email_ != '' && phone_ != '' && fullname_ != '' && b_day_ != '' && image_ != '' && confirmPassword_ == password_){
            handleSubmit()
        }
        
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost/Official/LT_WEB/server/api/login/register.php'
            ,
            { 
                username: username_, 
                password: password_, 
                fullname: fullname_,
                phone: phone_,
                email: email_,
                b_day: b_day_,
                image: image_,
                role: 'client'
            }
            )
            if (res.data == "correct" && password_ == confirmPassword_) {
                check = true
            }
            console.log(username_)
            console.log(password_)
            console.log(confirmPassword_)
            console.log(fullname_)
            console.log(phone_)
            console.log(email_)
            console.log(b_day_)
            console.log(image_)
            //console.log(role)
            console.log(check)

        } catch (error) {
            console.log(error.message)
        }
        if (check == true) {
            return  (window.location.href= "/admin")
        }

    }

    return (
      <div className="container">
            <section class="vh-200" >
                <div class="container py-5 h-200">
                    <div class="row d-flex justify-content-center align-items-center h-200">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div class="card-body p-5">
                        <form>
                            <h3 class="mb-2 text-center fw-bolder">????ng k??</h3>
                            <h6 class="mb-5 text-center">Mua h??ng ti???n l???i, nhanh ch??ng, thu???n ti???n.</h6>

                            <div class="form-outline mb-2">
                            <label for="text" class="form-label">Username:</label>
                            <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Nh???p t??n ????ng nh???p" minLength="6" required onChange={(event) => setUsername(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="password" class="form-label">M???t kh???u:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nh???p m???t kh???u"  minLength="6" required onChange={(event) => setPassword(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="password" class="form-label">Nh???p lai m???t kh???u:</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Nh???p l???i m???t kh???u"  minLength="6" required onChange={(event) => setConfirmPassword(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="text" class="form-label">H??? v?? t??n:</label>
                            <input type="text" id="typePasswordX-2" class="form-control form-control-lg" placeholder="H??? v?? t??n"  required onChange={(event) => setFullname(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="tel" class="form-label">S??? ??i???n tho???i:</label>
                            <input type="tel" id="typePasswordX-2" class="form-control form-control-lg" placeholder="S??? ??i???n tho???i" pattern="[0][0-9]{9}" required onChange={(event) => setPhone(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Email" required onChange={(event) => setEmail(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="date" class="form-label">Ng??y sinh:</label>
                            <input type="date" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Ng??y sinh"  required onChange={(event) => setB_day(event.target.value)}/>
                            </div>

                            <div class="form-outline mb-2">
                            <label for="text" class="form-label">Link ???nh ?????i di???n</label>
                            <input type="text" id="typePasswordX-2" class="form-control form-control-lg" placeholder="???nh ?????i di???n"  required onChange={(event) => setImage(event.target.value)}/>
                            </div>

                            
                            <div class="container-fluid row">
                                <div class="col-6 mt-3">
                                    <a href="/login" style={{color: "black"}}>????ng nh???p t???i ????y</a>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg btn-block" type="submit"  onClick={checksubmit()}>????ng k??</button>
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