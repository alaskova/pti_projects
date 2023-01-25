import React from 'react';

import Search from '../Search';
import ItemsPerPage from "../ItemsPerPage";
import Sort from '../Sort';
import ViewType from "../ViewType";
import Countries from "../Countries";
import Genres from "../Genres";
import Pagination from "../Pagination";
import Movies from "../Movies";
import Popup from "../Popup";

class App extends React.Component{
    state = {
        movies: [],
        searchText: '',
        itemsPerPage: 'all',
        page: 1,
        viewType: 'tiles',
        showPopup: false,
        movie: {},
        sortBy: 'default',
        filterCountries: [],
        filterGenres: []
    };

    componentDidMount() {
        this.getMovies();
    };

    getMovies = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:3001/movies');
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({
                        movies: JSON.parse(xhr.responseText)
                    });
                }
            }
        });
        xhr.send();
    };

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        });
    };

    onItemsPerPage = (itemsPerPage) => {
        this.setState({
            itemsPerPage,
            page: 1
        });
    };

    onViewTypeChange = (viewType) => {
        this.setState({
            viewType
        });
    };

    onPageClick = (page) => {
        this.setState({
            page
        });
    };

    onSortTypeChange = (sortBy) => {
        this.setState({
            sortBy
        })
    };

    onCountryClick = (countryTitle) => {
        if (!this.state.filterCountries.includes(countryTitle)) {
            this.setState((state) => ({
                filterCountries: [
                    ...state.filterCountries,
                    countryTitle
                ]
            }));
        } else {
            this.setState((state) => ({
                filterCountries: state.filterCountries.filter(country => country !== countryTitle)
            }));
        }
    };

    onGenreClick = (genreTitle) => {
        if (!this.state.filterGenres.includes(genreTitle)) {
            this.setState((state) => ({
                filterGenres: [
                    ...state.filterGenres,
                    genreTitle
                ]
            }));
        } else {
            this.setState((state) => ({
                filterGenres: state.filterGenres.filter(genre => genre !== genreTitle)
            }));
        }
    };

    openMoviePopup = (movie) => {
        this.setState({
            showPopup: true,
            movie
        });
    };

    closeMoviePopup = () => {
        this.setState({
            showPopup: false
        });
    };

    getTimeFromMins = (mins) => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + ':' + minutes;
    };

    getMoviesPerPage = (movies) => {
        const {page, itemsPerPage} = this.state;

        const indexOfLastMovie = page * itemsPerPage;
        const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;

        switch (itemsPerPage) {
            case '6':
                return movies.slice(0, page * 6).slice(indexOfFirstMovie, indexOfLastMovie);
            case '12':
                return movies.slice(0, page * 12).slice(indexOfFirstMovie, indexOfLastMovie);
            case '18':
                return movies.slice(0, page * 18).slice(indexOfFirstMovie, indexOfLastMovie);
            default:
                return movies;
        }
    };

    getSortedMovies = (movies) => {
        const {sortBy} = this.state;

        switch (sortBy) {
            case 'ascending_title':
                return [...movies].sort((a, b) => {
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                });
            case 'descending_title':
                return [...movies].sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return 1;
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return -1;
                    }
                });
            case 'ascending_rating':
                return [...movies].sort((a, b) => a.rating - b.rating);
            case 'descending_rating':
                return [...movies].sort((a, b) => b.rating - a.rating);
            case 'ascending_year':
                return [...movies].sort((a, b) => a.year - b.year);
            case 'descending_year':
                return [...movies].sort((a, b) => b.year - a.year);
            case 'ascending_time':
                return [...movies].sort((a, b) => a.time - b.time);
            case 'descending_time':
                return [...movies].sort((a, b) => b.time - a.time);
            default:
                return movies;
        }
    };

    getItemsFilteredBy = (movies, field, filters) => {
        return movies.filter(movie => {
            return filters.every(item => {
                return movie[field].includes(item);
            });
        });
    };

    getSearchedMovies = (movies) => {
        const {searchText} = this.state;

        return movies.filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()))
    };

    getFilteredMovies = () => {
        const {movies, filterCountries, filterGenres} = this.state;
        const {getMoviesPerPage, getSortedMovies, getSearchedMovies, getItemsFilteredBy} = this;

        return getSearchedMovies(getMoviesPerPage(getSortedMovies(getItemsFilteredBy(getItemsFilteredBy(movies, 'genres', filterGenres), 'countries', filterCountries))));
    };

    render() {
        const {movies, viewType, itemsPerPage, page, showPopup, movie} = this.state;
        const {onSearchChange, onItemsPerPage, getFilteredMovies, onViewTypeChange, onPageClick, openMoviePopup, closeMoviePopup, onSortTypeChange, getTimeFromMins, onCountryClick, onGenreClick} = this;
        const className = viewType === 'tiles' ? 'state-tiles' : 'state-list';

        return (
            <div className="app">
                <div className="top-bar">
                    <Search onSearchChange={onSearchChange} />
                    <ItemsPerPage onItemsPerPage={onItemsPerPage} />
                    <Sort onSortTypeChange={onSortTypeChange} />
                    <ViewType viewType={viewType} onViewTypeChange={onViewTypeChange} />
                </div>
                <div className="filters">
                    <h4>Фильтры</h4>
                    <Countries movies={movies} onCountryClick={onCountryClick} />
                    <Genres onGenreClick={onGenreClick} />
                </div>
                <Pagination itemsPerPage={itemsPerPage} movies={movies} page={page} onPageClick={onPageClick} />
                <div className={`movies ${className}`}>
                    <Movies movies={getFilteredMovies()} getTimeFromMins={getTimeFromMins} viewType={viewType} openMoviePopup={openMoviePopup} />
                </div>
                {
                    showPopup ?
                        <Popup movie={movie} closeMoviePopup={closeMoviePopup} getTimeFromMins={getTimeFromMins} /> :
                        null
                }
            </div>
        );
    }
}

export default App;