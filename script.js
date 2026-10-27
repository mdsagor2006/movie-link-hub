const movies = [
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.7,
    platform: "Prime Video",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    link: "https://www.primevideo.com/"
  },
  {
    title: "The Batman",
    year: 2022,
    genre: "Action",
    rating: 8.3,
    platform: "HBO Max",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80",
    link: "https://www.max.com/"
  },
  {
    title: "Everything Everywhere",
    year: 2022,
    genre: "Comedy",
    rating: 8.1,
    platform: "Netflix",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    link: "https://www.netflix.com/"
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genre: "Animation",
    rating: 8.6,
    platform: "Netflix",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    link: "https://www.netflix.com/"
  },
  {
    title: "Arrival",
    year: 2016,
    genre: "Drama",
    rating: 8.0,
    platform: "Apple TV",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
    link: "https://tv.apple.com/"
  },
  {
    title: "No Time to Die",
    year: 2021,
    genre: "Thriller",
    rating: 7.3,
    platform: "Netflix",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    link: "https://www.netflix.com/"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    platform: "Prime Video",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    link: "https://www.primevideo.com/"
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    rating: 8.1,
    platform: "Mubi",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    link: "https://mubi.com/"
  }
];

const movieGrid = document.getElementById("movieGrid");
const genreFilter = document.getElementById("genreFilter");
const movieSearch = document.getElementById("movieSearch");
const genrePills = document.querySelectorAll(".genre-pill");

const uniqueGenres = [...new Set(movies.map((movie) => movie.genre))];

uniqueGenres.forEach((genre) => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreFilter.appendChild(option);
});

let activeGenre = "all";

function renderMovies(list) {
  movieGrid.innerHTML = "";

  list.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <div class="card-image" style="background-image: linear-gradient(180deg, rgba(8,13,19,0.08), rgba(8,13,19,0.72)), url('${movie.image}');">
        <span class="card-badge">${movie.platform}</span>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3>${movie.title}</h3>
          <span class="rating">★ ${movie.rating}</span>
        </div>
        <div class="meta">
          <span>${movie.genre}</span>
          <span>${movie.year}</span>
        </div>
        <div class="card-footer">
          <span class="tag">Watch now</span>
          <a class="watch-btn" href="${movie.link}" target="_blank" rel="noreferrer">Open</a>
        </div>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}

function applyFilters() {
  const query = movieSearch.value.trim().toLowerCase();

  const filtered = movies.filter((movie) => {
    const matchesGenre = activeGenre === "all" || movie.genre === activeGenre;
    const matchesSearch =
      !query ||
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query) ||
      movie.platform.toLowerCase().includes(query);

    return matchesGenre && matchesSearch;
  });

  renderMovies(filtered);
}

movieSearch.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", (event) => {
  activeGenre = event.target.value;
  applyFilters();
});

genrePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    genrePills.forEach((item) => item.classList.remove("active"));
    pill.classList.add("active");
    activeGenre = pill.dataset.genre;
    genreFilter.value = activeGenre;
    applyFilters();
  });
});

renderMovies(movies);
