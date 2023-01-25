import React from 'react';

const ItemsPerPage = ({onItemsPerPage}) => {
    const items = [
        {name: 'all', title: 'все фильмы'},
        {name: '6', title: 'по 6 фильмов'},
        {name: '12', title: 'по 12 фильмов'},
        {name: '18', title: 'по 18 фильмов'},
    ];

    return (
        <div className="items-per-page">
            На странице:
            <select onChange={(e) => onItemsPerPage(e.target.value)}>
                {
                    items.map(item => {
                        return <option value={item.name} key={item.name}>{item.title}</option>;
                    })
                }
            </select>
        </div>
    );
};

export default ItemsPerPage;