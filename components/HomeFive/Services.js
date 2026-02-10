import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Mobile App Development",
    shortText:
      "Native and hybrid mobile applications for iOS and Android platforms, delivering seamless user experiences and robust functionality.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "XR, AR & VR Experiences",
    shortText:
      "Immersive extended reality, augmented reality, and virtual reality solutions that transform how users interact with digital content.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Cloud Integration & Backend",
    shortText:
      "Scalable cloud infrastructure and backend engineering solutions with seamless API integration and data management.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "AI-Powered Solutions",
    shortText:
      "Intelligent automation, machine learning models, and AI-driven platforms that optimize business processes and decision-making.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Game Development",
    shortText:
      "Unity and Unreal Engine game development for mobile, PC, and console platforms with engaging gameplay and stunning visuals.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Enterprise Software",
    shortText:
      "Custom web applications and enterprise systems built with modern technology stacks for scalability and performance.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Specialties</span>
            <h2>Comprehensive Technology Solutions for Modern Businesses</h2>
            <p>
              From concept to deployment, we deliver robust, intuitive, and high-performance solutions 
              built with precision, scalability, and long-term value. Our expertise spans across multiple 
              technology domains to meet diverse business needs.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-offer">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default Services;
