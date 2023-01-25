import React from 'react';

const Pagination = ({itemsPerPage, page, movies, onPageClick}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(movies.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {
                pageNumbers.map(number => {
                    const className = page === number ? 'active' : null;
                    return <button className={className} key={number} onClick={() => onPageClick(number)}>{number}</button>;
                })
            }
        </div>
    )
};

export default Pagination;