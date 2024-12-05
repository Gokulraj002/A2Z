import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import houseIcon from "../../image/icons/house.svg";
import travelIcon from "../../image/icons/travel-case.svg";
import educationIcon from "../../image/icons/video-tutorials.svg";
import transportIcon from "../../image/icons/taxi.svg";
import eventIcon from "../../image/icons/event.svg";
import ecommerceIcon from "../../image/icons/smartphone.svg";
import gameIcon from "../../image/icons/joystick.svg";
import healthcareIcon from "../../image/icons/healthcare.svg";
import financeIcon from "../../image/icons/money-growth.svg";
import restaurantIcon from "../../image/icons/baker.svg";
import onDemandIcon from "../../image/icons/mobile-app.svg";
import groceryIcon from "../../image/icons/groceries.svg";

const Industries = () => {
  const industryData = [
    {
      icon: houseIcon,
      alt: "Real estate bulk SMS service provider",
      title: "Real Estate",
      path: "/real-estate/", // Add path for navigation
      anim: "fade-down-right",
    },
    {
      icon: travelIcon,
      alt: "Tours and travels bulk SMS service",
      title: "Tour & Travels",
      path: "/tours-travel/",
      anim: "fade-down",
    },
    {
      icon: educationIcon,
      alt: "Education bulk SMS service provider",
      title: "Education",
      path: "/education/",
      anim: "fade-down",
    },
    {
      icon: transportIcon,
      alt: "Transport bulk SMS service provider",
      title: "Transport",
      path: "/tours-travel/",
      anim: "fade-down-left",
    },
    {
      icon: eventIcon,
      alt: "Event bulk SMS service provider",
      title: "Event",
      path: "/media-entertainment/",
      anim: "zoom-in-right",
    },
    {
      icon: ecommerceIcon,
      alt: "eCommerce bulk SMS service provider",
      title: "eCommerce",
      path: "/retail-ecommerce/",
      anim: "zoom-in",
    },
    {
      icon: gameIcon,
      alt: "Game promotional bulk SMS service provider",
      title: "Game",
      path: "/gaming/",
      anim: "zoom-in",
    },
    {
      icon: healthcareIcon,
      alt: "Healthcare SMS service provider",
      title: "Healthcare",
      path: "/health-care/",
      anim: "zoom-in-left",
    },
    {
      icon: financeIcon,
      alt: "Finance bulk messaging service",
      title: "Finance",
      path: "/government/",
      anim: "fade-up-right",
    },
    {
      icon: restaurantIcon,
      alt: "Restaurant SMS service provider",
      title: "Restaurant",
      path: "/food-beverage/",
      anim: "fade-up",
    },
    {
      icon: onDemandIcon,
      alt: "On-demand transactional SMS service",
      title: "Government",
      path: "/government/",
      anim: "fade-up",
    },
    {
      icon: groceryIcon,
      alt: "Supermarket bulk SMS service provider",
      title: "Grocery",
      path: "/food-beverage/",
      anim: "fade-left",
    },
  ];

  return (
    <section className="py-5 bg2">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center aos">
          <div className="col-lg-8 text-center" data-aos="zoom-in">
            <h2 className="mb-3 head1">Industries We Serve</h2>
            <p className="para-color1">
              Successfully delivered OTP, Billing, Offers, Alerts, Wishes to
              Target Audiences through our Bulk SMS Service.
            </p>
          </div>
        </div>

        {/* Industry Items */}
        <div className="row mt-4 aos">
          {industryData.map((industry, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
              data-aos={industry.anim}
              key={index}
            >
              <Link to={industry.path} className="text-decoration-none">
                <div
                  className="text-center shadow-sm p-4 industry-card d-flex"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <img
                    src={industry.icon}
                    alt={industry.alt}
                    className=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h6
                    className="mb-0 place-center ms-3 text-dark"
                    
                  >
                    {industry.title}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
