"use strict";


const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personaMovieDB.count == '' ||   personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personaMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personaMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personaMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDateBase: function(hidden) {
        if (!hidden) {
            console.log(personaMovieDB);
        }
    },
    toggleVisibleMyDateBase: function() {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номер ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personaMovieDB.genres[i - 1] = genre;
            }
        }
    
        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


