import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner-area main-banner-area-four"
        onMouseMove={handleMouseMove}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1 className="text-4xl font-bold mb-6">
                  Unlock Business Insights with AI-Powered Data Solutions
                </h1>

                <p className="text-lg mb-8">
                  Drive operational efficiency and uncover valuable insights by transforming unstructured data into actionable intelligence. Empower your team with cutting-edge AI technology.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/about" className="default-btn">
                    Learn More
                  </Link>

                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 w-full h-full" >
              {/* Replaced 3D canvas with a GIF */}
              <img
                src="/images/robot.webp"
                alt="Robot Animation"
                className="w-full h-auto pr-20"

              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
