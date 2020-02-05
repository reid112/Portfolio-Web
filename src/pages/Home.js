import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import API from "../data/api"

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  
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
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
