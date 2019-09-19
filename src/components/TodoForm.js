import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="text"
                        placeholder="todo..."
                        value={this.state.text}
                        onChange={this.handleChange}
                        />
                    
                    <button onClick={this.handleSubmit}>add todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;