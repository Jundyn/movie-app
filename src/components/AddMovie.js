// components/AddMovie.js
import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" onChange={handleChange} />
      <input name="rating" type="number" min="0" max="5" onChange={handleChange} />

      <button onClick={() => addMovie(movie)}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
