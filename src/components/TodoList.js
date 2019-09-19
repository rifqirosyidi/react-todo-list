import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {

    state = {
        todos: []
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo
                }               
            })
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {this.state.todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={ () => this.toggleComplete(todo.id) } />
                ))}
            </div>
        );
    }
}

export default TodoList;