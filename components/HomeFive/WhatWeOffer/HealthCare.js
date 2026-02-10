import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer3.png";

const HealthCare = () => {
  return (
    <>
      <div className="row  align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={620} height={445} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Games & Immersive XR</h3>
            <p>
              Unity and Unreal Engine game development for mobile, PC, and console platforms. 
              Engaging gameplay mechanics, stunning visuals, and optimized performance.
            </p>
            <p>
              Extended Reality (XR), Augmented Reality (AR), and Virtual Reality (VR) experiences 
              that transform user engagement. Immersive simulations, training applications, and 
              interactive media that push boundaries.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Unity Development
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Unreal Engine
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Mobile Games
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    VR/AR/XR
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Simulations
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Interactive Media
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

export default HealthCare;
