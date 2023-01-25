import React from 'react';

const Genres = ({onGenreClick}) => {
    const genres = [
        {name: 'action', title: 'боевик'},
        {name: 'comedy', title: 'комедия'},
        {name: 'crime', title: 'криминал'},
        {name: 'drama', title: 'драма'},
        {name: 'detective', title: 'детектив'},
        {name: 'fantastic', title: 'фантастика'},
        {name: 'fantasy', title: 'фэнтези'},
        {name: 'adventure', title: 'приключения'},
        {name: 'horror', title: 'ужасы'},
        {name: 'family', title: 'семейный'},
        {name: 'biography', title: 'биография'},
        {name: 'history', title: 'история'},
    ];

    return (
        <div className="genres">
            {
                genres.map(genre => (
                    <>
                        <input type="checkbox" value={genre.name} id={genre.name} onClick={() => onGenreClick(genre.title)} />
                        <label htmlFor={genre.name}>{genre.title}</label>
                    </>
                ))
            }
        </div>
    );
};

export default Genres;