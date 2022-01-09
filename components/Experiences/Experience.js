import styles from "../../styles/Home.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = (props) => {
  const dark = useSelector((state) => state.dark);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="exp">
        <div className="position">
          <div className="position-name">{props.positionName}</div>
          <div className="date">{props.date}</div>
        </div>
        <div className="location">
          <span className={dark ? styles.tag : styles.tagLight}>
            {props.location}
          </span>
        </div>
        {/* <div className="bullet"></div> */}
        {props.bullets.map((bullet, index) => {
          return (
            <div className="bullet" key={index}>
              <div className="dash">-</div>
              <div>{bullet}</div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .exp {
          margin-left: 95px;
          display: flex;
          flex-direction: column;
          margin-bottom: 49px;
        }
        .position {
          display: flex;
          justify-content: space-between;
        }
        .position-name {
          font-size: 24px;
        }
        .date {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.75);
        }
        .location {
          margin-top: 12px;
        }
        .bullet {
          margin-top: 12px;
          display: flex;
        }
        .dash {
          margin-right: 4px;
        }
        @media only screen and (max-width: 900px) {
          .exp {
            margin-left: 0px;
            margin-top: 49px;
          }
        }
        @media only screen and (max-width: 650px) {
          .position {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Experience;
