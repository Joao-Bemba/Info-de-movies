
import './Nav.jsx'

import {useState} from 'react'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './navbar.css'

import {useNavigate, Link} from 'react-router-dom'

var Nav=()=>{
  
  const [search, setSearch] = useState('');
  
  const navigate = useNavigate();

  const eventForm = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Por favor, insira um termo de busca.");
    }else{
      navigate(`/search/?q=${search}`)
      
      setSearch("")
    }
  };
  
  return(
      <nav id="navb">
          <div id="logo">
            <BiCameraMovie id="cam" />
            <Link to="/">InfoMovies</Link>
          </div>
          <div id="form">
            <form onSubmit={eventForm}>
              <input
              value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar filmes"
                type="text"
              />
              <button type="submit">
                <BiSearchAlt2 id="ser" />
              </button>
            </form>
          </div>
      </nav>
    );
}

export default Nav;