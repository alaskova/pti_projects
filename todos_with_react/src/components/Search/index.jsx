import React from 'react';

class Search extends React.Component {
    state = {
        searchText: ''
    };

    onChange = (e) => {
        const searchText = e.target.value;

        this.setState({
            searchText
        });

        this.props.onSearchChange(searchText);
    };

    render() {
        const {onChange} = this;
        const {search} = this.state;

        return (
            <input className="needle" type="text" placeholder="Что будем искать?" value={search} onChange={onChange}/>
        );
    }
}

export default Search;