import React from "react";
import Link from "next/link";

const ServiceSidebar = () => {
  return (
    <>
      <div className="service-sidebar-area">
        <div className="service-list">
          <h3 className="service-details-title">Our Services</h3>
          <ul>
            <li>
              <Link href="/services/mobile-app-development">
                Mobile App Development
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/web-application-development">
                Web Application Development
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/ai-powered-solutions">
                AI-Powered Solutions
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/cloud-integration-backend">
                Cloud Integration & Backend
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design-strategy">
                UI/UX Design & Strategy
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/game-development">
                Game Development
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/xr-ar-vr-experiences">
                XR/AR/VR Experiences
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/enterprise-software">
                Enterprise Software
                <i className="bx bx-check"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="service-list">
          <h3 className="service-details-title">Contact AzureRift</h3>
          <ul>
            <li>
              +91 8617352997
              <i className="bx bx-phone-call bx-rotate-270"></i>
            </li>
            <li>
              info@azurerift.com
              <i className="bx bx-envelope"></i>
            </li>
            <li>
              Kolkata, West Bengal, India
              <i className="bx bx-location-plus"></i>
            </li>
            <li>
              9:00 AM – 8:00 PM IST
              <i className="bx bx-time"></i>
            </li>
          </ul>
        </div>

        <div className="service-list">
          <h3 className="service-details-title">Get Started</h3>
          <ul>
            <li>
              <Link href="/contact">
                Free Consultation
                <i className="bx bx-conversation"></i>
              </Link>
            </li>
            <li>
              <Link href="/about">
                About AzureRift
                <i className="bx bx-info-circle"></i>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                View Portfolio
                <i className="bx bx-folder-open"></i>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                Service Pricing
                <i className="bx bx-dollar-circle"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
