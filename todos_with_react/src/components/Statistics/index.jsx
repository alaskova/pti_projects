import React from 'react';

const Statistics = ({completed, incompleted}) => {
    return (
        <div className="heading">
            <h1>Список дел</h1>
            <h4 className="stats">Осталось <span className="item-incompleted">{completed}</span>, готово <span className="item-completed">{incompleted}</span></h4>
        </div>
    )
};

export default Statistics;