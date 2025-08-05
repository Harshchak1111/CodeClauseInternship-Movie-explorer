import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average} | 📅 {movie.release_date?.slice(0, 4)}</p>
    </Link>
  );
}

export default MovieCard;
