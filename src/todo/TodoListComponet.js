import { Component } from "react";

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

export default TodoListComponent;