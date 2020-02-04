import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Project from '../components/Project';
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then( response => {
        setProjects(response.data);
      })
  })

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Projects" />
          <div className="row mt-30-reverse">
            {projects.map(project => (
              <TrackVisibility once offset={200} className="col-lg-4 col-md-6 col-12 mt-30" key={projects.id}>
                <Project content={project}/>
              </TrackVisibility>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
