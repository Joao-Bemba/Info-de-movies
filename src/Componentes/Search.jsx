import MoviesCard from './MoviesCard.jsx';

import { useState, useEffect } from 'react';
import Movie from './Movie.jsx'

import { useSearchParams }
from 'react-router-dom';

import {Link} from 'react-router-dom'

import { FaStar } from 'react-icons/fa'; 

import './Card.css'


var Search = () => {
  
  const url = 'https://api.themoviedb.org/3/search/movie/';
  
  const api = 'a178813aff33eab2ec625cb9c0722ae9';

  var [searchParams] = useSearchParams();
  
  var [movies, setMovies] = useState([]);
  
  var query = searchParams.get('q'); 
  
  var getMovies = async (url) => {
    try {
      
      const res = await fetch(url);
      
      const data = await res.json();
      
      setMovies(data.results); 
      
    } catch (error) {
      alert("erro");
    }
    
  };

  useEffect(() => {
    
      const urlMovies =`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}&language=pt-BR`;
      
      getMovies(urlMovies);
  }, [query]);

  return (
    <div>
      <h1>Resultados para: {query}</h1>
        <div id="home">
      {movies.length==0 && <p>Nenhum Filme Disponivel</p>
      }
      {movies.length > 0 && movies.map((movie) => (
        <MoviesCard movie={movie}
        />
      ))}
      </div>
    </div>
  );
};

export default Search;
