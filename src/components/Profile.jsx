import "./ProfileStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="left">
          <div className="bubble"></div>
        </div>
        <div className="right">
          <h1>Tanvirul Islam</h1>
          <p className="designation">Front-End Developer</p>
          <p className="about-text">
            I have been learning HTML, CSS, JavaScript, React, Bootstrap,
            Tailwind CSS, MUI, and other front-end web development technologies.
            I have completed several projects using these technologies, and I am
            excited to continue honing my skills and building amazing websites.
            I am also proficient in version control systems like Git and GitHub,
            which allows me to collaborate effectively with other developers and
            keep track of changes to my code.
          </p>
          <div className="social-icon">
            <Link to={"https://web.facebook.com/me.tanvir035"} target="_blank">
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>

            <Link to={"https://github.com/tanvir35web"} target="_blank">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/tanvir-niter09/"}
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
