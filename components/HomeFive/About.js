import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../public/images/about-img-three.png";

const About = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="Image" width={375} height={440} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About AzureRift Technologies</span>
                <h2>
                  Engineering Excellence Meets Creative Problem-Solving
                </h2>
                <p>
                  AzureRift Technologies is a multi-domain technology company building intelligent, scalable, and future-ready digital solutions. We specialize in mobile and web applications, AI-driven platforms, cloud engineering, immersive technologies, and interactive experiences designed to help businesses innovate and accelerate growth.
                </p>
                <p>
                  Our team blends engineering excellence with creative problem-solving. We partner with clients to design and deliver robust, intuitive, and high-performance solutions that address real-world challenges.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Mobile & Web Apps
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        AI-Powered Solutions
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Cloud Integration
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Game Development
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        XR/AR/VR Experiences
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Enterprise Software
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
