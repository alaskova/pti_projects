import React from 'react';

class WhatToDo extends React.Component {
    state = {
        todoName: '',
        id: '',
        important: false,
        completed: false
    };

    onChange = (e) => {
        this.setState({
            todoName: e.target.value
        });
    };

    onSubmit = (e) => {
        if (e.code === 'Enter') {
            const todo = {
                ...this.state,
                id: this.getUniqId()
            };

            this.props.onAdd(todo);

            this.setState({
                todoName: ''
            });
        }
    };

    getUniqId = () => '_' + Math.random().toString(36).substr(2, 9);

    render() {
        const {onSubmit, onChange} = this;
        const {todoName} = this.state;

        return (
            <div className="source">
                <input onChange={onChange} onKeyUp={onSubmit} value={todoName} name="todoName" className="title" type="text" placeholder="Что нужно сделать?" />
            </div>
        );
    }
}

export default WhatToDo;