import React,{useState} from "react"
import '../App.css';
import MovieCard from "./MovieCard"
function SearchMovie(){
    
    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]);

    const searchMovie = async (e)=>{
        e.preventDefault();
        console.log("submiting");
        let url;
        {query !== ""? url = `https://api.themoviedb.org/3/search/movie?api_key=EnterYourAPIKeyHere&language=en-US&query=${query}&page=1&include_adult=false`:url= ""}        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <form className="form" onSubmit={searchMovie}>
                <label className="label" htmlFor="query">Movie Search</label>
                <input className="input" type="text" name = "query" placeholder="i.e. Jurassic park" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                <br/>
                <button className="button" type="submit">Search</button>
                <br/>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie}  key={movie.id}/>
                ))}
            </div>
        </>
    )
}

export default SearchMovie