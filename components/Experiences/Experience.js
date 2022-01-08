import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";
const Experience = (props) => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div className="exp">
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
      `}</style>
    </>
  );
};

export default Experience;
