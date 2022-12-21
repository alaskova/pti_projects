import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.whore ? this.props.whore : this.getDefaultState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.whore !== prevProps.whore) {
            this.setState(this.props.whore ? this.props.whore : this.getDefaultState());
        }
    }

    getDefaultState = () => {
        return {
            id: '',
            name: '',
            lastName: '',
            alias: '',
            age: '',
            price: ''
        };
    };

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({
            [field]: value
        });
    };

    getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    onSave = () => {
        const whore = {
            ...this.state,
            id: this.getUniqId()
        };
        this.props.onSave(whore);
    };

    onUpdate = () => {
        const updatedWhore = {
            ...this.state,
        };
        this.props.onUpdate(updatedWhore);
    };

    render() {
        const {id, name, lastName, alias, age, price} = this.state;
        const {onSave, onUpdate, onChange} = this;
        const {whore, onRemove} = this.props;

        return (
            <form className="whore-form">
                <input name="name" onChange={onChange} value={name} type="text" placeholder="Имя" />
                <input name="lastName" onChange={onChange} value={lastName} type="text" placeholder="Фамилия" />
                <input name="alias" onChange={onChange} value={alias} type="text" placeholder="Псевдоним" />
                <input name="age" onChange={onChange} value={age} type="text" placeholder="Возраст" />
                <input name="price" onChange={onChange} value={price} type="text" placeholder="Цена" />

                {
                    whore ?
                        <>
                            <button type="button" onClick={onUpdate} className="update-whore-btn btn">Обновить</button>
                            <button type="button" onClick={() => onRemove(id)} className="delete-whore-btn btn">Удалить</button>
                        </> :
                        <button type="button" onClick={onSave} className="save-whore-btn btn">Сохранить</button>
                }
            </form>
        );
    }
}

export default Form;