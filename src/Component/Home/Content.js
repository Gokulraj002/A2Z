import React from "react";
import { Link } from "react-router-dom"; // For internal navigation
import content from "../image/content.webp"; // Replace with your image

const Content = () => {
  const servicesData = [
    {
      title: "WhatsApp Service",
      description: "Communicate with customers through rich and interactive WhatsApp messages. Send updates, reminders, and promotions seamlessly.",
      link: "/whatsapp-api",
      icon: "bi bi-whatsapp",
    },
    {
      title: "RCS Service",
      description: "Create engaging experiences with rich media messages, including images, videos, and interactive buttons for better engagement.",
      link: "/rcs-sms",
      icon: "bi bi-layout-text-sidebar-reverse",
    },
    {
      title: "Bulk SMS",
      description: "Deliver targeted promotional messages instantly with offers and campaigns tailored to customer needs.",
      link: "/bulk-sms",
      icon: "bi bi-megaphone-fill",
    },
    {
      title: "Bulk Voice Call",
      description: "Use voice call services to send updates and reminders. Add a personal touch to communication with voice interactions.",
      link: "/voice-call",
      icon: "bi bi-telephone-fill",
    },
  ];

  return (
    <div className="bg2">
      <div className="container py-5 para-color">
        <div className="row align-items-center gy-4 text-muted aos">
          {/* Left Section */}
          <div className="col-md-4 px-md-3">
            <ul className="list-unstyled">
              {servicesData.slice(0, 2).map((service, index) => (
                <li key={index} className="mb-4 d-flex align-items-start">
                  <i className={`${service.icon} display-6 iconcolor me-3`}></i>
                  <div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link to={service.link} className="fw-bold">
                      Explore &rarr;
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Section */}
          <div className="col-md-4 text-center px-md-3">
            <img
              src={content}
              alt="Service Overview"
              className="w-75 rounded"
              data-aos="zoom-in-up"
            />
          </div>

          {/* Right Section */}
          <div className="col-md-4 px-md-3">
            <ul className="list-unstyled">
              {servicesData.slice(2).map((service, index) => (
                <li key={index} className="mb-4 d-flex align-items-start">
                  <i className={`${service.icon} display-6 iconcolor me-3`}></i>
                  <div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link to={service.link} className="fw-bold">
                      Explore &rarr;
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
