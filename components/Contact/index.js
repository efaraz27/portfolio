import ContactBtn from "./ContactBtn";
import ContactBtnLight from "./ContactBtnLight";
import { useSelector } from "react-redux";
const Contact = () => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div className="contact-section">
        <div className="heading">Contact</div>
        {dark ? (
          <div className="btns">
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
          </div>
        ) : (
          <div className="btns">
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
          </div>
        )}
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
