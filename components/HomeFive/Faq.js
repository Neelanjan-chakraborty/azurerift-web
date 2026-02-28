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
                        What technologies does Azurerift specialize in?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        We work across modern technology stacks including mobile development (iOS/Android),
                        AI and machine learning, cloud platforms (AWS, Azure, Google Cloud)
                        and full-stack web development. Our multi-domain expertise allows
                        us to deliver comprehensive digital solutions.
                      </p>
                      <ul>
                        <li>Mobile & Application Development: We build custom enterprise-grade applications for iOS and Android, focusing on complex business logic, data synchronization, and secure backend integration.</li>
                        <li>Cloud Platforms (AWS, Azure, GCP): We provide comprehensive cloud computing services, including architecture design, server management, data storage, and infrastructure optimization.</li>
                        <li>Full-Stack Development: We focus on backend-heavy application development, database architecture, API creation, and systems integration to power complex digital platforms.</li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does Azurerift approach project development?
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
                        Can Azurerift help with MVP development for startups?
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
                        What makes Azurerift different from other development companies?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We are an IT consultancy and computer facilities management firm first—not just a development shop. We provide full-lifecycle technical assistance, from strategic planning and systems analysis to the design, implementation, and maintenance of robust IT infrastructures. We architect bespoke software, integrate complex systems and databases, and manage scalable cloud computing environments. Our expertise spans enterprise mobile applications, backend web systems, artificial intelligence, data analytics, and cybersecurity solutions. We are objective technology partners focused on engineering excellence, network integrity, and delivering future-proof solutions that meet specific business objectives.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you provide ongoing support after project delivery?
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
