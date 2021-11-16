import React, { Component } from 'react'
import './register.css'
import {Form, Button } from 'react-bootstrap'



class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:"",
            firstName: "",
            password: "",
            gender: "",
            phone: "",
            address: "",
            email: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    userhandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            password: '',
            gender: "",
            phone:"",
            email:"",
            address:"",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div class = "container">

                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <label>User Name :</label> <input type="text" value={this.state.userName} onChange={this.userhandler} placeholder="UserName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>Phone :</label> <input type = "phone" value={this.state.phone} onChange={this.phonehandler} placeholder="nhập số điệnt thoại..."/><br />
                    <label>Address :</label> <input type = "text" value={this.state.address} onChange={this.addresshandler} placeholder="nhập địa chỉ..."/><br />
                    <label>Email :</label> <input type = "email" value={this.state.email} onChange={this.emailhandler} placeholder="nhập địa chỉ email..."/><br />

                        <div className="mb-1"><span className="font-css top"></span>
                            <div className="">
                                <label> Avatar: </label>
                                <input type="file" id="file-input" name="ImageStyle"/>
                            </div>
                        </div>
                   {/* <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /> */}
                    <Button type="submit" variant="primary">Đăng ký</Button>
                    <Button type="submit" variant="primary">Hủy</Button>
                </form>

            </div>
            
        )
    }
}

export default Register