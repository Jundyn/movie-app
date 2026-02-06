// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./components/MovieDescription";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "People we meet at Vacation",
      description: "Poppy's a free spirit. Alex loves a plan. After years of summer vacations, these polar-opposite pals wonder if they could be a perfect romantic match.",
      posterURL: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWaPw3st3aBVtEVxk54pNmMdqVV7OuhPB_shv0KCcj-IgB2SYObxb5j9UT1kAYPzdjg-0vKFLTJxwOyNUu-2iiEUFv8eEdx10fmKy4XBgZloehSRepVZxx94RdIO8QMlD7k4YFjbh5q470krjuLk.jpg?r=61b",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=m1C9DTOUH5s&pp=ygUaUGVvcGxlIHdlIG1lZXQgYXQgVmFjYXRpb24%3D"
    },
    {
      title: "Me Before You",
      description: "Vivacious, unassuming Lou faces pointed questions of the heart when she takes a job caring for a wealthy, cynical bachelor paralyzed in an accident.",
      posterURL: "https://dnm.nflximg.net/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYhtHi0xDpvlkF3ZRbVTkVijJdCYxy_76A0JV1shuIbbG_qp9SRQMUWbIGMyTXgXrxtgVDXRKIIAceqFca9raTDGx45HVvxme8fR.jpg?r=fb0",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=lyeJ_NXUqUs&pp=ygUNTWUgQmVmb3JlIFlvdQ%3D%3D"
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div>
      <h1>🎬 Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
