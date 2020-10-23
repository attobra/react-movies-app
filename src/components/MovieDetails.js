import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  return (
    <div>
      <p>Movie details</p>
      <Link to="/" className="btn btn-default  bg-info text-light">
        Go Back To Search
      </Link>
    </div>
  );
};

export default MovieDetails;
