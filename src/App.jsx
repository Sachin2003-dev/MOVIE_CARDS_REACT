import { useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      duration: "2h 28m",
      rating: 8.8,
      director: "Christopher Nolan",
      stars: "Leonardo DiCaprio, Tom Hardy",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into someone's mind.",
      image:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: "Adventure / Sci-Fi",
      duration: "2h 49m",
      rating: 8.7,
      director: "Christopher Nolan",
      stars: "Matthew McConaughey, Anne Hathaway",
      description:
        "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action / Crime",
      duration: "2h 32m",
      rating: 9.0,
      director: "Christopher Nolan",
      stars: "Christian Bale, Heath Ledger",
      description:
        "Batman faces his greatest challenge when the Joker creates chaos in Gotham City.",
      image:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Avatar",
      year: 2009,
      genre: "Sci-Fi / Fantasy",
      duration: "2h 42m",
      rating: 7.9,
      director: "James Cameron",
      stars: "Sam Worthington, Zoe Saldana",
      description:
        "A former Marine becomes part of the world of Pandora and discovers an extraordinary way of life.",
      image:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      year: 2019,
      genre: "Action / Adventure",
      duration: "3h 1m",
      rating: 8.4,
      director: "Anthony Russo, Joe Russo",
      stars: "Robert Downey Jr., Chris Evans",
      description:
        "The Avengers assemble once more to reverse the damage caused by Thanos.",
      image:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
  ];

  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  // Add movie
  const addToWatchlist = (movie) => {
    if (watchlist.some((item) => item.id === movie.id)) {
      return;
    }

    setWatchlist((prev) => [...prev, movie]);
    setMessage(`${movie.title} added to your watchlist!`);
  };

  // Remove movie
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.filter((movie) => movie.id !== id)
    );

    setMessage("Movie removed from watchlist!");
  };

  // Search movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">MOVIES</h2>

        <span>☰ Menu</span>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>☆ Watchlist</span>
        <span>Sign in</span>
      </nav>

      {/* Header */}
      <header className="hero">
        <h1>Movies watchlist</h1>
        <p>Created by You</p>
        <h4>
          My Watchlist: {watchlist.length} Movies
        </h4>
      </header>

      {/* Main content */}
      <main className="main-content">

        <section className="movie-section">

          <div className="list-header">
            <span>☰ {filteredMovies.length} items</span>
            <span>List order　↓</span>
          </div>

          {message && (
            <p className="message">{message}</p>
          )}

          {filteredMovies.length === 0 && (
            <p>No movies found!</p>
          )}

          <div className="movie-list">
            {filteredMovies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                index={index}
                isAdded={watchlist.some(
                  (item) => item.id === movie.id
                )}
                onAdd={addToWatchlist}
              />
            ))}
          </div>

        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          <h2>More to explore</h2>

          <div className="sidebar-box">
            <h3>My Watchlist</h3>

            <p>
              {watchlist.length} movies added
            </p>

            {watchlist.map((movie) => (
              <div className="watchlist-item" key={movie.id}>
                <span>{movie.title}</span>

                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </aside>

      </main>
    </div>
  );
}

export default App;