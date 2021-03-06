export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const DELETE_MOVIE = 'DELETE_MOVIE'

import { getAllMovies, deleteMovieApi } from '../apis'

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(setLoading())
    return getAllMovies()
      .then((movies) => {
        dispatch(receiveMovies(movies))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies,
  }
}

export const setError = (errMessage) => {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export const deleteMovie = (id) => {
  return (dispatch) => {
    return deleteMovieApi(id)
      .then((movies) => dispatch(receiveMovies(movies)))
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
