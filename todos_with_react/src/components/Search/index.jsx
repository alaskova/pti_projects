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
        const {searchText} = this.state;

        return (
            <input className="needle" type="text" placeholder="Что будем искать?" value={searchText} onChange={onChange} />
        );
    }
}

export default Search;