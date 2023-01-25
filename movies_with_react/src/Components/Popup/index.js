import React from "react";

const Popup = ({movie, closeMoviePopup, getTimeFromMins}) => {

    return (
        <>
            <div className="overlay"></div>
            <div className="popup">
                <button className="close" onClick={closeMoviePopup} >Закрыть</button>
                <div className="popup-content">
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
                </div>
            </div>
        </>
    );
};

export default Popup;

