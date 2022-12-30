import React from 'react';

const Filters = ({filtersEventListener, activeFilter}) => {
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
                    return <button data-filter={button.name} className={className} onClick={filtersEventListener}>{button.title}</button>;
                })
            }
        </div>
    )
};

export default Filters;