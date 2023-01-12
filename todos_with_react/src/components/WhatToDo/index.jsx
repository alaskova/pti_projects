import React from 'react';

class WhatToDo extends React.Component {
    state = {
        todoTitle: ''
    };

    onChange = (e) => {
        this.setState({
            todoTitle: e.target.value
        });
    };

    onSubmit = (e) => {
        if (e.code === 'Enter') {
            this.props.onAdd({
                id: this.getUniqId(),
                title: this.state.todoTitle,
                important: false,
                completed: false
            });

            this.setState({
                todoTitle: ''
            });
        }
    };

    getUniqId = () => '_' + Math.random().toString(36).substr(2, 9);

    render() {
        const {onSubmit, onChange} = this;
        const {todoTitle} = this.state;

        return (
            <div className="source">
                <input onChange={onChange} onKeyUp={onSubmit} value={todoTitle} className="title" type="text" placeholder="Что нужно сделать?" />
            </div>
        );
    }
}

export default WhatToDo;