import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

const API_KEY = 'e0df00ce0ce638d52be847de0146cbfb'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    
    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <Router>
      <div className="container">
        <h1>MoViEzBug</h1>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
