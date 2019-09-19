import React, { Component } from 'react';
import TodoForm from './TodoForm';

class TodoList extends Component {

    state = {
        todos: []
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {JSON.stringify(this.state.todos)}
            </div>
        );
    }
}

export default TodoList;