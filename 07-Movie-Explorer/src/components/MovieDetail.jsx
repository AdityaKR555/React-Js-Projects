import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
        <div className='con' onClick={e => e.stopPropagation()}>
            <button onClick={onClose} className='close-btn'>&times;</button>
            <div className='info'>
                <img className="pos-img" src={movie?.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt="poster"/>
                <h2 className='title'>{movie.Title}</h2>
                <p className='details'>imdb Rating : {movie.imdbRating}</p>
                <p className='details'>Released : {movie.Released}</p>
                <p className='details'>Genre : {movie.Genre}</p>
                <p className='details'>Runtime : {movie.Runtime}</p>
                <p className='details'>Writer(s) : {movie.Writer}</p>
                <p className='details'>Directed by {movie.Director}</p>
                <p className='details'>Actors : {movie.Actors}</p>
                <p className='details'>BoxOffice Collection : {movie.BoxOffice}</p>
                <p className='details'>Plot : {movie.Plot}</p>
            </div>

        </div>
    </div>
  );
};

export default MovieDetail;