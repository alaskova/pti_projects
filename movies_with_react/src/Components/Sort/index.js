import React from 'react';

const Sort = ({onSortTypeChange}) => {
    const arrowUp = String.fromCharCode(8593);
    const arrowDown = String.fromCharCode(8595);

    const sortTypes = [
        {name: 'default', title: 'по умолчанию'},
        {name: 'ascending_title', title: `по алфавиту ${arrowUp}`},
        {name: 'descending_title', title: `по алфавиту ${arrowDown}`},
        {name: 'ascending_rating', title: `по рейтингу ${arrowUp}`},
        {name: 'descending_rating', title: `по рейтингу ${arrowDown}`},
        {name: 'ascending_year', title: `по году ${arrowUp}`},
        {name: 'descending_year', title: `по году ${arrowDown}`},
        {name: 'ascending_time', title: `по длительности ${arrowUp}`},
        {name: 'descending_time', title: `по длительности ${arrowDown}`}
    ];

    return (
        <div className="sort">
            Сортировать:
            <select onChange={(e) => onSortTypeChange(e.target.value)}>
                {
                    sortTypes.map(sortType => {
                        return <option value={sortType.name}>{sortType.title}</option>;
                    })
                }
            </select>
        </div>
    );
};

export default Sort;