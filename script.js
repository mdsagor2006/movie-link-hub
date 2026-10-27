const movies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.7,
    platform: "Prime Video",
    duration: "2h 46m",
    summary:
      "Paul Atreides allies with the Fremen to bring down the oppressive empire and protect his destiny across the desert world of Arrakis.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.primevideo.com/",
    tags: ["Epic", "Space", "Adventure"]
  },
  {
    id: "the-batman",
    title: "The Batman",
    year: 2022,
    genre: "Action",
    rating: 8.3,
    platform: "Max",
    duration: "2h 56m",
    summary:
      "When a sadistic killer targets Gotham City, Batman must investigate corruption while protecting the innocent.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.max.com/",
    tags: ["Dark", "Mystery", "Crime"]
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere",
    year: 2022,
    genre: "Comedy",
    rating: 8.1,
    platform: "Netflix",
    duration: "2h 19m",
    summary:
      "A laundromat owner learns to connect with alternate versions of herself to save existence in a surreal, emotional adventure.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.netflix.com/",
    tags: ["Comedy", "Fantasy", "Sci-Fi"]
  },
  {
    id: "spider-verse",
    title: "Spider-Verse",
    year: 2023,
    genre: "Animation",
    rating: 8.6,
    platform: "Netflix",
    duration: "2h 20m",
    summary:
      "Miles Morales crosses dimensions as he learns what it means to become a hero in a universe full of possibilities.",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.netflix.com/",
    tags: ["Animated", "Action", "Adventure"]
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    genre: "Drama",
    rating: 8.0,
    platform: "Apple TV",
    duration: "1h 56m",
    summary:
      "A linguist is recruited to help communicate with an alien species whose arrival on Earth changes humanity forever.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80",
    link: "https://tv.apple.com/",
    tags: ["Drama", "Mystery", "Sci-Fi"]
  },
  {
    id: "no-time-to-die",
    title: "No Time to Die",
    year: 2021,
    genre: "Thriller",
    rating: 7.3,
    platform: "Netflix",
    duration: "2h 43m",
    summary:
      "James Bond is forced out of retirement for a final mission that tests his loyalty, love, and courage.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.netflix.com/",
    tags: ["Spy", "Action", "Thriller"]
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    platform: "Prime Video",
    duration: "2h 49m",
    summary:
      "A former pilot joins a mission beyond the stars to find a new home for humanity in the farthest reaches of space.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.primevideo.com/",
    tags: ["Epic", "Drama", "Space"]
  },
  {
    id: "grand-budapest",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    rating: 8.1,
    platform: "Mubi",
    duration: "1h 39m",
    summary:
      "A legendary concierge and his protégé navigate a world of mystery, murder, and old-world glamour.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    link: "https://mubi.com/",
    tags: ["Comedy", "Drama", "Adventure"]
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    platform: "Prime Video",
    duration: "2h 0m",
    summary:
      "Max and Furiosa race across the desert to outrun a tyrant and reclaim freedom in a brutal, unforgettable chase.",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.primevideo.com/",
    tags: ["Action", "Adventure", "Post-Apocalyptic"]
  },
  {
    id: "avatar-the-way-of-water",
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Adventure",
    rating: 7.6,
    platform: "Disney+",
    duration: "3h 12m",
    summary:
      "Jake Sully and Neytiri face new threats as their family navigates a deeper connection to Pandora.",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.disneyplus.com/",
    tags: ["Adventure", "Fantasy", "Sci-Fi"]
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    year: 2010,
    genre: "Drama",
    rating: 7.8,
    platform: "Netflix",
    duration: "2h 0m",
    summary:
      "A brilliant young entrepreneur launches a social network that reshapes power, ambition, and connection in a digital age.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.netflix.com/",
    tags: ["Drama", "Tech", "Fiction"]
  },
  {
    id: "inside-out",
    title: "Inside Out",
    year: 2015,
    genre: "Animation",
    rating: 8.2,
    platform: "Disney+",
    duration: "1h 35m",
    summary:
      "Inside Riley's mind, emotions guide her through a major life change and a journey toward balance and confidence.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.disneyplus.com/",
    tags: ["Family", "Animation", "Heartfelt"]
  }
];

const trendingGrid = document.getElementById("trendingGrid");
const topRatedGrid = document.getElementById("topRatedGrid");
const genreGrid = document.getElementById("genreGrid");
const detailRoot = document.getElementById("detailRoot");
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
          <a class="watch-btn" href="details.html?id=${movie.id}" rel="noopener">Details</a>
        </div>
      </div>
    </article>
  `;
}

function renderMovies(container, list) {
  if (!container) return;
  container.innerHTML = list.map((movie) => createCard(movie)).join("");
}

function getFilteredMovies() {
  const query = globalSearch ? globalSearch.value.trim().toLowerCase() : "";

  return movies.filter((movie) => {
    const matchesGenre = activeGenre === "all" || movie.genre === activeGenre;
    const matchesSearch =
      !query ||
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query) ||
      movie.platform.toLowerCase().includes(query) ||
      movie.tags.some((tag) => tag.toLowerCase().includes(query));

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

if (globalSearch) {
  globalSearch.addEventListener("input", refreshMovies);
}

genrePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    activeGenre = pill.dataset.genre;
    genrePills.forEach((item) => item.classList.toggle("active", item === pill));
    refreshMovies();
  });
});

if (document.body.dataset.page === "home") {
  refreshMovies();
}

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector("button");
    button.textContent = "Joined!";
    button.disabled = true;
  });
}

function renderMovieDetail() {
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");
  const selectedMovie = movies.find((movie) => movie.id === movieId) || movies[0];
  const similarMovies = movies.filter((movie) => movie.id !== selectedMovie.id).slice(0, 4);

  detailRoot.innerHTML = `
    <div class="detail-shell">
      <div class="container">
        <div class="detail-back">
          <a href="index.html" class="secondary-btn">← Back to catalog</a>
        </div>

        <article class="detail-card">
          <div class="detail-media" style="background-image: url('${selectedMovie.backdrop}');">
            <div class="detail-overlay"></div>
          </div>

          <div class="detail-content">
            <div class="detail-top">
              <div class="detail-badges">
                <span class="badge">${selectedMovie.genre}</span>
                <span class="badge">${selectedMovie.year}</span>
                <span class="badge">${selectedMovie.duration}</span>
              </div>
              <span class="detail-rating">★ ${selectedMovie.rating}</span>
            </div>

            <div class="detail-grid">
              <div class="detail-copy">
                <h1>${selectedMovie.title}</h1>
                <p class="detail-meta">
                  <span>${selectedMovie.platform}</span>
                  <span>•</span>
                  <span>${selectedMovie.genre}</span>
                  <span>•</span>
                  <span>${selectedMovie.duration}</span>
                </p>
                <p class="detail-summary">${selectedMovie.summary}</p>

                <div class="detail-actions">
                  <a class="watch-link" href="${selectedMovie.link}" target="_blank" rel="noreferrer">Watch now</a>
                  <a class="secondary-btn" href="index.html">Browse more</a>
                </div>
              </div>

              <div class="detail-aside">
                <div class="monetize-card">
                  <div class="metric-box">
                    <span>Availability</span>
                    <strong>${selectedMovie.platform}</strong>
                  </div>
                  <div class="metric-box">
                    <span>Tags</span>
                    <strong>${selectedMovie.tags.join(" • ")}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <section class="similar-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow dark">More to explore</span>
            <h2>Similar picks</h2>
          </div>
        </div>
        <div class="movie-grid">
          ${similarMovies.map((movie) => createCard(movie)).join("")}
        </div>
      </div>
    </section>
  `;
}

if (document.body.dataset.page === "detail") {
  renderMovieDetail();
}
