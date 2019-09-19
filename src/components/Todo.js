import React from 'react';

function Todo(props) {
    return (
        <div 
            style={{ textDecoration: props.todo.complete ? "line-through" : ""}}
            onClick={ props.toggleComplete }>
                {props.todo.text}
                {JSON.stringify(props)}
        </div>
    );
}

export default Todo;
