import React from 'react';

import Whores from '../Whores/Whores';
import Form from '../Form/Form';

class App extends React.Component {
    state = {
        isAddFormOpened: false,
        selectedWhoreId: null,
        whores: []
    };

    componentDidMount() {
        const whores = this.getWhoresFromStorage();

        this.setState({ whores });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.whores !== prevState.whores) {
            this.setWhoresToStorage(this.state.whores);
        }
    }

    setWhoresToStorage = (whores) => {
        localStorage.setItem('whores', JSON.stringify(whores));
    };

    getWhoresFromStorage = () => {
        return JSON.parse(localStorage.getItem('whores')) || [];
    };

    showAddForm = () => {
        this.setState({
            isAddFormOpened: true,
            selectedWhoreId: null
        });
    };

    onChoose = (id) => {
        this.setState({
            selectedWhoreId: id,
            isAddFormOpened: false
        });
    };

    onSave = (whore) => {
        this.setState((state) => ({
            whores: [
                ...state.whores,
                whore
            ],
            isAddFormOpened: false,
            selectedWhoreId: null
        }));
    };

    onRemove = (id) => {
        this.setState((state) => ({
            whores: state.whores.filter(whore => whore.id !== id),
            selectedWhoreId: null,
            isAddFormOpened: false
        }));
    };

    onUpdate = (updatedWhore) => {
        this.setState((state) => ({
            whores: state.whores.map((whore) => whore.id === this.state.selectedWhoreId ? updatedWhore : whore),
            selectedWhoreId: null,
            isAddFormOpened: false
        }));
    };

    render() {
        const {showAddForm, onSave, onRemove, onUpdate, onChoose} = this;
        const {whores, selectedWhoreId, isAddFormOpened} = this.state;
        const whore = whores.find(whore => whore.id === selectedWhoreId);

        return (
            <>
                <div className="left-column">
                    <button className="add-whore-btn btn" onClick={showAddForm}>Добавить</button>
                    <Whores whores={whores} onChoose={onChoose} />
                </div>

                <div className="right-column">
                    {
                        isAddFormOpened ?
                            <Form onSave={onSave} /> :
                            selectedWhoreId ?
                                <Form onRemove={onRemove} onUpdate={onUpdate} whore={whore} /> :
                                null
                    }
                </div>
            </>
        );
    }
}

export default App;