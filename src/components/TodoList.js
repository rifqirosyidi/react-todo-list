import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {

    state = {
        todos: [],
        todoToShow: 'all'
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

    updateTodoToShow = (x) => {
        this.setState({
            todoToShow: x
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        let todos = []

        if (this.state.todoToShow === 'all') {
            todos = this.state.todos
        } else if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if(this.state.todoToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete)
        }


        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                <div>todo left : {this.state.todos.filter(todo => !todo.complete).length}</div>
                <div style={{ marginBottom: "10px" }}>
                    <button onClick={() => this.updateTodoToShow("all")} >Show all</button>
                    <button onClick={() => this.updateTodoToShow("active")} >Active</button>
                    <button onClick={() => this.updateTodoToShow("complete")} >Completed</button>
                </div>
                {todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={ () => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDelete(todo.id)} />
                ))}
            </div>
        );
    }
}

export default TodoList;