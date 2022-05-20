import { Component } from "react"
import { Link } from "react-router-dom"
class WelcomeComponent extends Component{
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

export default WelcomeComponent