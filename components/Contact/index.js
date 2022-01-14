import { useState, useEffect } from "react";
import ContactBtn from "./ContactBtn";
import ContactBtnLight from "./ContactBtnLight";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const dark = useSelector((state) => state.dark);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="contact-section">
        <div className="heading">Contact</div>
        <div className="btns">
          {dark ? (
            <>
              <ContactBtn
                icon="/mail-fill.svg"
                txt="Send an email"
                alt="email-icon"
              />
              <ContactBtn
                icon="/linkedin-fill.svg"
                txt="LinkedIn"
                alt="linkedin-icon"
              />
              <ContactBtn
                icon="/github-fill.svg"
                txt="Github"
                alt="github-icon"
              />
            </>
          ) : (
            <>
              <ContactBtnLight
                icon="/light/mail-fill.svg"
                txt="Send an email"
                alt="email-icon"
              />
              <ContactBtnLight
                icon="/light/linkedin-fill.svg"
                txt="LinkedIn"
                alt="linkedin-icon"
              />
              <ContactBtnLight
                icon="/light/github-fill.svg"
                txt="Github"
                alt="github-icon"
              />
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          margin-top: 103px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .heading {
          text-transform: uppercase;
          margin-bottom: 27px;
        }
        .btns {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default Contact;
