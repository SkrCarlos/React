import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previosSearch = useRef(search)
  
  //PASAR UNA FUNCION CON USEMEMO

  // const getMovies = useMemo( () => {
  //   return async ({ search }) => {
  //     if( previosSearch.current === search ) return
      
  //     try {
  //       setLoading(true)
  //       setError(null)
  //       previosSearch.current = search
  //       const newMovies = await searchMovies({ search })
  //       setMovies(newMovies)
  //     } catch (error) {
  //       setError(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [])

  //PASAR UNA FUNCION CON USECALLBACK

  const getMovies = useCallback( 
    async ({ search }) => {
    if( previosSearch.current === search ) return
    
    try {
      setLoading(true)
      setError(null)
      previosSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  

  // const sortedMovies = sort 
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])


  
  

  return { movies: sortedMovies, getMovies, loading, error}
}
