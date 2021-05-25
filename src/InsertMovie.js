import axios from 'axios';
import React , {useState} from 'react'
import MovieList from './MovieList';

function InsertMovie() {
    const[query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    function HandleClick(e){     
        e.preventDefault();
        return (
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8ed07d777753e9aecac431c2a94f39b&language=en-US&query=${query}&page=1&include_adult=false`).then(res =>{
                // console.log(res);
                setMovies(res.data.results);
            }).catch(err=>{
                console.log(err);
            }))
        }   
    return (
        <div className="container">
        <form className="form" onSubmit={HandleClick} >
            <h1>MovieFun</h1>
            <input  type="text" name="query" placeholder="e.g Avengers.." className="input" value={query} onChange={e => setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
         </form> 
         <div className="card-list">
         {movies.map(movie => (
            <MovieList movie={movie}/>
    ))}
         </div>            
        </div>
        
    )
}

export default InsertMovie
