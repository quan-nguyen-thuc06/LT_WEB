import './ManageProduct.css'
import React ,{ useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import {Form, SplitButton} from 'react-bootstrap'
function ManageWebsite(){
    const [data,setData]=useState([])
    const [reload,setReload] = useState(false)
    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/employment/read.php')
        .then(response => {
            setData(response.data)
            //console.log(response.data)
        })
        .catch(error => console.log(error))
    }, [reload])
    
    const [dataFooter,setDataFooter]=useState([])
    useEffect(async () => {
        await axios.get('http://localhost/Official/LT_WEB/server/api/information/read.php')
        .then(response => {
            setDataFooter(response.data)
            //console.log(dataFooter)
        })
        .catch(error => console.log(error))
    }, [reload])
    console.log(dataFooter)

    // function charCount(myChar, str) {
    //     let counter = 0;
    //     for (let i = 0; i < str.length; i++) 
    //     if (str.charAt(i) == myChar) 
    //         counter++
    //     return counter;
    // }
    function nthIndex(str, pat, n){
        var L= str.length, i= -1;
        while(n-- && i++<L){
            i= str.indexOf(pat, i);
            if (i < 0) break;
        }
        return i;
    }

    let arrService = [];
    let arrSupport = [];
    var temp=''
    if(dataFooter.length >0){
        arrSupport = dataFooter[0].Support.split(" + ")

        // console.log(charCount('+',dataFooter[0].Support))
        // for (let i = 0; i < charCount('+',dataFooter[0].Support); i++){
        //     if(i==0){
        //         temp=dataFooter[0].Support.slice(0,nthIndex(dataFooter[0].Support, '+', 1)-1)
        //         arrService.push(temp)
        //     }
        //     else{
        //         temp=dataFooter[0].Support.slice(nthIndex(dataFooter[0].Support, '+', i)+2,nthIndex(dataFooter[0].Support, '+', i+1)-1)
        //         arrService.push(temp)
        //     }
        // }
        //     temp=dataFooter[0].Support.slice(nthIndex(dataFooter[0].Support, '+', charCount('+',dataFooter[0].Support))+2,dataFooter[0].Support.length)
        //     arrService.push(temp)


        // for (let i = 0; i < charCount('+',dataFooter[0].Service); i++){
        //     if(i==0){
        //         temp=dataFooter[0].Service.slice(0,nthIndex(dataFooter[0].Service, '+', 1)-1)
        //         arrSupport.push(temp)
        //     }
        //     else{
        //         temp=dataFooter[0].Service.slice(nthIndex(dataFooter[0].Service, '+', i)+2,nthIndex(dataFooter[0].Service, '+', i+1)-1)
        //         arrSupport.push(temp)
        //     }
        // }
        //     temp=dataFooter[0].Service.slice(nthIndex(dataFooter[0].Service, '+', charCount('+',dataFooter[0].Service))+2,dataFooter[0].Service.length)
        //     arrSupport.push(temp)
    }
    if(data.length>0){
        console.log(data)
    }  
    // $infor->Phone = $data->Phone;
	// $infor->Email = $data->Email;
	// $infor->Address = $data->Address;
	// $infor->Service = $data->Service;
	// $infor->Support = $data->Support;
    async function update_contact(){
        let Phone = document.getElementById('sdt').value;
        let Email = document.getElementById('email').value;
        let Address = document.getElementById('address_contact').value;
        let Service = dataFooter[0].Service;
        let Support = dataFooter[0].Support;
        console.log(Phone,Email,Address,Service,Support);
        if(Phone&&Email&&Address){
        await axios.put('http://localhost/Official/LT_WEB/server/api/information/update.php',
            {
                Phone: Phone,
                Email:Email,
                Address: Address,
                Service: Service,
                Support: Support
            }
        )
        .then(response => {
            setReload(!reload)
        })
        .catch(error => console.log(error))
        }
    }
    const [item, setItemt]= useState({
        id: 0,
        area: "",
        deadline: "",
        address: ""

    })
    function handleEdit(event){
        setItemt(data.filter(item => item.id == event.target.name)[0])
        document.getElementById("openmodal").click()
        
    }
    async function handleDele(index){
        await axios.post('http://localhost/Official/LT_WEB/server/api/employment/delete.php',
            {
                id: index.id
            }
        )
        .then(response => {
            setReload(!reload)
        })
        .catch(error => console.log(error))
    }
    async function handleAdd(){
        let area = document.getElementById('area').value;
        let deadline = document.getElementById('deadline').value;
        let address = document.getElementById('address').value;
        if(area&&deadline&&address){
        await axios.post('http://localhost/Official/LT_WEB/server/api/employment/create.php',
            {
                area:area,
                deadline: deadline,
                address: address
            }
        )
        .then(response => {
            setReload(!reload)
        })
        .catch(error => console.log(error))
        }
    }
    async function handleUpdate(){
        let id = document.getElementById('sttEdit').value;
        let area = document.getElementById('areaEdit').value;
        let deadline = document.getElementById('deadlineEdit').value;
        let address = document.getElementById('addressEdit').value;
        // console.log(id,area,deadline,address);
        if(area&&deadline&&address){
        await axios.put('http://localhost/Official/LT_WEB/server/api/employment/update.php',
            {
                id: id,
                area:area,
                deadline: deadline,
                address: address
            }
        )
        .then(response => {
            setReload(!reload)
        })
        .catch(error => console.log(error))
        }
    }
    function RenderHiring(){
        return <Fragment >{data.slice(0, data.length).map((index) => {
            return(
            <tr>
                <td>{index.id}</td>
                <td>{index.area}</td>
                <td>{index.deadline}</td>
                <td>{index.address}</td>
                <td>
                    <a class="add" title="Add" data-toggle="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>    
                    </a>
                    <div class="btn-group">
                    <button class="edit" type="button" class="btn btn-warning ms-2" title="Edit" data-toggle="tooltip" name={index.id} onClick={handleEdit} >
                        Sửa
                    </button>
                    <button class="delete" type="button" class="btn btn-danger ms-2" title="Delete" data-toggle="tooltip" onClick={()=>handleDele(index)}>
                        Xóa
                    </button>
                    </div>
                </td>  
            </tr>
            )
            
        })}
        {console.log(data)}
        </Fragment>
    }

    function RenderService(){
        return <Fragment >{arrService.slice(0, arrService.length).map((index) => {
            temp=0
            for (var i = 0; i < arrService.length; i++){
                if(arrService[i]==index){
                    temp=i
                }
            }
            return(
            <tr>
                {console.log(index)}
                <td>{temp+1}</td>
                <td>{index}</td>
                <td>
                    <a class="add" title="Add" data-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>    
                    </a>
                    <a class="edit" title="Edit" data-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                    </a>
                    <a class="delete" title="Delete" data-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </a>
                </td>
            </tr>
            )
            
        })}
        </Fragment>
    }

    function RenderSupport(){
        return <Fragment >{arrSupport.slice(0, arrSupport.length).map((index) => {
            temp=0
            for (var i = 0; i < arrSupport.length; i++) {
                if(arrSupport[i]==index){
                    temp=i
                }
            }
            return(
                <tr>
                <td>{temp+1}</td>
                <td>{index}</td>
                <td>
                    <a class="add" title="Add" data-toggle="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>    
                    </a>
                    <a class="edit" title="Edit" data-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                    </a>
                    <a class="delete" title="Delete" data-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </a>
                </td>
            </tr>
            )
            
        })}
        </Fragment>
    }

  return(
    <div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal0" id="openmodal" style={{display:"none"}}></button>
        <div class="table-responsive">
            <div class="table-wrapper table-striped">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8"><h2>Tuyển dụng</h2></div>
                        <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="fa fa-plus" ></i> Thêm mới</button>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Thêm vị trí tuyển dụng</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                        <form>
                                <div class="table-title row">
                                    <div class="col-12">
                                        <label for="exampleInput3">Vị trí tuyển dụng</label>
                                        <input type="text" class="form-control" id="area" required></input>
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleInput3">STT</label>
                                        <input type="number" class="form-control" id="stt" required></input>
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleInput3">Han nộp</label>
                                        <input type="date" class="form-control" id="deadline" required></input>
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleInput3">Địa điểm</label>
                                        <input type="text" class="form-control" id="address" required></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleAdd}>Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>  
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{width:'100px'}}>STT</th>
                            <th>Vị trí tuyển dụng</th>
                            <th style={{width:'150px'}}>Hạn nộp</th>
                            <th style={{width:'250px'}}>Địa điểm</th>
                            <th style={{width:'150px'}}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderHiring />
                        <div class="modal fade" id="exampleModal0" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Sửa vị trí tuyển dụng</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                        <form class="needs-validation" novalidate>
                            <div class="table-title row">
                                <div class="col-12">
                                <label for="areaEdit">Vị trí tuyển dụng</label>
                                    {/* <input type="text" class="form-control" id="exampleInput1" value={index.area} onChange={test} required></input> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        id="areaEdit"
                                        defaultValue={item.area}
                                        // onChange={test}
                                    />
                                </div>
                                <div class="col-6">
                                    <label for="sttEdit">STT</label>
                                    {/* <input type="number" class="form-control" id="exampleInput0" value={index.id} onChange={test} required></input> */}
                                    <Form.Control
                                        required
                                        type="number"
                                        id="sttEdit"
                                        value={item.id}
                                        // onChange={test}
                                    />
                                </div>
                                <div class="col-6">
                                    <label for="deadlineEdit">Han nộp</label>
                                    {/* <input type="date" class="form-control" id="exampleInput2" value={index.deadline} onChange={test} required></input> */}
                                    <Form.Control
                                        required
                                        type="date"
                                        id="deadlineEdit"
                                        defaultValue={item.deadline}
                                        // onChange={test}
                                    />
                                </div>
                                <div class="col-12">
                                    <label for="addressEdit">Địa điểm</label>
                                    {/* <input type="text" class="form-control" id="exampleInput3" value={index.address} onChange={test} required></input> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        id="addressEdit"
                                        defaultValue={item.address}
                                        // onChange={test}
                                    />
                                </div>
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                    </tbody>
                </table>
            </div>
        


        {dataFooter.length >0 ?
        <div class="table-wrapper">
        <form>
            <div class="table-title row">
                <div class="col-sm-8"><h2>Liên hệ</h2></div>
                <div class="col-sm-4">
                    <button type="button" class="btn btn-info add-new" onClick={update_contact}>Thay đổi</button>
                </div>
                <div class="col-12 col-sm-6">
                    <label for="sdt">Số điện thoại</label>
                    <Form.Control
                        required
                        type="text"
                        id="sdt"
                        defaultValue={dataFooter[0].Phone}
                        // onChange={test}
                    />
                </div>
                <div class="col-12 col-sm-6">
                    <label for="email">Email</label>
                    <Form.Control
                        required
                        type="email"
                        id="email"
                        defaultValue={dataFooter[0].Email}
                        // onChange={test}
                    />
                </div>
                <div class="col-12">
                    <label for="address_contact">Địa chỉ</label>
                    <Form.Control
                        required
                        type="text"
                        id="address_contact"
                        defaultValue={dataFooter[0].Address}
                        // onChange={test}
                    />
                </div>
            </div>
        </form>       
        </div>
        : null
        }
        <div class="table-wrapper">
        <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8"><h2>Hỗ trợ khách hàng</h2></div>
                        <div class="col-sm-4">
                            <button type="button" class="btn btn-info add-new" data-bs-toggle="modal" data-bs-target="#addSupport"><i class="fa fa-plus"></i> Thêm mới</button>
                        </div>
                    </div>

                    <div class="modal fade" id="addSupport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Thêm dịch vụ hỗ trợ khách hàng</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                        <form>
                                <div class="table-title row">
                                    <div class="col-12">
                                        <label for="exampleInput3">STT</label>
                                        <input type="text" class="form-control" id="exampleInput1" required></input>
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleInput3">Dịch vụ</label>
                                        <input type="text" class="form-control" id="exampleInput0" required></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>  




                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{width:'100px'}}>STT</th>
                            <th>Hỗ trợ</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderSupport/>
                        {/* <tr>
                            <td>1</td>
                            <td>Mua hàng từ xa</td>
                            <td>
                                <a class="add" title="Add" data-toggle="tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>    
                                </a>
                                <a class="edit" title="Edit" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a class="delete" title="Delete" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Quy định đổi trả</td>
                            <td>
                                <a class="add" title="Add" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>    
                                </a>
                                <a class="edit" title="Edit" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a class="delete" title="Delete" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>     */}
                    </tbody>
                </table>      
        </div>
        <div class="table-wrapper">
        <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8"><h2>Dịch vụ cung cấp</h2></div>
                        <div class="col-sm-4">
                            <button type="button" class="btn btn-info add-new" data-bs-toggle="modal" data-bs-target="#addService"><i class="fa fa-plus"></i> Thêm mới</button>
                        </div>
                    </div>

                    <div class="modal fade" id="addService" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Thêm dịch vụ cung cấp</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                        <form>
                            <div class="table-title row">
                                <div class="col-12">
                                    <label for="exampleInput3">STT</label>
                                    <input type="text" class="form-control" id="exampleInput1" required></input>
                                </div>
                                <div class="col-12">
                                    <label for="exampleInput3">Dịch vụ</label>
                                    <input type="text" class="form-control" id="exampleInput0" required></input>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{width:'100px'}}>STT</th>
                            <th>Dịch vụ</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderService/>
                        {/* <tr>
                            <td>1</td>
                            <td>Dịch vụ sửa chữa</td>
                            <td>
                                <a class="add" title="Add" data-toggle="tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>    
                                </a>
                                <a class="edit" title="Edit" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a class="delete" title="Delete" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nâng cấp phần cứng</td>
                            <td>
                                <a class="add" title="Add" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>    
                                </a>
                                <a class="edit" title="Edit" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a class="delete" title="Delete" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bảo hành sản phẩm</td>
                            <td>
                                <a class="add" title="Add" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>    
                                </a>
                                <a class="edit" title="Edit" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a class="delete" title="Delete" data-toggle="tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>       */}
                    </tbody>
                </table>      
        </div>
        </div>
    </div>     
  )
}
  export default ManageWebsite;