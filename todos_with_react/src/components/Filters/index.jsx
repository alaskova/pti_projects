import React from 'react';

const Filters = ({onFilterChange, activeFilter}) => {
    const buttons = [
        {name: 'all', title: 'Все'},
        {name: 'incompleted', title: 'Незавершенные'},
        {name: 'completed', title: 'Завершенные'},
    ];

    return (
        <div className="actions">
            {
                buttons.map(button => {
                    const className = activeFilter === button.name ? 'active' : null;
                    return <button className={className} onClick={() => onFilterChange(button.name)}>{button.title}</button>;
                })
            }
        </div>
    );
};

export default Filters;