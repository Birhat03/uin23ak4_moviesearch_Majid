export default function Search({setSearch, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        //Sjekk om input har mer enn 3 tegn
        if(event.target.value.length >= 3){
            setSearch(event.target.value)
            console.log(event.target.value)
        }

        else{
            setSearch(event.target.value)
        }
    }
    return (
    
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="James Bond.." onChange={handleSearch} />
            <button type="submit" onClick={getMovies}>Søk</button>
        </form>
    )
}