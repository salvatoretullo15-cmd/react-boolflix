import { useState } from 'react'

export default function SerieTv() {

    const [searchTv, setSearchTv] = useState("")
    const [tv,setTV] = useState([])

    const handleSearch = (e) => {
        e.preventDefault();

        const API_KEY = import.meta.env.VITE_API_KEY;
        const urlDue = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchTv}&language=it-IT`;


    fetch(urlDue)
            .then(res => res.json())
            .then(data => {
                setTV(data.results); 
        });

    }    
        
    return(
        <div className='bg'>
            <form role="search" onSubmit={handleSearch}>           
                <input type="text" value={searchTv} onChange={(e) => setSearchTv(e.target.value)} placeholder="Cerca un serie tv..."/>
                    <button type="submit">Cerca</button>
                        <ul>
                            {tv.map(tv => (
                                <li key={tv.id}>
                                    <img src={tv.poster_path ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}` : `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt="locandina"/>
                                    <h3>{tv.name}</h3>
                                    <p>Titolo originale: {tv.original_title}</p>
                                    <p>Lingua: {tv.original_language}</p>
                                    <p>Voto: {tv.vote_average}</p>
                                </li>
                            ))}
                        </ul>
            </form>
        </div>
    )
}