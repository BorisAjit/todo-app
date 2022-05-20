import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{
    state ={
        username : "admin",
        password : "",
        isLoginFailed : false
    }

    handleChange = (event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleLogin = () =>{
        if(this.state.username === "admin" && this.state.password==="dummy"){
            this.props.navigate(`/welcome/${this.state.username}`);
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
        } else {
            this.setState({isLoginFailed:true});
        }
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">

                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid credintials</div>}
                    User name<input type="text" name="userName" value={this.state.username} onChange = {this.handleChange}></input>
                    Password<input type="password" name="password" onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent