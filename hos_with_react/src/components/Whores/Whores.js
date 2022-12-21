import React from 'react';

const Whores = ({whores, onChoose}) => {
    return (
        <div className="whore-list-container">
            { whores.length > 0 ?
            <ul className="whore-list">
                { whores.map(whore => <li className="whore" onClick={() => {onChoose(whore.id)}} key={whore.id}>{whore.alias}, {whore.age}, {whore.price}$</li>) }
            </ul> :
            <span className="empty-whore-list">Шлюх пока нет</span> }
        </div>
    );
}

export default Whores;