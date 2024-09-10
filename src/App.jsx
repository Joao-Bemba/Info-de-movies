import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Search from './Componentes/Search.jsx';

import Movie from './Componentes/Movie.jsx';

import './Componentes/navbar.css'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import Nav from './Componentes/Nav.jsx'

import { useState } from 'react';

import Home from './Componentes/Home.jsx';

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movies/:id/' element={<Movie />} />
          <Route exact path="/search/" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
