/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatenateAndUppercase(str1, str2) {
  const firstPart = str1.substring(0, 2);
  const secondPart = str2.slice(-3);
  const concatenatedString = firstPart + secondPart;
  const uppercasedString = concatenatedString.toUpperCase();
  console.log(uppercasedString);
}

const string1 = "hello";
const string2 = "world";
concatenateAndUppercase(string1, string2);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function generateRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 101); 
    randomArray.push(randomValue);
  }
  return randomArray;
}

const randomValues = generateRandomArray();
console.log(randomValues);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function getEvenNumbers(inputArray) {
  const evenNumbers = inputArray.filter(number => number % 2 === 0);
  return evenNumbers;
}

const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenValues = getEvenNumbers(numericArray);
console.log(evenValues);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sumArrayNumbers(array) {
  let sum = 0;

  array.forEach(function (element) {
    if (typeof element === 'number') {
      sum += element;
    }
  });

  return sum;
}

const numericArray = [1, 2, 3, 4, 5];
const result = sumArrayNumbers(numericArray);
console.log(result);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sumArrayNumbers(array) {
  const sum = array.reduce(function (accumulator, currentValue) {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);

  return sum;
}

const numericArray = [1, 2, 3, 4, 5];
const result = sumArrayNumbers(numericArray);
console.log(result);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function numberplusnumber(array) {
  const sum = array.reduce(function (accumulator, currentValue) {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }

const numericArray = [1, 2, 3, 4, 5];
const increment = 10;
const result = incrementArrayValues(numericArray, increment);
console.log(result);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function stringLengths(array) {
  const lengthsArray = array.map(function (str) {
    return str.length;
  });
  return lengthsArray;
}

const stringArray = ["EPICODE", "is", "great"];
const result = stringLengths(stringArray);
console.log(result);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function getOddNumbers() {
  const oddNumbers = [];
  for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}

const result = getOddNumbers();
console.log(result);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function findOldestFilm(films) {
  if (films.length === 0) {
    return null; // Restituisci null se l'array è vuoto
  }

  const oldestFilm = films.reduce(function (oldest, currentFilm) {
    const oldestYear = parseInt(oldest.Year, 10);
    const currentYear = parseInt(currentFilm.Year, 10);

    if (isNaN(oldestYear) || currentYear < oldestYear) {
      return currentFilm;
    } else {
      return oldest;
    }
  });

  return oldestFilm;
}

const oldestMovie = findOldestFilm(movies);
console.log(oldestMovie);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function getNumberOfFilms(films) {
  return films.length;
}

const numberOfMovies = getNumberOfFilms(movies);
console.log(`Il numero di film nell'array è: ${numberOfMovies}`);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function getMovieTitles(films) {
  const titlesArray = films.map(function (film) {
    return film.Title;
  });
  return titlesArray;
}

const movieTitles = getMovieTitles(movies);
console.log(movieTitles);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function getMoviesInCurrentMillennium(films) {
  const currentYear = new Date().getFullYear(); 
  const startYear = 2000; 

  const moviesInMillennium = films.filter(function (film) {
    const releaseYear = parseInt(film.Year, 10);
    return releaseYear >= startYear && releaseYear <= currentYear;
  });

  return moviesInMillennium;
}

const moviesInCurrentMillennium = getMoviesInCurrentMillennium(movies);
console.log(moviesInCurrentMillennium);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sumYearsOfMovies(films) {
  const totalYears = films.reduce(function (total, film) {
    const releaseYear = parseInt(film.Year, 10);
    if (!isNaN(releaseYear)) {
      return total + releaseYear;
    }
    return total;
  }, 0);

  return totalYears;
}

const yearsSum = sumYearsOfMovies(movies);
console.log(`La somma degli anni di produzione dei film è: ${yearsSum}`);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function getMovieByImdbID(films, imdbID) {
  return films.find(function (film) {
    return film.imdbID === imdbID;
  });
}

const imdbID = 'tt0167260'; 
const specificMovie = getMovieByImdbID(movies, imdbID);

if (specificMovie) {
  console.log(specificMovie);
} else {
  console.log('Film non trovato');
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function findIndexOfMovieByYear(films, targetYear) {
  for (let i = 0; i < films.length; i++) {
    if (films[i].Year === targetYear) {
      return i;
    }
  }
  return -1; 
}

const yearToFind = '2002'; 
const indexOfMovie = findIndexOfMovieByYear(movies, yearToFind);

if (indexOfMovie !== -1) {
  console.log(`Il primo film uscito nell'anno ${yearToFind} ha l'indice ${indexOfMovie}`);
} else {
  console.log(`Nessun film trovato per l'anno ${yearToFind}`);
}
