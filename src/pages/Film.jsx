import { useState } from 'react'

export default function Film() {

    //creazione delle costanti per ricercare i film e salvarli
    const [searchFilm, setSearchFilm] = useState("");
    const [movies, setMovies] = useState([]);

    //creazione della funzione handleSearch 
    const handleSearch = (e) => {
        //uso del prevent sull'evento per impedire il refresh della pagina
        e.preventDefault();

        //implementazione della costante url per impostare la chiamata a postman
        const API_KEY = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchFilm}&language=it-IT`;

        //utilizzo del fetch per la risposta in formato json
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results); 
        });
        
    }

    return(
        <>
            {/*implementazione del form di ricerca con utilizzo del ciclo map*/}
            <form role="search" onSubmit={handleSearch}>           
                <input type="text" value={searchFilm} onChange={(e) => setSearchFilm(e.target.value)} placeholder="Cerca un film..."/>
                    <button type="submit">Cerca</button>
                        <ul>
                            {movies.map(movie => (
                                <li key={movie.id}>
                                    <h3>{movie.title}</h3>
                                    <p>Titolo originale: {movie.original_title}</p>
                                    <p>Lingua: {movie.original_language}</p>
                                    <p>Voto: {movie.vote_average}</p>
                                </li>
                            ))}
                        </ul>
            </form>
        </>
    )
}