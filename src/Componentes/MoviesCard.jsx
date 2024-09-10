import {Link} from 'react-router-dom'

import Movie from './Movie.jsx'

import {FaStar} from 'react-icons/fa'

import './Card.css'

var MoviesCard=({movie, showLink=true})=>{
  
  var imgUrl='https://image.tmdb.org/t/p/w500/'
  
  return(
      <div id="card">
        <img src={imgUrl+ movie.poster_path} alt={movie.title}/>
          <h2>{movie.title}</h2>
        <div id="inf">
          <FaStar id="estrela"/>
          <p>
            {movie.vote_average}
          </p>
        </div>
         {showLink && <Link id="a" to={`/movies/${movie.id}`}>Mais detalhes</Link>}
     </div>
    )
}

export default MoviesCard;