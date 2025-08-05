import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
