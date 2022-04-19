import {
  CustomerServiceOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-icons">
        <a href="https://twitter.com/hbomax?lang=en" target="_blank">
          <TwitterOutlined classname="icons-a" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCVTQuK2CaWaTgSsoNkn5AiQ"
          target="_blank"
        >
          <YoutubeOutlined classname="icons-a" />
        </a>
        <a href="https://www.facebook.com/HBOMax/" target="_blank">
          <FacebookOutlined classname="icons-a" />
        </a>
        <a href="https://www.instagram.com/hbomax/?hl=en" target="_blank">
          <InstagramOutlined classname="icons-a" />
        </a>
        <a href="" target="_blank">
          <CustomerServiceOutlined className="icons-a" />
        </a>
        <Link to="/chat">
          {" "}
          <a>
            <HiOutlineMail />
          </a>
        </Link>
      </div>
      <div>
        <img
          className="footer-st-img-a"
          src="https://static.hbo.com/2021-07/prod-edu-band-get-started-00-2000x300.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="footer-ai-p">
        <div className="footer-second">
          <div className="footer-cont">
            <div className="footer-text">
              <div>
                <a href="https://www.hbo.com/about" target="_blank">
                  ABOUT
                </a>
                <p>Privacy Policy</p>
              </div>
              <div>
                <a
                  href="https://warnermediacareers.com/hbo-jobs"
                  target="_blank"
                >
                  CAREERS
                </a>
                <p>Terms of Use</p>
              </div>
              <div>
                <a href="https://www.hbo.com/ways-to-get" target="_blank">
                  GET HBO
                </a>
                <p>Add Choices</p>
              </div>
              <div>
                <a href="https://www.hbo.com/about/faqs" target="_blank">
                  HELP
                </a>
                <p>Show Purpose</p>
              </div>
            </div>
            <div className="last-line">
              <p>
                © 2022 Home Box Office, Inc. All Rights Reserved. This website
                may contain mature content.
              </p>
            </div>
          </div>
          <div className="footer-logo">
            <img
              src="https://www.hbo.com/img/hbo-logo-footer.svg"
              fill-opacity="0.25"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
