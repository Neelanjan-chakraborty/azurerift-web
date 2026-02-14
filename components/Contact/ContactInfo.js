import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>
                  <a href="mailto:support@azurerift.in">
                    support@azurerift.in
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>
                  Tel. + <a href="tel:+918455678901">+91 9083080448</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Hyderabad</h3>
                <p>456, Hitec City, Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>Live Chat</h3>
                <p>Live chat all the time with our company 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
