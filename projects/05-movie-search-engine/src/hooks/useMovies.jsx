import responseMovies from '../mocks/whith-results.json'
// import withoutResults from '../mocks/no-results.json'

// const API_KEY = '4037c882'



export function useMovies () {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
  }))

  return { movies: mappedMovies}
}