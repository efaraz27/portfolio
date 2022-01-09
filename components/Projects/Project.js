import { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Project = (props) => {
  const dark = useSelector((state) => state.dark);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project-container">
        {/* <Image
          src={`${props.images}/main.png`}
          alt={props.name}
          width={'551px'}
          height={'338px'}
          quality={100}
        /> */}
        <div className="image-container">
          <Image
            src={`${props.images}/main.png`}
            alt={props.name}
            width={"1350px"}
            height={"900px"}
            quality={100}
          />
        </div>
        <div className="content">
          <div className="heading">{props.name}</div>
          <div className="desc">{props.desc}</div>
          <div className="tags">
            <span className={dark ? styles.tag : styles.tagLight}>
              {props.tags}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-container {
          max-width: 551px;
        }
        .heading {
          font-size: 24px;
          margin-top: 31px;
        }
        .desc {
          font-size: 16px;
          margin: 12px 0px;
        }
        .tags {
          font-size: 14px;
        }
        .image-container {
          border-radius: 4px;
          overflow: hidden;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media only screen and (max-width: 550px) {
          .desc {
            font-size: 12px;
          }
          .heading {
          font-size: 22px;
        }
        }
      `}</style>
    </>
  );
};

export default Project;
