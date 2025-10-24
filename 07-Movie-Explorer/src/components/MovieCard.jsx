function MovieCard({ movie, onClick}){

  const handleClick = () => {
    if (onClick) {
      onClick(movie.imdbID); 
    }
  };

    return(
        <div style={{width: "10rem", height: "15rem", borderRadius: "1.2rem", backgroundColor: "#ffffff15", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexShrink: "0"}} onClick={handleClick}>
            <img src={movie?.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt="poster" style={{width: "7rem", borderRadius: "1rem"}} />
            <p style={{fontSize: "1.1rem", textAlign: 'center', margin: "0.2rem"}}>{movie?.Title}</p>
            <p>{movie?.Year}</p>
        </div>
    );
}

export default MovieCard;