"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import bootstrap CSS
import SSRProvider from "react-bootstrap/SSRProvider";
import { Navbar } from "react-bootstrap";
import Image from "next/image";

// import "./public/assets/css/animate.css";
// import "./public/assets/css/bootsnav.css";
// import "./public/assets/css/bootstrap.min.css";
// import '../public/assets/css/elegant-icons.css'
// import '../public/assets/css/font-awesome.min.css'
// import "./public/assets/css/magnific-popup.css";
// import '../public/assets/css/owl.carousel.min.css'
// import "./public/assets/css/owl.theme.default.min.css";
// import '../public/assets/css/plugins.min.css'
// import "./public/assets/css/responsive.css";
// import "./public/assets/css/themify-icons.css";

import slideUpPic from '../public/21.png'
import slideInPic from "../public/21-sub.png";
import backgroundImage from "../public/2440x1578.png";
import bg2 from '../public/7.png'

export default function Hero() {
  return (
    <div className="banner-area auto-height text-light shadow theme-hard bg-cover app-banner">
      <Image
        src={backgroundImage}
        alt="Background Image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        
      />
      <Image 
        src= {bg2}
        alt = 'Background Image 2'
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}

      />
      <div className="item">
        <div className="box-table">
          <div className="box-cell">
           
            {/* End Shape */}
            <div className="container">
              <div className="banner-items">
                <div className="row align-center">
                  <div className="col-lg-6">
                    <div className="content"> 
                      <h2 className="wow fadeInDown">
                        Get connect to other. <br />
                        Just ask aveit
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="400ms">
                        Belonging in september no am immediate newspaper.
                        september she conveying did eat may extensive.
                      </p>
                      <div
                        className="rating wow fadeInRight"
                        data-wow-delay="600ms"
                      >
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <span>(based on 20M task reviews)</span>
                      </div>
                      <div
                        className="forms wow fadeInLeft"
                        data-wow-delay="800ms"
                      >
                        <form action="#">
                          <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="form-control"
                            name="email"
                          />
                          <button type="submit">Take a free Trial</button>
                        </form>
                        <p>
                          *We will give a trial download link to your mail
                          address
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 thumb">
                    <div className="thumb-box">
                      <Image
                        className="wow slideInUp"
                        data-wow-delay="1100ms"
                        src={slideUpPic}
                        alt="Thumb"
                      />
                      <div className="sub">
                        <Image
                          className="wow fadeInDown"
                          data-wow-delay="2200ms"
                          src={slideInPic}
                          alt="Thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
