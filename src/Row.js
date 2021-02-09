import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original"


function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    }, [fetchURL]);
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        // console.table(movie?.title)
        window.scrollBy(0, 1000);
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
            
        }
      }

    

    return (
        
        <div className="row">
            <div className="result">
                <h2>Best Recommendations ( shift+scroll )</h2>
            </div>
            <div className="row__posters">
                
                {movies?.map(movie => (
                    <img
                        onClick={()=>handleClick(movie)}
                    key={movie.id}
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name} 
                    />
                ))}
                
                
            </div>
            
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
