import React, { useEffect } from "react";
import "./index.css";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaCircleChevronRight } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src="https://videos.pexels.com/video-files/3015511/3015511-sd_640_360_24fps.mp4"
          loop
          autoPlay
          muted
          type="video/mp4"
        ></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter Email Adress"></input>
            <button className="btn flex" type="submit">
              Send
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              To my mind, the greatest reward and luxury of travel is to be able
              to experience everyday things as if for the first time, to be in a
              position in which almost nothing is so familiar it is taken for
              granted
            </div>
            <div className="footerLinks grid">
              <div
                data-aos="fade-up"
                data-aos-duration="4500"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Turism
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Payment
                </li>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="4500"
                className="linkGroup"
              >
                <span className="groupTitle">PARTNER</span>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Rent cars
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Hootels
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Trip advisors
                </li>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="5500"
                className="linkGroup"
              >
                <span className="groupTitle">LAST MINUTE</span>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Beaches
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Mountains
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Snow areas
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  Holy places
                </li>
                <li className="footerList flex">
                  <FaCircleChevronRight className="icon" />
                  City
                </li>
              </div>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED- ISRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
