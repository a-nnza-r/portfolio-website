import ProjectCard from "@/components/ProjectCard.jsx";
import projectDetails from "@/lib/projectDetails";

export default function Page() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/backgroundimg2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.15, // Adjust this value to control the transparency level
          zIndex: -1,
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", // Updated this line
          margin: "5vh 10vw 5vh 10vw",
        }}
      >
        {Object.values(projectDetails).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
