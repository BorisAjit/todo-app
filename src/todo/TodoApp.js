import { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useParams} from "react-router-dom";

export default class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponetWithParams = withParams(Welcome);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation/>}></Route>
                            <Route path="/login" element={<LoginComponentWithNavigation/>}></Route>
                            <Route path="/logout" element={<LogoutComponent/>}></Route>
                            <Route path="/welcome/:name" element={<WelcomeComponetWithParams/>}></Route>
                            <Route path="/todos" element={<TodoListComponent/>}></Route>
                            <Route path="*" element={<ErrorComponet/>}></Route>
                        </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class LoginComponent extends Component{
    state ={
        username : "admin",
        password : "",
        isLoginFailed : false,
        showSuccessMessage : false
    }

    handleChange = (event)=>{
        this.setState({[event.target.name]: event.target.value});
        // console.log(event.target.value)
    }

    handleLogin = () =>{
        if(this.state.username === "admin" && this.state.password==="dummy"){
            this.props.navigate(`/welcome/${this.state.username}`)
        } else {
            this.setState({isLoginFailed:true});
            this.setState({showSuccessMessage:false})
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
class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.params.name}</h1>
                <div className="container">
                    You can manage your todos <Link to='/todos'>here</Link>
                </div>
            </div>
        )
    }
}
class TodoListComponent extends Component{
    state = {
        todos : [
            {id : 1 ,description:  'Learn React js', done: false, targetDate: new Date()},
            {id : 2 ,description:  'Learn Spring boot', done: false, targetDate: new Date()},
            {id : 3 ,description:  'Use React as frontend and Spring boot as backend', done: false, targetDate: new Date()},
            {id : 4 ,description:  'use database to get data',  done: false, targetDate: new Date()}
        ]
    }
    render(){
        return (
            <div>
                <h1>Todos List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Completion Status</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo)=>{
                                return (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function ErrorComponet(){
    return <p>An error occured. I do not know what to do, please contact abcd-efgh.</p>
}

function HeaderComponent(){
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://www.linkedin.com/in/boris-ajit/" className="navbar-brand">Boris Ajit</a></div>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/welcome/admin">Home</Link></li>
                    <li><Link  className="nav-link" to="/todos">Todos</Link></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><Link className="nav-link" to="/login">Login</Link></li>
                    <li><Link className="nav-link" to="/logout">logout</Link></li>
                </ul>
            </nav>
            {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://www.linkedin.com/in/boris-ajit/" className="navbar-brand">Boris Ajit</a></div>
                <ul className="navbar-nav">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Todos</li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link">Login</li>
                    <li className="nav-link">logout</li>
                </ul>
            </nav> */}
        </header>
    )
}
function LogoutComponent(){
    return (
        <div>
            <h1>Logged out</h1>
            <div className="container">
                Thank you for using our website
            </div>
        </div>
    )
} 
function FooterComponent(){
    return (
        <footer className="footer">
            <span className="text-muted">All rights Reserved 2022 @BorisAjit</span>
        </footer>
    )
} 

function withNavigation(Component){
    return (props)=><Component {...props} navigate={useNavigate()}/>
}

function withParams(Component){
    return (props)=><Component {...props} params={useParams()} />
}
