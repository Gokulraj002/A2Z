import React from "react";
import travelImage from "../../image/Solutions/Travel1.png"; // Replace with your image path

const Home = () => {
  return (
    <section className="py-5 bg2">
      <div className="container ">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Tours & Travels with{" "}
              <span className="text-primary">Smart Communication!</span>
            </h1>
            <p className="">
              Simplify your travel operations, connect with customers instantly, 
              and share real-time updates with our advanced communication solutions. 
              Enhance the customer experience and grow your travel business today!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Share personalized travel itineraries and updates instantly.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Notify customers about flight, hotel, and package bookings in real time.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Promote exclusive travel offers and holiday packages effectively.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Enhance engagement with reminders and location-based services.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={travelImage}
              alt="Tours and Travels Services"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
