import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteMovie } from "./MovieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const [search, setSearch] = useState("");
  const [oldDate, setOldDate] = useState("");

  const handleRemove = (id) => {
    dispatch(deleteMovie({ id: id }));
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };
  let newFilter = movies.filter((val) => {
    return Object.keys(val).some((item) =>
      val[item]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  const renderCard = () =>
    newFilter.map((movie) => (
      <div
        className="bg-blue-200/50 p-5 flex items-center justify-between"
        key={movie.id}
      >
        <div>
          <h3 className="font-bold text-xl mb-5 text-gray-700">
            {movie.title}
          </h3>
          <span className="font-normal text-gray-600 text-justify">
            {movie.description}
          </span>
          <h6 className="font-normal text-sm text-gray-400 mt-10">
            {movie.date}
          </h6>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-movie/${movie.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Link>
          <button onClick={() => handleRemove(movie.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
              value={search}
              onChange={handleFilter}
            />
          </label>
        </div>
        <div className="text-right">
          <Link to="/add-movie">
            <Button>Add Movie</Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {movies.length ? (
          renderCard()
        ) : (
          <div className="text-center col-span-2 font-semibold text-gray-700">
            No Movies
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
