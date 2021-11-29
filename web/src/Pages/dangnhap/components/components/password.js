import React, {useState} from 'react'
import './style.css'

function Password({Input, error}) {

    const [details,setDetails] = useState({oldPass:"",newPass:"",Verify:""});

    const submitHandler = e =>{
        e.preventDefault();
        Input(details);
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                {(error !=="") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="newPass">Mật khẩu mới</label>
                    <input type="password" name="newPass" id="newPass" onChange={e => setDetails({...details, newPass: e.target.value})} value={details.newPass}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="Verify">Nhập lại mật khẩu mới</label>
                    <input type="password" name="Verify" id="Verify" onChange={e => setDetails({...details, Verify: e.target.value})} value={details.Verify}></input>
                </div>
                <input type="submit" value="Đổi mật khẩu"></input>

            </div>
        </form>
    )
}

export default Password
