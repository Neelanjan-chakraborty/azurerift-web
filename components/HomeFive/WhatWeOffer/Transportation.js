import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer2.png";

const Transportation = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>AI & Cloud Solutions</h3>
            <p>
              AI-powered platforms, machine learning models, and intelligent automation that optimize 
              business processes, enhance decision-making, and unlock new capabilities.
            </p>
            <p>
              Cloud integration with AWS, Azure, and GCP, scalable backend architecture, and robust 
              API development for seamless data flow and secure infrastructure.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Machine Learning
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    AI Automation
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Data Analytics
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Cloud Platforms
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Backend Engineering
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    API Development
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={offerImg} alt="Image" width={644} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;
