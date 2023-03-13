//Dette er inspirert fra recipe API som vi jobbet med i forlesning
import './App.css'
import './movies.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'
import MoviePage from './components/MoviePage'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  
  const getMovies = async() =>{
    
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=689377f1`)
    const data = await response.json()
    console.log(data.Search)
     
  //datamap returnerte Promise {<fulfilled>: undefined} siden det er i en async funksjon. Fikk hjelp av dette:
   //https://stackoverflow.com/questions/39452083/using-promise-function-inside-javascript-array-map
    const dataMap = data.Search.map(async (id) => {
      const response2 = await fetch(`http://www.omdbapi.com/?i=${id.imdbID}&plot=full&type=movie&apikey=689377f1`);
      const data2 = await response2.json();
      const dataArray = Object.values(data2);
      return dataArray
      
    })
    
    Promise.all(dataMap).then((results) => {
      console.log(results);
      setMovies(results)
    })

  }
  useEffect(() =>{
    getMovies()
    setSearch()
  },[])


  return (
      <Routes >
        <Route element={<Layout/>}>
          <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
          <Route path=':link' element={<MoviePage movies={movies} />}/>
        </Route>
      </Routes>

  );
}

export default App;
