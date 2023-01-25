import React from 'react';

const ViewType = ({viewType, onViewTypeChange}) => {
    const buttons = [
        {type: 'list', title: 'Списком'},
        {type: 'tiles', title: 'Плитками'}
    ];

    return (
        <div className="view-type">
            Отображать:
            {
                buttons.map(button => {
                    const className = viewType === button.type ? 'active' : null;
                    return <button data-view-type={button.type} className={className} onClick={() => onViewTypeChange(button.type)} key={button.type}>{button.title}</button>;
                })
            }
        </div>
    );
};

export default ViewType;