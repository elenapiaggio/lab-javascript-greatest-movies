// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.forEach(movie => {
    directors.push(movie.director)
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let totalMoviesSpielbergDrama = 0;
  moviesArray.forEach(movie => {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      totalMoviesSpielbergDrama++;
    }
  });
  return totalMoviesSpielbergDrama;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let total = 0;
  if (moviesArray.length > 0) {
    moviesArray.forEach(movie => {
      if (movie.score) {
        total += movie.score;
      } else {
        total += 0;
      }
    });
    return parseFloat((total / moviesArray.length).toFixed(2));
  }
  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let totalDramaMovies = 0;
  const totalDramaScore = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.genre.includes('Drama')) {
      accumulator += currentValue.score;
      totalDramaMovies++;
    }
    return accumulator;
  }, 0);

  if (totalDramaMovies === 0) {
    return 0;
  }
  return parseFloat((totalDramaScore / totalDramaMovies).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => ({ ...movie }));
  newMoviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => ({ ...movie }));
  newMoviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const first20Titles = newMoviesArray.slice(0, 20).map(movie => movie.title);
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => ({ ...movie }));

  newMoviesArray.map(movie => {
    let timeString = movie.duration;
    let parts = timeString.split(' ');
    let movieDuration = 0;

    const hours = parseInt(parts[0].replace('h', ''));
    movieDuration += hours * 60;
    let minutes = 0;
    if (parts[1]) {
      minutes = parseInt(parts[1].replace('min', ''));
      movieDuration += minutes;
    }
    movie.duration = hours * 60 + minutes;
  });

  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
