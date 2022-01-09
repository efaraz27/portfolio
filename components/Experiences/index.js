import Experience from "./Experience";
import experiencesList from "../../constants/experiencesList";

const Experiences = () => {
  return (
    <>
      <div className="exp-container">
        <div>EXPERIENCE</div>
        <div>
          {experiencesList.map((exp, index) => {
            return (
              <Experience
                key={index}
                positionName={exp.positionName}
                date={exp.date}
                location={exp.location}
                bullets={exp.bullets}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .exp-container {
          margin-top: 100px;
          display: flex;
          animation: slide-in-bottom-top 1.5s;
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
          .exp-container {
            flex-wrap: wrap;
          }
        }
        @media only screen and (max-width: 800px) {
          .exp-container {
            margin-top: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default Experiences;
