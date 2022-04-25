import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./features/movies/MovieSlice";

export default configureStore({
  reducer: {
    movies: movieReducers,
  },
});
