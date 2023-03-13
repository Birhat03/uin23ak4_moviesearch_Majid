import { Link } from "react-router-dom"

export default function MovieCard({title, img, year, genre, director, actors, link}){
    return(
        <article className="movie-card">
            <img src={img} alt={title} onError={(e) => {
     e.target.src = 'https://place-hold.it/300x500&text=(FilmPoster)&fontsize=16' // kode hentet fra: https://stackoverflow.com/questions/36418806/react-use-img-onerror
  }}/>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <h4><strong>{genre}</strong></h4>
            <p>Regissør: <strong>{director}</strong> </p>
            <p>Skuespillere: <strong>{actors}</strong> </p>
            <p style={{color: "#d99d11"}}><strong>Les mer om filmen </strong></p>
            <Link to={link} className="link"></Link>
            
        </article>
    )
}