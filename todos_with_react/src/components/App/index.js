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
    };

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
            ],
        }));
    };

    onRemove = (id) => {
        this.setState((state) => ({
            todos: state.todos.filter(todo => todo.id !== id),
        }));
    };

    onImportant = (id) => {
        const todo = this.state.todos.find(todo => todo.id === id);
        const updatedTodo = {
            ...todo,
            important: !todo.important
        };

        this.setState((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? updatedTodo: todo)
        }));
    };

    onCompleted = (id) => {
        const todo = this.state.todos.find(todo => todo.id === id);
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        };

        this.setState((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? updatedTodo: todo)
        }));
    };

    onFilter = (todos, filter) => {
        switch(filter) {
            case 'all':
                return todos;
            case 'incompleted':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
        }
    };

    onSearch = (todos, searchText) => {
        return todos.filter(todo => {
            return todo.todoName.toLowerCase().includes(searchText.toLowerCase());
        });
    };

    onSearchChange = (searchText) => {
        this.setState({
            searchText: searchText
        });
    };

    filtersEventListener = (e) => {
        this.setState({
            activeFilter: e.target.dataset.filter
        });
    };

    render() {
        const {onAdd, onRemove, onImportant, onCompleted, filtersEventListener, onSearchChange, onFilter, onSearch} = this;
        const {todos, activeFilter, searchText} = this.state;

        const visibleTodos = onFilter(onSearch(todos, searchText), activeFilter);

        const completed = this.state.todos.filter(todo => !todo.completed).length;
        const incompleted = this.state.todos.filter(todo => todo.completed).length;

        return (
            <>
                <Statistics completed={completed} incompleted={incompleted}/>
                <div className="filters">
                    <Search onSearchChange={onSearchChange} />
                    <Filters filtersEventListener={filtersEventListener} activeFilter={activeFilter} />
                </div>
                <WhatToDo onAdd={onAdd} />
                <Todos
                    todos={visibleTodos}
                    onRemove={onRemove}
                    onImportant={onImportant}
                    onCompleted={onCompleted}
                />
            </>
        )
    }
}

export default App;