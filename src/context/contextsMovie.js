import axios from "axios";
import React, { useReducer } from "react";
import { CASE_GET_MOVIE, CASE_GET_ONE_MOVIE } from "../helpers/cases";
import { MOVIES_API } from "../helpers/const";

export const contextsMovie = React.createContext();

const INIT_STATE = {
  movies: [],
  oneMovie: null,
  movieCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_MOVIE:
      return {
        ...state,
        movies: action.payload.data,
        movieCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_MOVIE:
      return {
        ...state,
        oneMovie: action.payload.data,
      };
    default:
      return state;
  }
};

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getMovie() {
    let result = await axios(MOVIES_API + window.location.search);
    console.log(result);
    dispatch({
      type: CASE_GET_MOVIE,
      payload: result,
    });
  }

  async function handleAddWatch(newMovie) {
    await axios.post(MOVIES_API, newMovie);
    getMovie();
  }

  async function getOneMovie(id) {
    let result = await axios(`${MOVIES_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_MOVIE,
      payload: result,
    });
  }

  async function upDataMovie(id, editedmovie) {
    await axios.patch(`${MOVIES_API}/${id}`, editedmovie);
    getMovie();
  }

  async function deleteMovie(id) {
    await axios.delete(`${MOVIES_API}/${id}`);
    getMovie();
  }

  async function updateRating(id, ratings) {
    console.log(ratings);
    await axios.patch(`${MOVIES_API}/${id}`, { ratings: ratings });
    getOneMovie();
  }
  //  comment
  async function editOneCommit(id, comments) {
    await axios.patch(`${MOVIES_API}/${id}`, { comments: comments });
    getOneMovie(id);
  }
  // comment
  async function editOneLike(id, likes) {
    await axios.patch(`${MOVIES_API}/${id}`, { likes: likes });
    getOneMovie();
  }
  return (
    <contextsMovie.Provider
      value={{
        movies: state.movies,

        oneMOvie: state.oneMovie,

        movieCount: state.movieCount,

        oneMovie: state.oneMovie,

        getMovie,
        getOneMovie,
        upDataMovie,
        handleAddWatch,
        deleteMovie,
        updateRating,
        editOneCommit,
        editOneLike,
      }}
    >
      {children}
    </contextsMovie.Provider>
  );
};

export default MovieContextProvider;
