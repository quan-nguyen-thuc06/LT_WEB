import React, { Component } from 'react'
import './register.css'



class Login extends Component {
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
                    <h1>Sign In</h1>
                    <label>User Name :</label> <input type="text" value={this.state.userName} onChange={this.userhandler} placeholder="UserName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <input type="submit" value="Đăng nhập" />
                    <input type="submit" value="Đăng ký" />

                </form>

            </div>
            
        )
    }
}

export default Login