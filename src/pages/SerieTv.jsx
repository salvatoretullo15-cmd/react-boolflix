import { useState } from 'react'
import * as Flags from 'country-flag-icons/react/3x2'

export default function SerieTv() {

    const [searchTv, setSearchTv] = useState('')
    const [tv,setTV] = useState([])

    const getFlag = (lang) => {
    const langToCountry = { en: 'GB', ja: 'JP', ko: 'KR', zh: 'CN', hi: 'IN' };
    const code = (langToCountry[lang] || lang).toUpperCase();
    const FlagComponent = Flags[code];

        return FlagComponent ? 
            <FlagComponent className="movie-flag"/> : 
            <span className="lang-text">{lang.toUpperCase()}</span>;
        }

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
        <div className='text-center'>
            <form className='bg-black border border-black' role='search' onSubmit={handleSearch}>           
                <input className='ms-3 mt-3 mb-3' type='text' value={searchTv} onChange={(e) => setSearchTv(e.target.value)} placeholder='Cerca un serie tv...'/>
                <button className='btn btn-dark ms-2' type='submit'>Cerca</button>
            </form>
                <div className='container-fluid bg-danger'>
                    <div className='row row-cols-sm-2 row-cols-md-5 g-4'>
                        {tv.map(tv => (
                            <div className='col' key={tv.id}>
                                <div className='card h-100 bg-black'>
                                    <img src={tv.poster_path ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}` : `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt='locandina'/>
                                    <div className='card-body text-white'>
                                        <h3>{tv.name}</h3>
                                        <p>Titolo originale: {tv.original_title}</p>
                                        <p>Lingua:{getFlag(tv.original_language)} {tv.original_language}</p>
                                        <p>Voto: {tv.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}