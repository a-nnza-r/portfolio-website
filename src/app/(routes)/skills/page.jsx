import { Container, Box } from "@mui/material";
import SkillCard from "@/components/SkillCard.jsx";
import skillsData from "@/lib/skills.js";

export default function Page() {
  return (
    <Container>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
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
    </Container>
  );
}
