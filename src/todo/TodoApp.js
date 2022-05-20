import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams} from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRouteComponent";
import LoginComponent from "./LoginComponent";
import TodoListComponent from "./TodoListComponet";
import ErrorComponet from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";

export default class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const WelcomeComponetWithParams = withParams(WelcomeComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation/>}></Route>
                            <Route path="/login" element={<LoginComponentWithNavigation/>}></Route>
                            <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}></Route>
                            <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponetWithParams/></AuthenticatedRoute>}></Route>
                            <Route path="/todos" element={<AuthenticatedRoute><TodoListComponent/></AuthenticatedRoute>}></Route>
                            <Route path="*" element={<ErrorComponet/>}></Route>
                        </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

function withNavigation(Component){
    return (props)=><Component {...props} navigate={useNavigate()}/>
}

function withParams(Component){
    return (props)=><Component {...props} params={useParams()} />
}
