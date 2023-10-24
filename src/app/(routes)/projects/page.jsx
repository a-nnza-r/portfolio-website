import ProjectCard from "@/components/ProjectCard.jsx";
import projectDetails from "@/lib/projectDetails";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Object.values(projectDetails).map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          projectTitleImg={project.projectTitleImg}
          projectTitleImgAlt={project.projectTitleImgAlt}
          title={project.title}
          projectDescription={project.projectDescription}
          projectTechnologies={project.projectTechnologies}
        />
      ))}
    </div>
  );
}
