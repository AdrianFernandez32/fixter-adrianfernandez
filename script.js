const apiKey = 'eda4d8abf723d7f2e65cb02f9a0112cf';
const baseUrl = 'https://api.themoviedb.org/3';

const moviesGrid = document.getElementById('movies-grid');
const imageUrl = 'https://image.tmdb.org/t/p/w500';

async function fetchMovies(endpoint) {
  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      const data = await response.json();
      return data.results; // Return the list of movies
    } else {
      throw new Error('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

async function getPopularMovies() {
  const endpoint = `${baseUrl}/movie/popular?api_key=${apiKey}`;

  const popularMovies = await fetchMovies(endpoint);
  console.log('Popular Movies:', popularMovies);

  popularMovies.forEach((movie) => {
    // Create the movie container
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie');

    // Create the movie poster
    const image = document.createElement('img');
    image.src = imageUrl + movie.poster_path;
    image.alt = 'Movie Poster';
    image.id - 'movie-poster';
    movieContainer.appendChild(image);

    // Create the movie title
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = movie.title;
    title.id = 'movie-title';
    movieContainer.appendChild(title);

    // Create the votes count
    const votes = document.createElement('p');
    votes.classList.add('votes');
    votes.textContent = `Votes: ${movie.vote_average}`;
    votes.id = 'movie-votes';
    movieContainer.appendChild(votes);

    // Append the movie container to the movies grid
    moviesGrid.appendChild(movieContainer);
  });
}

getPopularMovies();

const showMoreButton = document.querySelector('.show-more');
let currentPage = 0;
const offset = 20;

function handleSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value;
    const moviesGrid = document.getElementById('movies-grid');

    // Clear existing content
    moviesGrid.innerHTML = '';

    // Send the request to search for movies
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Process the search results
        const movies = data.results;
        movies.forEach((movie) => {
          // Create the movie container
          const movieContainer = document.createElement('div');
          movieContainer.classList.add('movie');

          // Create the movie poster
          const image = document.createElement('img');
          image.src = imageUrl + movie.poster_path;
          image.alt = 'Movie Poster';
          image.id - 'movie-poster';
          movieContainer.appendChild(image);

          // Create the movie title
          const title = document.createElement('h3');
          title.classList.add('title');
          title.textContent = movie.title;
          title.id = 'movie-title';
          movieContainer.appendChild(title);

          // Create the votes count
          const votes = document.createElement('p');
          votes.classList.add('votes');
          votes.textContent = `Votes: ${movie.vote_average}`;
          votes.id = 'movie-votes';
          movieContainer.appendChild(votes);

          // Append the movie container to the movies grid
          moviesGrid.appendChild(movieContainer);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

// Add event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', handleSearch);
