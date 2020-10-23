import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

import "./App.css";
import Movie from "./components/Movie";

const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=f9d68eae&s=avengers";

const initialState = {
  isLoading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
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
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(null);

  // const search = (searchValue) => {
  //   setIsLoading(true);
  //   setErrorMessage(null);

  //   fetch(`http://www.omdbapi.com/?apikey=f9d68eae&s=${searchValue}`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       if (jsonResponse.Response === "True") {
  //         setMovies(jsonResponse.SearchForm);
  //         setIsLoading(false);
  //       } else {
  //         setErrorMessage(jsonResponse.Error);
  //         setIsLoading(false);
  //       }
  //     });
  // };

  const { movies, errorMessage, isLoading } = state;

  return (
    <div className="App">
      <Header />
      <Search search={search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="container">
        {isLoading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div className="row">
            {movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))}
          </div>
        )}
      </div>

      {/* <div className="row">
        {state.movies.Response === "True"
          ? state.movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))
          : null}
      </div> */}

      <Footer />
    </div>
  );
};

export default App;
