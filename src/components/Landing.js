import React, { useEffect, useReducer } from "react";
import Search from "./Search";
import Movie from "./Movie";
import { reducer } from "./reducer";

const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=f9d68eae&s=avengers";

const initialState = {
  isLoading: true,
  movies: [],
  errorMessage: null,
  movie: [],
};

const Landing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`http://www.omdbapi.com/?apikey=f9d68eae&s=${searchValue}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, isLoading } = state;

  return (
    <div>
      <Search search={search} />

      <p className="App-intro">A few of my favorite movies</p>
      <div className="container">
        {isLoading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div className="row">
            {movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
