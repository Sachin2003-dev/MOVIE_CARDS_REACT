function MovieCard({ movie, index, isAdded, onAdd }) {
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={movie.image} alt={movie.title} />
      </div>

      <div className="movie-details">
        <h3>
          {index + 1}. {movie.title}
        </h3>

        <div className="movie-meta">
          {movie.year} · {movie.duration} · {movie.genre}
        </div>

        <div className="movie-actions">
          <span className="rating">
            ⭐ {movie.rating}
          </span>

          <button className="text-btn">
            ☆ Rate
          </button>

          <button
            className="text-btn"
            onClick={() => onAdd(movie)}
            disabled={isAdded}
          >
            {isAdded ? "✓ Added to Watchlist" : "+ Add to Watchlist"}
          </button>
        </div>

        <p className="description">
          {movie.description}
        </p>

        <div className="credits">
          <strong>Director</strong>
          <span>{movie.director}</span>

          <strong>Stars</strong>
          <span>{movie.stars}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;