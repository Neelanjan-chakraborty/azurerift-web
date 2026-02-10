import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer4.png";

const Manufacturing = () => {
  return (
    <>
      <div className="row  align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Enterprise Software</h3>
            <p>
              Custom web applications and enterprise systems built with modern technology stacks. 
              Scalable architecture, robust security, and seamless integration with existing systems.
            </p>
            <p>
              From MVP development for startups to complex enterprise platforms, we deliver solutions 
              that are reliable, efficient, and designed for long-term growth. UI/UX strategy, product 
              design, and ongoing technical consulting included.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Custom Platforms
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    MVP Development
                  </li>\n                  <li>
                    <i className="flaticon-checked"></i>
                    UI/UX Design
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    System Integration
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Security First
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Technical Support
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
            <Image src={offerImg} alt="Image" width={526} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufacturing;
