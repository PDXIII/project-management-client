// src/pages/ProjectDetailsPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

// const process.env.REACT_APP_API = "http://localhost:5005";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);

  // Get the URL parameter `:projectId`
  const { projectId } = useParams();

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = () => {
    //  <== ADD A NEW FUNCTION

    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_API}/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // <== ADD AN EFFECT
    getProject();
  }, [projectId]);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => <TaskCard key={task._id} {...task} />)}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
