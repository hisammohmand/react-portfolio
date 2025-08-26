import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>

                {/* Professional Description */}
                <div className="professional-description mb-4">
                  <p>
                    I am a Data Analyst with experience in data analysis, security operations, and project management.
                    I hold a Master's degree in Data Analytics and Information Management Systems from Arden University, Germany,
                    and a Bachelor's degree in Computer Science from Savitribai Phule Pune University, India.
                  </p>
                </div>

                <div className="intro_btn-action pb-5">
                  <div className="d-flex justify-content-center gap-4">
                    <div onClick={() => scrollToSection('portfolio')} className="text_2" style={{ cursor: 'pointer' }}>
                      <div id="button_p" className="ac_btn btn home-action-btn">
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </div>
                    <div onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
                      <div id="button_h" className="ac_btn btn home-action-btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
