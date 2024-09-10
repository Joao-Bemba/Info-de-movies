import { useState, useEffect } from 'react';
import MoviesCard from './MoviesCard.jsx'

import './Home.css'

function Home() {
  const url = 'https://api.themoviedb.org/3/movie/';
  const api = 'a178813aff33eab2ec625cb9c0722ae9';
  const [topMovies, setTopMovies] = useState([]);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const urlTopMovies = `${url}top_rated?api_key=${api}&language=pt-BR`;
    getMovies(urlTopMovies);
  }, []);
  return (
    <>
      <h1>Melhores Filmes</h1>
    <div id="home">
      {topMovies.length > 0 && topMovies.map((movie) => (
        <MoviesCard movie={movie}
        />
      ))}
      </div>
    </>
  );
}

export default Home;
