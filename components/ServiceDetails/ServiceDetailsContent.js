import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";
import Image from "next/image";

import defaultServiceImg from "../../public/images/services-details/services-details.jpg";
import serviceProcessImg from "../../public/images/services-details/services-details2.png";

const ServiceDetailsContent = ({ service }) => {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src={service.image || defaultServiceImg}
                    alt={service.title}
                    width={900}
                    height={500}
                  />
                </div>

                <h3>{service.title}</h3>
                <h4 className="service-subtitle">{service.subtitle}</h4>
                <p className="service-description">{service.description}</p>

                <div className="service-features-section">
                  <h4>Key Features & Capabilities</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="service-feature-list">
                        {service.features?.slice(0, Math.ceil(service.features.length / 2)).map((feature, index) => (
                          <li key={index}>
                            <i className="bx bx-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="service-feature-list">
                        {service.features?.slice(Math.ceil(service.features.length / 2)).map((feature, index) => (
                          <li key={index}>
                            <i className="bx bx-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="technologies-section">
                  <h4>Technologies & Tools</h4>
                  <div className="tech-tags">
                    {service.technologies?.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={serviceProcessImg}
                          alt="Service Process"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="service-process">
                        <h4>Our Development Process</h4>
                        <p>{service.process}</p>
                        <div className="process-benefits">
                          <ul>
                            <li>
                              <i className="bx bx-check"></i>
                              Agile development methodology
                            </li>
                            <li>
                              <i className="bx bx-check"></i>
                              Regular client communication
                            </li>
                            <li>
                              <i className="bx bx-check"></i>
                              Quality assurance & testing
                            </li>
                            <li>
                              <i className="bx bx-check"></i>
                              Post-launch support & maintenance
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AskQuestionForm />
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsContent;
