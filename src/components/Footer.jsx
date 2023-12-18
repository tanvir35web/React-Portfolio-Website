import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Tower-2, KBS, Kallyanpur, Dhaka</p>
            </div>
          </div>

          <div className="phone location">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>+880 1625568609</p>
          </div>

          <div className="email location">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>tanvir.dev35@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About The Company</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            dolorum consequatur, neque modi pariatur possimus sequi nesciunt
            fuga debitis totam accusantium accusamus nisi at optio, corrupti sed
            nihil ullam praesentium ab porro nulla minus
          </p>

          <div className="social-icon">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
