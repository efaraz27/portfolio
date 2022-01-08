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
        }
      `}</style>
    </>
  );
};

export default Experiences;
