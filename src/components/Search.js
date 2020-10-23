import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("i was clicked");
    props.search(searchValue);
    setSearchValue("");
  };
  return (
    <>
      <div className="container">
        <h1>Search for a movie or tv series...</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Are you looking for a movie or a TV series?</label>
            <input
              type="text"
              class="form-control"
              placeholder="Search your movie here..."
              value={searchValue}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-info my-4 mx-4">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
