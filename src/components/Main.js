import MovieCard from './MovieCard';
import Search from './Search';
export default function Main({movies, setSearch, getMovies}){
   
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2>Filmer basert på ditt søk:</h2>
          {movies.map((movie, index) => (
                  <MovieCard key={index} title={movie[0]} img={movie[13]} year={movie[1]} 
                  genre={movie[5]} director={movie[6]} actors={movie[8]}  id={movie[18]} link={movie[18]}/> 
                  
             
          ))}
        </section>
      </>

      );
}