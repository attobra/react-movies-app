import React, { useEffect, useReducer } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Landing from "./components/Landing";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
