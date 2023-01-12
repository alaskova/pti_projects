import React from 'react';

const Statistics = ({completedCount, incompletedCount}) => {
    return (
        <div className="heading">
            <h1>Список дел</h1>
            <h4 className="stats">Осталось <span className="item-incompleted">{completedCount}</span>, готово <span className="item-completed">{incompletedCount}</span></h4>
        </div>
    );
};

export default Statistics;