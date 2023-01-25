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
        const {searchText} = this.state;
        const {onChange} = this;

        return (
            <div className="search">
                Поиск:
                <input type="text" onChange={onChange} value={searchText}/>
            </div>
        );
    }
}

export default Search;