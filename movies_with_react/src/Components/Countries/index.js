import React from 'react';

const Countries = ({movies, onCountryClick}) => {
    const count = (country) => {
        let numberOfFilms = 0;
        movies.forEach(movie => {
            if (movie.countries.includes(country)) {
                numberOfFilms += 1;
            }
        });
        return numberOfFilms;
    };

    const countries = [
        {name: 'usa', title: 'США'},
        {name: 'gb', title: 'Великобритания'},
        {name: 'malta', title: 'Мальта'},
        {name: 'france', title: 'Франция'},
        {name: 'canada', title: 'Канада'},
        {name: 'nz', title: 'Новая Зеландия'},
        {name: 'uae', title: 'ОАЭ'},
        {name: 'sk', title: 'Корея Южная'},
        {name: 'australia', title: 'Австралия'},
        {name: 'ussr', title: 'СССР'}
    ];

    return (
        <div className="countries">
            {
                countries.map(country => (
                    <>
                        <input type="checkbox" value={country.name} id={country.name} onClick={() => onCountryClick(country.title)} />
                        <label htmlFor={country.name}>{`${country.title}(${count(country.title)})`}</label>
                    </>
                ))
            }
        </div>
    );
};

export default Countries;