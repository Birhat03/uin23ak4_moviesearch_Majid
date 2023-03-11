import './App.css'
import './movies.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=689377f1`)
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)
    
    const response2 = await fetch(`http://www.omdbapi.com/?t=${search}&type=movie&apikey=689377f1`)
    const data2 = await response2.json()
    console.log(data2)
    
  }
  useEffect(() =>{
    getMovies()
  },[])


  return (
      <Routes >
        <Route element={<Layout/>}>
          <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        </Route>
      </Routes>

  );
}

export default App;
