import React from "react"
import MovieCard from "./MovieCard";

export default function SearchMovies() {
    
    const [query, setQuery] = React.useState("")
    const [movies, setMovies] = React.useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
            
        const url = `https://api.themoviedb.org/3/search/movie?api_key=04bd14764b1b552d6250e990429e33c8&language=en-US&query=${query}&page=1&include_adult=false`;
            
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Blade Runner" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>  
        </div>
    )
}