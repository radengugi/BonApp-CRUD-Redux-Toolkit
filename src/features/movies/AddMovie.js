import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addMovie } from "./MovieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleAddMovie = () => {
    setValues({ title: "", description: "", date: "" });
    console.log("values :>> ", values);
    dispatch(
      addMovie({
        id: uuidv4(),
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
        inputProps={{ type: "text", placeholder: "Write here..." }}
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
        inputProps={{ type: "date" }}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
      />
      <Button onClick={handleAddMovie}>Submit</Button>
    </div>
  );
};

export default AddMovie;
