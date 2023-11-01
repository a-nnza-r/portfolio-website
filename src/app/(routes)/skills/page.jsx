import { Box } from "@mui/material";
import SkillCard from "@/components/SkillCard.jsx";
import skillsData from "@/lib/skills.js";

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
          backgroundImage: "url(/skillsBackGrd.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.1, // Adjust this value to control the transparency level
          zIndex: -1,
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        style={{
          margin: "3vh 1vw",
          width: "80%",
        }}
      >
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            image={skill.image}
            skillName={skill.skillName}
            projects={skill.projects}
            certification={skill.certification}
            elaboration={skill.elaboration}
          />
        ))}
      </Box>
    </div>
  );
}
