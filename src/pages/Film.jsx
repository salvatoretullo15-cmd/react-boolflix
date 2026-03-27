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
        <div className='bg'>
            {/*implementazione del form di ricerca con utilizzo del ciclo map*/}
            <form role="search" onSubmit={handleSearch}>           
                <input type="text" value={searchFilm} onChange={(e) => setSearchFilm(e.target.value)} placeholder="Cerca un film..."/>
                    <button type="submit">Cerca</button>
                    <div className="container-flex">
                        <div className='row row-cols-sm-2 row-cols-md-5 g-4'>
                            {movies.map(movie => (
                                <div className="col" key={movie.id}>
                                  <div className='card h-100'>
                                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt="locandina"/>
                                    <div class="card-body">
                                        <h3 className="card-title">{movie.title}</h3>
                                        <p className="card-text">Titolo originale: {movie.original_title}</p>
                                        <p className="card-text">Lingua: {movie.original_language}</p>
                                        <p className="card-text">Voto: {movie.vote_average}</p>
                                    </div>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </form>
        </div>
    )
}