// src/components/AddProject.js

import { useState } from "react";
import axios from "axios";

function AddProject(props) {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });

  const handleChange = (target) => {
    setDetails((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(process.env.REACT_APP_API + "/projects", details, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("response: ", response);
        props.refreshProjects();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form
        className="grid"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Title:</label>
        <input
          className="bg-black"
          type="text"
          name="title"
          value={details.title}
          onChange={(e) => handleChange(e.target)}
        />

        <label>Description:</label>
        <textarea
          className="bg-black"
          type="text"
          name="description"
          value={details.description}
          onChange={(e) => handleChange(e.target)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
