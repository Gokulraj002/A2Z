import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO - Real Estate Agency",
    feedback:
      "The WhatsApp Business API has transformed how we communicate with our clients. The instant notifications and real-time updates have streamlined our property deals, making us more efficient and reliable.",
  },
  {
    name: "Priya Nair",
    role: "Manager - Food & Beverage",
    feedback:
      "Bulk SMS and RCS messaging have helped us boost customer engagement by 40%! Sharing offers and taking orders has never been this seamless. Highly recommended for businesses looking for impactful communication tools.",
  },
  {
    name: "Anil Kapoor",
    role: "CEO - Healthcare Solutions",
    feedback:
      "The OTP services provided by this platform are fast and secure. It has significantly improved the security of our patient data and payment processes. Great service with top-notch reliability!",
  },
  {
    name: "Meera Verma",
    role: "Director - Education Sector",
    feedback:
      "The voice call solutions are a game-changer. Announcing school updates and sending reminders to parents has become extremely easy. It's an essential tool for educational institutions.",
  },
  {
    name: "Karan Singh",
    role: "Operations Head - E-commerce",
    feedback:
      "Integrating their RCS messaging has enhanced our customer experience. Sending media-rich promotions and instant delivery updates has been a breeze, resulting in better customer retention.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 bg2">
      <div className="container py-3">
        <h2 className="text-center fw-bold mb-4">What Our Clients Say About Us</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 aos">
              <div
                className="testimonial-card position-relative p-4 shadow-sm rounded bg-white para-color"
                data-aos="zoom-in"
              >
                {/* Quote Icon */}
                <div className="quote-icon position-absolute text-primary">
                  <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
                </div>
                {/* Testimonial Content */}
                <div className="mb-3">
                  <h6 className="fw-bold">{testimonial.name}</h6>
                  <p className="text-muted mb-0">{testimonial.role}</p>
                </div>
                <p className="text-muted mb-0 fst-italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
