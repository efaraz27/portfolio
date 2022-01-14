import Project from "./Project";
import projectsList from "../../constants/projectsList";
import "animate.css/animate.min.css";

const Projects = () => {
  return (
    <>
      <div className="projects-section" id="projects">
        <div className="heading">Featured projects</div>
        <div className="projects-container">
          {projectsList.map((project, index) => {
            return (
              <Project
                name={project.name}
                images={project.images}
                desc={project.desc}
                tags={project.tags}
                key={index}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          margin-top: 103px;
          margin-bottom: 103px;
        }
        .heading {
          text-transform: uppercase;
        }
        .projects-container {
          margin-top: 51px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }
      `}</style>
    </>
  );
};

export default Projects;
