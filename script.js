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
    platform: "Max",
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
    title: "Spider-Verse",
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
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    platform: "Prime Video",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    link: "https://www.primevideo.com/"
  },
  {
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Adventure",
    rating: 7.6,
    platform: "Disney+",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
    link: "https://www.disneyplus.com/"
  },
  {
    title: "The Social Network",
    year: 2010,
    genre: "Drama",
    rating: 7.8,
    platform: "Netflix",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    link: "https://www.netflix.com/"
  },
  {
    title: "Inside Out",
    year: 2015,
    genre: "Animation",
    rating: 8.2,
    platform: "Disney+",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    link: "https://www.disneyplus.com/"
  }
];

const trendingGrid = document.getElementById("trendingGrid");
const topRatedGrid = document.getElementById("topRatedGrid");
const genreGrid = document.getElementById("genreGrid");
const globalSearch = document.getElementById("globalSearch");
const genrePills = document.querySelectorAll(".genre-pill");

let activeGenre = "all";

function createCard(movie) {
  return `
    <article class="movie-card">
      <div class="card-image" style="background-image: linear-gradient(180deg, rgba(10,15,23,0.1), rgba(10,15,23,0.70)), url('${movie.image}');">
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
    </article>
  `;
}

function renderMovies(container, list) {
  container.innerHTML = list.map((movie) => createCard(movie)).join("");
}

function getFilteredMovies() {
  const query = globalSearch.value.trim().toLowerCase();

  return movies.filter((movie) => {
    const matchesGenre = activeGenre === "all" || movie.genre === activeGenre;
    const matchesSearch =
      !query ||
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query) ||
      movie.platform.toLowerCase().includes(query);

    return matchesGenre && matchesSearch;
  });
}

function refreshMovies() {
  const filtered = getFilteredMovies();
  const trendingList = filtered.slice(0, 4);
  const topRatedList = [...filtered].sort((a, b) => b.rating - a.rating).slice(0, 4);

  renderMovies(trendingGrid, trendingList);
  renderMovies(topRatedGrid, topRatedList);
  renderMovies(genreGrid, filtered.slice(0, 8));
}

globalSearch.addEventListener("input", refreshMovies);

genrePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    activeGenre = pill.dataset.genre;
    genrePills.forEach((item) => item.classList.toggle("active", item === pill));
    refreshMovies();
  });
});

refreshMovies();

const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector("button");
  button.textContent = "Joined!";
  button.disabled = true;
});
