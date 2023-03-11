import { Link } from "react-router-dom"

export default function MovieCard({title, img, year, id}){
    return(
        <article className="movie-card">
            <img src={img} alt={title} onError={(e) => {
     e.target.src = 'https://place-hold.it/300x500&text=(FilmPoster)&fontsize=16' // kode hentet fra: https://stackoverflow.com/questions/36418806/react-use-img-onerror
  }}/>
            <h3>{title}</h3>
            <p>Utgivelsesår: <span>{year}</span></p>
            <p style={{color: "#d99d11"}}>Les mer om filmen</p>
            <Link to={"https://www.imdb.com/title/"+id} target="_blank" rel="noopener noreferrer"><p></p></Link>
        </article>
    )
    //Åpne link i ny fane kode: https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab
}