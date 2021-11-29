import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './ManageProduct.css'
function ManageCustomer(){
    const [data,setData]=useState('')
    const [reload, setReload] = useState(true)
    function handleUserState(user){
        var state = 'client'
        if (user.role == state){
            state = 'block'
        }
        handleButton(user,state)
    }

    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/login/read.php')
        .then(response => {
            setData(response.data)
            //console.log(response.data)
        })
        .catch(error => console.log(error))
    }, [reload])

    const handleButton = async (user, state) => {
        try {
            const res = await axios.post('http://localhost/Official/LT_WEB/server/api/login/update.php'
            ,
            { 
                username: user.username,
                password: user.password,
                fullname: user.fullname,
                phone: user.phone,
                email: user.email,
                b_day: user.b_day,
                image: user.image,
                role: state
            }
            )
        } catch (error) {
            console.log(error.message)
        }
        setReload(!reload)

    }
    function RenderUser(){
        return <Fragment >{data.slice(0, data.length).map((index) => { 
            //{console.log(brand_param)}
            var stt = 0
            for (var i=0; i<data.length; i++){
                if (data[i]==index){
                    stt=i+1
                }
            }
            return(
                <tr>
                    <td>{stt}</td>
                    <td>{index.username}</td>
                    <td>

                        <div class="text-center">
                        {
                            index.role == 'client' ?
                            <button type="button" class="btn btn-success" onClick={() => handleUserState(index)}> Hoạt động </button>
                            
                            : 
                            <button type="button" class="btn btn-danger" onClick={() => handleUserState(index)}> Chặn </button>

                        }
                        </div>
                    </td>
                </tr>
            )
        })}
        {console.log(data)}
        </Fragment>
    }

  return(
    <div class="container">
    <div class="table-responsive">
        <div class=" table-wrapper">
        <div class="table-title">
                        <div><h2>Quản lý khách hàng</h2></div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{width:'100px'}}>STT</th>
                            <th>Username</th>
                            <th style={{width:'150px'}}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.length >0?
                        <RenderUser/>
                        :null
                        }
                        {/* <tr>
                            <td>1</td>
                            <td>quan.nguyenthucquan</td>
                            <td>

                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>nguyenthucquan</td>
                            <td>
                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Quanidol</td>
                            <td>
                                <div class="text-center">
                                {
                                    userstate ?
                                    <button type="button" class="btn btn-success" onClick={handleUserState}> Hoạt động </button>
                                    
                                    : 
                                    <button type="button" class="btn btn-danger" onClick={handleUserState}> Chặn </button>

                                }
                                </div>
                            </td>
                        </tr>       */}
                    </tbody>
                </table>   
            </div>   
        </div>
</div>     
  )
}
  export default ManageCustomer;