import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import API from "../data/api"

function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    const fetchData = async () => {
      try {
        let response = await API.get('/portfolio')
        setInformation(response.data.information);
      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a software developer with a focus on Android development. 
                  When I am not coding, I love to be active.  I spend most of my 
                  free time at the rock climbing gym or running.
                </p>
                <ul>
                  {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>}
                  {!information.birthDate ? null : <li>
                    <b>Birth Date</b> {information.birthDate}
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                </ul>
                <a href={information.cvfile} className="mi-button">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
