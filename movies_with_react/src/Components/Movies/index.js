import React from 'react';

const Movies = ({movies, viewType, openMoviePopup, getTimeFromMins}) => {

    if (viewType === 'tiles' ) {
        return (
            <>
                {
                    movies.length ?
                        movies.map(movie => (
                            <div className="movie" key={movie.id} onClick={() => openMoviePopup(movie)}>
                                <div className="movie-image-container">
                                    <a href="#"><img src={`images/movies/${movie.id}.jpg`}/></a>
                                </div>

                                <a className="movie-title" href="#">{movie.title}</a>

                                <div className="movie-details">
                                    <span>{movie.year}</span>
                                </div>
                            </div>
                        )) :
                        <div>Не найдено</div>
                }
            </>

        );
    } else {
        return (
            <>
                {
                    movies.length ?
                        movies.map(movie => (
                            <div className="movie" key={movie.id}>
                                <div className="movie-image-container">
                                    <a href="#"><img src={`images/movies/${movie.id}.jpg`} /></a>
                                </div>

                                <a className="movie-title" href="#">{movie.title}</a>

                                <table className="movie-details">
                                    <tbody>
                                    <tr>
                                        <th>Год:</th>
                                        <td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <th>Страна:</th>
                                        <td>{movie.countries.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Жанр:</th>
                                        <td>{movie.genres.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Время:</th>
                                        <td>{`${movie.time} мин. /${getTimeFromMins(movie.time)} ч.`}</td>
                                    </tr>
                                    <tr>
                                        <th>Рейтинг:</th>
                                        <td>{movie.rating}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="movie-plot">{movie.plot}</div>
                            </div>
                        )) :
                        <div>Не найдено</div>
                }
            </>
        );
    }
}

export default Movies;