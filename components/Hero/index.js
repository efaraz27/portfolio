import Image from "next/image";
import { useSelector } from "react-redux";
import useDeviceSize from "../../hooks/useDeviceSize";
import { Link } from "react-scroll";
const Hero = () => {
  const dark = useSelector((state) => state.dark);
  const [width, height] = useDeviceSize();
  return (
    <>
      <div className="hero-section">
        <div>Hey, I&apos;m</div>
        {width > 400 ? (
          <div className="name">Ehtesham Faraz</div>
        ) : (
          <div className="name">
            Ehtesham
            <br />
            Faraz
          </div>
        )}
        <div className="desc">
          I&apos;m a software engineer based in Kolkata, India and also a
          computer science student. I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between. I have been working on Full Stack Web Applications for more
          than a year now while studying at the university and I&apos;ve manage
          to gain a decent amount of experience and valuable knowledge from all
          different kinds of fields throughout my projects/work.
        </div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          <div className="say-hi noselect">
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
        </Link>
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
          animation: typing 2s steps(15), blink 0.5s;
          white-space: nowrap;
          overflow: hidden;
          width: 15ch;
        }
        .say-hi {
          display: flex;
          align-items: "center";
          font-size: 24px;
          margin: 40px 0px;
          cursor: pointer;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        .arrow {
          margin-left: 12px;
          transition: 0.15s ease-in-out;
        }

        .say-hi:hover > .arrow {
          transform: translateX(20%);
        }
        .desc {
          animation: slide-in-top-bottom 1s;
        }

        @keyframes typing {
          from {
            width: 0;
            border-right: 5px solid;
          }
          99% {
            border-right: 5px solid;
          }
          to {
            width: 15ch;
            border-color: transparent;
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        @keyframes slide-in-top-bottom {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }

          to {
            transform: translateY(0%);
            opacity: 100%;
          }
        }

        @keyframes fade {
          from {
            opacity: 0%;
          }
          to {
            opacity: 100%;
          }
        }
        @media only screen and (max-width: 800px) {
          .hero-section {
            margin: 30px 0px;
          }
          .name {
            font-size: 60px;
          }
        }
        @media only screen and (max-width: 550px) {
          .name {
            line-height: normal;
          }
        }
        @media only screen and (max-width: 475px) {
          .hero-section {
            margin: 0px;
          }
          .name {
            font-size: 50px;
            margin: 0px 0px;
          }
          .say-hi {
            margin-bottom: 0px;
            margin-top: 20px;
          }
        }
        @media only screen and (max-width: 400px) {
          .name {
            opacity: 0;
            animation: fade 1.5s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
          }
          .hero-section {
            margin: 0px;
          }
          .say-hi {
            margin-bottom: 0px;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
