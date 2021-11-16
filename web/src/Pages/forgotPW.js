import React, { Component } from 'react'
import './register.css'



class Forgot extends Component {
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
                    <h1>Forgot Password</h1>
                    <label>Email :</label> <input type = "email" value={this.state.email} onChange={this.emailhandler} placeholder="nhập địa chỉ email..."/><br />
                    <input type="submit" value="Gửi" />

                </form>

            </div>
            
        )
    }
}

export default Forgot