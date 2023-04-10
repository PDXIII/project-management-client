// src/pages/ProjectListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import AddProject from "../components/AddProject";

const API_URL = "http://localhost:5005/api";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  const getAllProjects = () => {
    axios
      .get(API_URL + "/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [projects]);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />
      {projects ? <ProjectList projects={projects} /> : <Spinner />}
    </div>
  );
}

const ProjectList = (props) => {
  return (
    <div className="ProjectList">
      {props.projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectListPage;
