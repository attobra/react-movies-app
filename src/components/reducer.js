// const initialState = {
//   isLoading: true,
//   movies: [],
//   errorMessage: null,
//   movie: [],
// };

export const reducer = (state, action) => {
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
    case "FETCH_MOVIE":
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    default:
      return state;
  }
};
