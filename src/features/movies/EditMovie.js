import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editMovie } from "./MovieSlice";

const EditMovie = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const navigate = useNavigate();
  const existingMovies = movies.filter((movie) => movie.id === params.id);
  console.log("movies :>> ", movies.filter((movie) => movie.id));
  console.log('params :>> ', params);
  const { title, description, date } = existingMovies[0];
  const [values, setValues] = useState({
    title,
    description,
    date,
  });

  const handleEditMovie = () => {
    setValues({ title: "", description: "", date: "" });
    dispatch(
      editMovie({
        id: params.id,
        title: values.title,
        description: values.description,
        date: values.date,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.title}
        inputProps={{ type: "text", placeholder: "Spiderman" }}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />
      <br />
      <TextField
        label="Description"
        value={values.description}
        inputProps={{ type: "text", placeholder: "Write here..." }}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <br />
      <TextField
        label="Date of Release"
        value={values.date}
        inputProps={{ type: "date", placeholder: "Write here..." }}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
      />
      <Button onClick={handleEditMovie}>Edit</Button>
    </div>
  );
};

export default EditMovie;
