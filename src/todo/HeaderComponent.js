import { Component} from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component{
    render(){
        const Loggedin = AuthenticationService.isUserLoggedin();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/boris-ajit/" className="navbar-brand">Boris Ajit</a></div>
                    <ul className="navbar-nav">
                        {Loggedin && <li><Link className="nav-link" to="/welcome/admin">Home</Link></li>}
                        {Loggedin && <li><Link  className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!Loggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {Loggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;