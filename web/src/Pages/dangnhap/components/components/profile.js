import React, {useState} from 'react'
import './style.css'

function Profile({Input, error}) {
    
    const [details,setDetails] = useState({email:"",phone:"",name:"",dob:""});

    const submitHandler = e =>{
        e.preventDefault();
        Input(details);
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                {(error !=="") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input tyle="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input tyle="text" name="phone" id="phone" onChange={e => setDetails({...details, phone: e.target.value})} value={details.phone}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input tyle="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Ngày sinh</label>
                    <input tyle="text" name="dob" id="dob" onChange={e => setDetails({...details, dob: e.target.value})} value={details.dob}></input>
                </div>
                <input type="submit" value="Lưu thông tin"></input>

            </div>
        </form>
    )
}

export default Profile
