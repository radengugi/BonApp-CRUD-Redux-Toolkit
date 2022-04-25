import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovie from "./features/movies/AddMovie";
import EditMovie from "./features/movies/EditMovie";
import MovieList from "./features/movies/MovieList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-gray-700 text-4xl">
        To Do List Bon App
      </h1>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
      </Routes>
    </div>
  );
}

export default App;
