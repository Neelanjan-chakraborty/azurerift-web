import React from "react";
import Link from "next/link";

const ServicesStyleTwo = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Expertise</span>
            <h2>Comprehensive Technology Solutions</h2>
            <p>
              From mobile apps to immersive experiences, we deliver intelligent, scalable, 
              and future-ready digital solutions that drive innovation and accelerate growth.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-smartphone"></i>
                <h3>
                  <Link href="/services/mobile-app-development">
                    Mobile App Development
                  </Link>
                </h3>
                <p>
                  Native iOS and Android apps, hybrid solutions, and progressive web apps 
                  built with cutting-edge frameworks for seamless user experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-web-development"></i>
                <h3>
                  <Link href="/services/web-application-development">
                    Web Application Development
                  </Link>
                </h3>
                <p>
                  Modern web applications and enterprise platforms with responsive design, 
                  robust architecture, and seamless API integration.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>
                  <Link href="/services/ai-powered-solutions">
                    AI-Powered Solutions
                  </Link>
                </h3>
                <p>
                  Intelligent automation, machine learning models, and AI-driven platforms 
                  that optimize business processes and enhance decision-making.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-cloud-computing"></i>
                <h3>
                  <Link href="/services/cloud-integration-backend">
                    Cloud Integration & Backend
                  </Link>
                </h3>
                <p>
                  Scalable cloud infrastructure and backend engineering solutions with 
                  seamless API integration and robust data management.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-ui-ux"></i>
                <h3>
                  <Link href="/services/ui-ux-design-strategy">
                    UI/UX Design & Strategy
                  </Link>
                </h3>
                <p>
                  User-centered design and strategic UI/UX solutions that enhance user 
                  experiences and drive engagement with intuitive interfaces.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-game-development"></i>
                <h3>
                  <Link href="/services/game-development">
                    Game Development
                  </Link>
                </h3>
                <p>
                  Unity and Unreal Engine game development for mobile, PC, 
                  and console platforms with engaging gameplay and stunning visuals.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link href="/services/xr-ar-vr-experiences">
                    XR/AR/VR Experiences
                  </Link>
                </h3>
                <p>
                  Immersive extended reality, augmented reality, and virtual reality solutions 
                  that transform user engagement and create unforgettable experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-enterprise"></i>
                <h3>
                  <Link href="/services/enterprise-software">
                    Enterprise Software
                  </Link>
                </h3>
                <p>
                  Custom enterprise systems and business applications designed for 
                  scalability, security, and seamless integration with existing workflows.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-startup"></i>
                <h3>
                  <Link href="/services/mvp-development">
                    MVP Development
                  </Link>
                </h3>
                <p>
                  Rapid MVP development to validate startup ideas and concepts with 
                  market-ready prototypes and scalable foundation architecture.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-technical-support"></i>
                <h3>
                  <Link href="/services/technical-consulting-support">
                    Technical Consulting & Support
                  </Link>
                </h3>
                <p>
                  Ongoing technical consultation and maintenance support to ensure 
                  optimal performance and continuous innovation for your solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleTwo;
