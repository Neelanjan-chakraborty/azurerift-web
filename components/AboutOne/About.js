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
                <span>About Azure Rift</span>
                <h2>
                  A Multi-Domain Consultancy Firm Providing Innovative Solutions
                </h2>
                <p>
                  We are an IT consultancy and computer facilities management firm first—not just a development shop. We provide full-lifecycle technical assistance, from strategic planning and systems analysis to the design, implementation, and maintenance of robust IT infrastructures. We architect bespoke software, integrate complex systems and databases, and manage scalable cloud computing environments. Our expertise spans enterprise mobile applications, backend web systems, artificial intelligence, data analytics, and cybersecurity solutions. We are objective technology partners focused on engineering excellence, network integrity, and delivering future-proof solutions that meet specific business objectives.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Expert Software Development Services
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Cutting-Edge AI & ML Solutions
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced Digital Marketing Strategies
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      {/* <li>
                        <i className="flaticon-checked"></i>
                        High-Quality Animation & VFX Services
                      </li> */}
                      {/* <li>
                        <i className="flaticon-checked"></i>
                        Robotics & Drone Technologies
                      </li> */}
                      {/* <li>
                        <i className="flaticon-checked"></i>
                        Robust Cybersecurity & Blockchain Solutions
                      </li> */}
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
