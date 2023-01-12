import React from 'react';

import Statistics from '../Statistics';
import Search from '../Search';
import Filters from '../Filters';
import WhatToDo from "../WhatToDo";
import Todos from "../Todos";

class App extends React.Component {
    state = {
        todos: [],
        activeFilter: 'all',
        searchText: ''
    };

    componentDidMount() {
        const todos = this.getTodosFromStorage();

        this.setState({ todos });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.todos !== prevState.todos) {
            this.setTodosToStorage(this.state.todos);
        }
    }

    setTodosToStorage = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    getTodosFromStorage = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    onAdd = (todo) => {
        this.setState((state) => ({
            todos: [
                ...state.todos,
                todo
            ]
        }));
    };

    onRemove = (id) => {
        this.setState((state) => ({
            todos: state.todos.filter(todo => todo.id !== id),
        }));
    };

    onImportant = (id) => {
        this.setState((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? {
                ...todo,
                important: !todo.important
            } : todo)
        }));
    };

    onCompleted = (id) => {
        this.setState((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : todo)
        }));
    };

    getFilteredTodos = () => {
        const {todos, activeFilter, searchText} = this.state;

        return todos
            .filter(todo => todo.title.toLowerCase().includes(searchText.toLowerCase()))
            .filter(todo => {
                switch (activeFilter) {
                    case 'incompleted':
                        return !todo.completed;
                    case 'completed':
                        return todo.completed;
                    default:
                        return true;
                }
            });
    };

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        });
    };

    onFilterChange = (activeFilter) => {
        this.setState({
            activeFilter
        });
    };

    render() {
        const {getFilteredTodos, onAdd, onRemove, onImportant, onCompleted, onFilterChange, onSearchChange} = this;
        const {todos, activeFilter, searchText} = this.state;

        const completedCount = todos.filter(todo => !todo.completed).length;
        const incompletedCount = todos.filter(todo => todo.completed).length;

        return (
            <div className="app">
                <Statistics completedCount={completedCount} incompletedCount={incompletedCount} />
                <div className="filters">
                    <Search onSearchChange={onSearchChange} />
                    <Filters onFilterChange={onFilterChange} activeFilter={activeFilter} />
                </div>
                <WhatToDo onAdd={onAdd} />
                <Todos
                    todos={getFilteredTodos()}
                    onRemove={onRemove}
                    onImportant={onImportant}
                    onCompleted={onCompleted}
                />
            </div>
        );
    }
}

export default App;