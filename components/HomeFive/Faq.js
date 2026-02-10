import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../public/images/faq-img.png";

const Faq = () => {
  return (
    <>
      <div className="faq-area pt-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ's</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What Technologies Does AzureRift Specialize In?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        We work across modern technology stacks including mobile development (iOS/Android), 
                        AI and machine learning, cloud platforms (AWS, Azure, GCP), game engines (Unity, Unreal), 
                        XR/AR/VR technologies, and full-stack web development. Our multi-domain expertise allows 
                        us to deliver comprehensive digital solutions.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How Does AzureRift Approach Project Development?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Our development approach emphasizes quality, transparency, and continuous innovation. 
                        We start by understanding your goals, then design and deliver solutions with precision 
                        and scalability. From concept to deployment, we ensure clear communication, regular updates, 
                        and thorough testing for reliable, high-performance results.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can AzureRift Help With MVP Development for Startups?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely! We specialize in MVP development for startups, helping you validate ideas quickly 
                        and cost-effectively. Our team builds scalable prototypes that can evolve into full products, 
                        allowing you to test market fit and iterate based on real user feedback while maintaining 
                        technical excellence.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What Makes AzureRift Different From Other Development Companies?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We blend engineering excellence with creative problem-solving across multiple technology 
                        domains. Unlike single-focus agencies, we offer expertise in mobile, web, AI, cloud, games, 
                        and immersive XR/AR/VR - all under one roof. Our commitment to quality, transparency, and 
                        delivering future-proof solutions sets us apart.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do You Provide Ongoing Support After Project Delivery?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes! We offer comprehensive ongoing support and technical consulting to ensure your solutions 
                        remain optimized, secure, and up-to-date. Whether you need maintenance, feature enhancements, 
                        or technical guidance, our team is here to support your long-term success.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={360} height={465} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
