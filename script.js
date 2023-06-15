const apiKey = 'eda4d8abf723d7f2e65cb02f9a0112cf';
const baseUrl = 'https://api.themoviedb.org/3';

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
}

async function getActionMovies() {
  const endpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`;

  const actionMovies = await fetchMovies(endpoint);
  console.log('Action Movies:', actionMovies);
}

async function getRomanticMovies() {
  const endpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`;

  const romanticMovies = await fetchMovies(endpoint);
  console.log('Romantic Movies:', romanticMovies);
}

// async function getPopularMoviesBackgroundImages() {
//   const endpoint = `${baseUrl}/movie/popular?api_key=${apiKey}`;

//   const popularMovies = await fetchMovies(endpoint);

//   const topFourMovies = popularMovies.slice(0, 4);

//   topFourMovies.forEach((movie) => {
//     const div = document.createElement('div');
//     div.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
//     div.innerHTML = `
//       <h2>${movie.title}</h2>
//       <p>${movie.overview}</p>
//       <p>Release Date: ${movie.release_date}</p>
//     `;
//     div.className = 'carousel-item'; // Add a class name for the carousel item
//     carouselItemsContainer.appendChild(div);
//   });

//   // Add event listeners to the navigation buttons
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');

//   prevBtn.addEventListener('click', () => {
//     carouselItemsContainer.scrollBy({
//       left: -300, // Adjust the scroll distance as needed
//       behavior: 'smooth',
//     });
//   });

//   nextBtn.addEventListener('click', () => {
//     carouselItemsContainer.scrollBy({
//       left: 300, // Adjust the scroll distance as needed
//       behavior: 'smooth',
//     });
//   });
// }

// getPopularMoviesBackgroundImages();
getPopularMovies();
getActionMovies();
getRomanticMovies();
