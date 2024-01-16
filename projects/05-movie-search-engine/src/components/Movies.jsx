// eslint-disable-next-line react/prop-types
function ListOfMovies ({ movies }){
    return (
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          movies.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
}

function NoMoviesResults () {
  return (
    <p>No se encontraron películas para este resultado</p>
  )
}

// eslint-disable-next-line react/prop-types
export function Movies ({ movies }) {
  // eslint-disable-next-line react/prop-types
  const hasMovies = movies && movies.length > 0

  return (
    hasMovies 
    ? <ListOfMovies movies={movies} /> 
    : <NoMoviesResults />
    
  )
}