import Image from "next/image";
import { useSelector } from "react-redux";
const Hero = () => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div className="hero-section">
        <div>Hey, I&apos;m</div>
        <div className="name">Ehtesham Faraz</div>
        <div>
          I&apos;m a software engineer based in Kolkata, India and also a
          computer science student. I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between. I have been freelancing for a year now while studying at the
          university and I&apos;ve manage to gain a decent amount of experience
          and valuable knowledge from all different kinds of fields throughout
          my projects/work.
        </div>
        <div className="say-hi">
          Say hi{" "}
          <span className="arrow">
            <Image
              src={dark ? "/Line.svg" : "/light/Line.svg"}
              width="33px"
              height="24px"
              alt="arrow"
            />
          </span>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          margin: 77px 0px;
        }
        .name {
          font-size: 96px;
          font-family: "DM Serif Display", serif;
          background: linear-gradient(
            89.81deg,
            #9845e8 -1.72%,
            #33d2ff 54.05%,
            #dd5789 99.78%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 109.92px;
          margin-top: 18px;
          margin-bottom: 24px;
        }
        .say-hi {
          display: flex;
          align-items: "center";
          font-size: 24px;
          margin: 40px 0px;
        }

        .arrow {
          margin-left: 12px;
        }
      `}</style>
    </>
  );
};

export default Hero;
