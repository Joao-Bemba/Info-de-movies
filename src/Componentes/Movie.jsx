import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Card.css';
import MoviesCard from './MoviesCard.jsx';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';

const Movie = () => {
  const { id } = useParams();
  const url = 'https://api.themoviedb.org/3/movie/';
  const api = 'a178813aff33eab2ec625cb9c0722ae9';
  const [movie, setMovie] = useState({}); // Inicializando como objeto vazio

  useEffect(() => {
    const urlMovie = `${url}${id}?api_key=${api}&language=pt-BR`;
    getMovie(urlMovie);
  }, [id]);

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (erro) {
      alert("Erro: " + erro);
    }
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <div id="home">
        {movie && Object.keys(movie).length > 0 && (
          <MoviesCard showLink={false} movie={movie} />
        )}
        <div id="card2">
            <p>Slog: {movie.tagline}</p>
          <div id="bsI">
            <BsWallet2 id="bs"/>
            <p>Orçamento: {movie.budget} dólares</p>
          </div>
          <div id="bsI">
            <BsGraphUp id="bs"/>
            <p>Receita: {movie.revenue} dólares</p>
          </div>
          <div id="bsI">
            <BsHourglassSplit id="bs"/>
            <p>Duração: {movie.runtime} minutos</p>
          </div>
          <div id="bsI">
            <p>Descrição: {movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
