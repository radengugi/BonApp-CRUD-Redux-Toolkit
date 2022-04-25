import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Morbius",
    description:
      "Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.",
    date: "2022-04-24",
  },
  {
    id: "2",
    title: "The Batman",
    description:
      "Di tahun kedua memerangi kejahatan, Batman mengungkap korupsi besar di Gotham City yang menghubungkan keluarganya sendiri dan menghadapi pembunuh berantai yang dikenal sebagai Riddler.",
    date: "2022-04-24",
  },
];

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    editMovie: (state, action) => {
      const { id, title, description, date } = action.payload;
      const existingMovie = state.find((movie) => movie.id === id);
      if (existingMovie) {
        existingMovie.title = title;
        existingMovie.description = description;
        existingMovie.date = date;
      }
    },
    deleteMovie: (state, action) => {
      const { id } = action.payload;
      const existingMovie = state.find((movie) => movie.id === id);
      if (existingMovie) {
        return state.filter((movie) => movie.id !== id);
      }
    },
  },
});

export const { addMovie, editMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
