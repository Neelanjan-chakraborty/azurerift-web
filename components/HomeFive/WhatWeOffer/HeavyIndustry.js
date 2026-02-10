import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer1.png";

const HeavyIndustry = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={370} height={390} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Mobile & Web Applications</h3>
            <p>
              Native iOS and Android apps, hybrid mobile solutions, and modern web applications 
              built with cutting-edge frameworks for seamless user experiences.
            </p>
            <p>
              From consumer apps to enterprise platforms, we deliver scalable, high-performance 
              solutions with intuitive UI/UX design and robust backend infrastructure.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked" />
                    Native iOS/Android
                  </li>
                  <li>
                    <i className="flaticon-checked" />
                    Hybrid Apps
                  </li>
                  <li>
                    <i className="flaticon-checked" />
                    Progressive Web Apps
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked" />
                    Responsive Design
                  </li>
                  <li>
                    <i className="flaticon-checked" />
                    API Integration
                  </li>
                  <li>
                    <i className="flaticon-checked" />
                    Scalable Architecture
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
      </div>
    </>
  );
};

export default HeavyIndustry;
