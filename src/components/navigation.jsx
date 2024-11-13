import React, { useState } from "react";
import "./nav.css";

export const Navigation = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Modal state before toggle:", isModalOpen); // Check state
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div className="logo-text small-logo-text" style={{ display: "flex" }}>
              <p style={{ marginRight: "10px" }}>Upgrade Construction London</p>
            </div>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#features" className="page-scroll">Home</a></li>
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#portfolio" className="page-scroll">Portfolio</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
            <li>
              <a href="#contact" onClick={toggleModal} className="careers-link">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Careers</h2>
            <p>To apply for a job at Upgrade Construction London, please send your resume and cover letter to:</p>
            <p>
              <a className="apply" href="mailto:upgradeconstructions@yahoo.com">
                upgradeconstructions@yahoo.com
              </a>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
