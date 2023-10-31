import techDetails from "@/lib/techDetails";

export default function getTechDetailsForProject(projectTechnologies) {
  const result = [];
  projectTechnologies.forEach((tech) => {
    if (techDetails[tech]) {
      result.push(techDetails[tech]);
    }
  });
  return result;
}
