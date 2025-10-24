import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard.jsx'
import MovieDetail from './components/MovieDetail.jsx';
import axios from 'axios';

function App() {
  const API_KEY = "a66cef54";
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState("");
  const [shadowColor, setShadowColor] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const getMovie = async () => {
    if(!movieName) return;
    
    try{
      const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
        setShadowColor("5px 5px 25px green");
      } else {
        setMovies([]);
        setError("No movies found!");
        setShadowColor("5px 5px 25px red");
      }
    }
    catch(err){
        setError("Something went Wrong, Try Again");
        setMovies(null);
        setShadowColor("5px 5px 25px red");
    }

  };

  // New function to handle clicking a MovieCard
 const handleMovieClick = async (imdbID) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
    if (response.data.Response === "True") {
      setSelectedMovie(response.data); // Full movie details
      setIsModalOpen(true);
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

  // Function to close the modal  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };
  
  
  return (
    <>
     <div className={`container ${isModalOpen ? 'blur-background' : ''}`} style={{boxShadow:shadowColor}}>
      <div className="header">
        <h1>Movie Explorer</h1>
        <img src="src/assets/movie-exp-logo.jpg" height="70rem" alt="logo" style={{borderRadius: "40px", boxShadow: "2px 2px 12px green"}}/>
      </div>
      <hr />
      <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} placeholder='Search Movie Here...🔍'  onKeyDown={e => {
        if (e.key === "Enter") {
          getMovie();
        }}}
        disabled={isModalOpen}/>
    
      <div className="result">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={handleMovieClick}/>
        ))}
        {
          error && <h1 style={{color: "red", marginTop: "10rem"}}>{error}</h1>
        }
      </div>
     </div>
      {isModalOpen && selectedMovie && (
      <MovieDetail movie={selectedMovie} onClose={handleCloseModal} />
      )}
  </>
  )
}

export default App
