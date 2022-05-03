import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  const dark = useSelector((state) => state.dark);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="skills-container">
        <div>SKILLS</div>
        <div
          style={{
            display: "grid",
            flexWrap: "wrap",
            marginTop: "51px",
            gridTemplateRows: "repeat(3, 1fr)",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "50px",
          }}
        >
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/react.svg`}
              alt={`react`}
              width={"150px"}
              height={"150px"}
              quality={100}
            />
          </div>
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/nodejs.svg`}
              alt={`nodejs`}
              width={"250px"}
              height={"150px"}
              quality={100}
            />
          </div>
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/mongodb.svg`}
              alt={`mongodb`}
              width={"250px"}
              height={"150px"}
              quality={100}
            />
          </div>
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/docker.svg`}
              alt={`docker`}
              width={"150px"}
              height={"150px"}
              quality={100}
            />
          </div>
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/kubernetes.svg`}
              alt={`kubernetes`}
              width={"250px"}
              height={"150px"}
              quality={100}
            />
          </div>
          <div data-aos="fade-up" className="skill-img">
            <Image
              src={`/skills/webflow.svg`}
              alt={`webflow`}
              width={"250px"}
              height={"150px"}
              quality={100}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .skills-container {
          margin-top: 100px;
          animation: slide-in-bottom-top 1.5s;
        }

        .skill-img {
          filter: contrast(${dark ? "200%" : "100%"})
            grayscale(${dark ? "100%" : "0%"})
            brightness(${dark ? "200%" : "100%"});
        }

        @keyframes slide-in-bottom-top {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 100%;
          }
        }
        @media only screen and (max-width: 900px) {
          .skills-container {
            flex-wrap: wrap;
          }
        }
        @media only screen and (max-width: 800px) {
          .skills-container {
            margin-top: 60px;
          }
        }
      `}</style>
    </>
  );
}

export default Skills;
