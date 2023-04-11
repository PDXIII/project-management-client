// src/pages/ProjectListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  const getAllProjects = () => {
    axios
      .get(process.env.REACT_APP_API + "/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

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
        return <ProjectCard key={project._id} {...project} />;
      })}
    </div>
  );
};

export default ProjectListPage;
