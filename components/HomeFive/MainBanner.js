import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner = () => {
  return (
    <>
      <section className="slider-area">
        <Swiper
          autoHeight={true}
          navigation={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/home-five/slider1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                      <span>Engineering Innovation</span>
                      <h1>Building Intelligent, Scalable & Future-Ready Digital Solutions</h1>
                      <p>
                        From mobile apps to immersive XR experiences, we help businesses innovate and accelerate growth with cutting-edge technology.
                      </p>

                      <div className="slider-btn">
                        <Link href="/services" className="default-btn active">
                          Our Services
                        </Link>

                        <Link href="/contact" className="default-btn white">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/home-five/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden two">
                      <span>Technology Excellence</span>
                      <h1>AI-Driven Platforms & Cloud Engineering Solutions</h1>
                      <p>
                        Empowering organizations with advanced digital capabilities through AI automation, cloud integration, and enterprise software.
                      </p>

                      <div className="slider-btn">
                        <Link href="/services" className="default-btn active">
                          Our Services
                        </Link>

                        <Link href="/contact" className="default-btn white">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/home-five/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <span>Immersive Technologies</span>
                      <h1>Creating Tomorrow's Digital & Immersive Worlds Today</h1>
                      {/* <p>
                        Specializing in game development, XR/AR/VR experiences, and interactive simulations that transform how people engage with technology.
                      </p> */}

                      <div className="slider-btn">
                        <Link href="/services" className="default-btn active">
                          Our Services
                        </Link>

                        <Link href="/contact" className="default-btn white">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MainBanner;
