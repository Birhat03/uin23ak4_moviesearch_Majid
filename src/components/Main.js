import MovieCard from './MovieCard';
import Search from './Search';
export default function Main({movies, setSearch, getMovies}){
    //https://dev.to/arikaturika/use-this-trick-to-map-over-single-objects-in-javascript-38nb
    if (!Array.isArray(movies)){
        movies = [movies];
    }
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2>Filmer basert på ditt søk:</h2>
          {movies.map((movie, index) => (
                  <MovieCard key={index} title={movie.Title} img={movie.Poster} year={movie.Year} id={movie.imdbID}/> 
             
          ))}
        </section>
      </>

      );
}