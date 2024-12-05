import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import office from "../image/Solutions/game.png"; // Replace with your office image path

const AboutUs = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center para-color aos">
          {/* Left Section */}
          <div className="col-12 col-md-6 " data-aos="zoom-in-right">
            <h6 className="text-primary text-uppercase fw-bold">
              More About Us
            </h6>
            <h2 className="fw-bold mb-4">
              Empowering Businesses with{" "}
              <span className="text-primary">WhatsApp Communication</span>
            </h2>
            <p className="align">
              Transform the way you connect with customers using WhatsApp. From
              real-time updates to personalized promotions, we help your
              business stay ahead with seamless and interactive communication
              solutions.
            </p>
            <ul className="list-unstyled">
              <div className="row">
                <div className="col-md-6">
                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Enhance engagement with WhatsApp messaging.</span>
                  </li>
                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Send personalized bulk SMS instantly and securely.
                    </span>
                  </li>

                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Deliver real-time transactional updates.</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Secure transactions with instant OTPs.</span>
                  </li>
                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Personalize with voice call services.</span>
                  </li>
                  <li className="mb-2 d-flex ">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Leverage RCS for multimedia experiences.</span>
                  </li>
                </div>
              </div>
            </ul>

            <div className="mt-3 p-3 border rounded text-center w-75 bg-info">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <span>
                Call us anytime <strong>+91 123-456-7890</strong>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className=" col-12 col-md-6 text-center" data-aos="zoom-in-left">
            <div>
              <img
                src={office}
                alt="Office Environment"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
