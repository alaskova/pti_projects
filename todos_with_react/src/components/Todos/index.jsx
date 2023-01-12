import React from 'react';

const Todos = ({todos, onRemove, onImportant, onCompleted}) => {
    return (
        <div className="items" id="tasks">
            { todos.length > 0 ?
                todos.map(todo => {
                    return (
                    <div className={`item ${todo.important ? 'important' : ''} ${todo.completed ? 'completed' : ''}`} onDoubleClick={() => onCompleted(todo.id)} key={todo.id}>
                        <span className="title">{todo.todoName}</span>
                        <div className="actions">
                            <button className="delete" onClick={() => onRemove(todo.id)}>&#10060;</button>
                            <button className="important" onClick={() => onImportant(todo.id)}>&#128276;</button>
                        </div>
                    </div>
                    )
                }) :
            <div className="empty">Дел пока нет</div> }
        </div>
    );
};

export default Todos;