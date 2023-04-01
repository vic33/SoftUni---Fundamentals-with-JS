function movies(inputData) { 
    let movies = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }
    //iterate trough the array elements
    for (let element of inputData) {
        //IF addMovie
        if (element.includes('addMovie')) { addMovie() }
        //IF directedBy
        else if (element.includes('directedBy')) { directed() }
        //IF onDate
        else if (element.includes('onDate')) { filmDate() }

        function addMovie() {
            let newMovie = element.split(' ').slice(1).join(' ');
            let film = new Movie(newMovie);
            movies.push(film);
        }
        function directed() {
            let newMovie = element.split(' ');
            let directedIndex = newMovie.indexOf('directedBy');
            let filmName = newMovie.slice(0, directedIndex).join(' ');
            let director = newMovie.slice(directedIndex + 1).join(' ');
            for (let film of movies) {
                if (film.name === filmName) {
                    film.director = director;
                    break;
                }
            }
        }
        function filmDate() {
            let newMovie = element.split(' ');
            let directedIndex = newMovie.indexOf('onDate');
            let filmName = newMovie.slice(0, directedIndex).join(' ');
            let filmDate = newMovie.slice(directedIndex + 1).join(' ');
            for (let film of movies) {
                if (film.name === filmName) {
                    film.date = filmDate;
                    break;
                }
            }
        }
    }
    movies.forEach((movie) => {
        if(movie.director && movie.date){
            let toJSON = JSON.stringify(movie);
            console.log(toJSON);
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])