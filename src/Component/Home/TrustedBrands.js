import React from "react";
import Image1 from "../image/motherhood.png";
import Image2 from "../image/Groavy.png";
import Image3 from "../image/ping4sms-client5.webp";
import Image4 from "../image/ping4sms-client1.webp";
import Image5 from "../image/ping4sms-client8.webp";
import Image6 from "../image/saishishirtours.png";
import Image7 from "../image/ping4sms-client3.webp";
import Image8 from "../image/ping4sms-client4.webp";
import Image9 from "../image/ping4sms-client9.webp";
import Image10 from "../image/ping4sms-client2.webp";

const TrustedBrands = () => {
  return (
    <div className="py-5 ">
      <div className="container py-4">
      <h3 className="text-center fw-bold mb-3">Trusted by Top Brands</h3>

        <div className="row row-cols-4 row-cols-md-4 row-cols-lg-5 g-4 text-center">
          <div className="col" data-aos='zoom-in-right'>
            <img src={Image1} alt="Brand 1" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-down'>
            <img src={Image2} alt="Brand 2" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-down'>
            <img src={Image3} alt="Brand 3" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-down'>
            <img src={Image4} alt="Brand 4" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-left'>
            <img src={Image5} alt="Brand 5" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-right'>
            <img src={Image6} alt="Brand 6" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-up'>
            <img src={Image7} alt="Brand 7" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-up'>
            <img src={Image8} alt="Brand 8" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col" data-aos='zoom-in-up'>
            <img src={Image9} alt="Brand 9" className="img-fluid logo-img mx-auto" />
          </div>
          <div className="col"data-aos='zoom-in-left'>
            <img src={Image10} alt="Brand 9" className="img-fluid logo-img mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
