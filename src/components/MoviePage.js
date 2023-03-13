import { useParams } from "react-router-dom"
export default function MoviePage({movies}){
    const {link} = useParams()
    const movie = movies.find((movie) => movie[18] === link)

    return (
        <section>
            <article>
                <h1>{movie[0]}</h1>
                <p>IMDb Rating: ⭐<strong>{movie[16]} </strong></p>
                <p>{movie[1]} • {movie[4]} • {movie[2]}</p>
                <img src={movie[13]} alt={movie[0]} onError={(e) => {
                    //bytter bilde med placeholder onError
     e.target.src = 'https://place-hold.it/300x500&text=(FilmPoster)&fontsize=16' // kode hentet fra: https://stackoverflow.com/questions/36418806/react-use-img-onerror
  }}/>
                <p className="plot">{movie[9]}</p>
                <p>Utgivelsesdato: <strong>{movie[3]}</strong></p>
                <p>Språk: <strong>{movie[10]}</strong></p>
                <p>Land: <strong>{movie[11]}</strong></p>
                <p>Regissør: <strong> {movie[6]}</strong></p>
                <p>Forfattere: <strong>{movie[7]}</strong></p>
                <p>Skuespillere: <strong>{movie[8]}</strong></p>
            </article>
        </section>
    )
}