const awardDetails = {
  acnuic: {
    name: "acnuic",
    title: "Accenture University Innovation Challenge 2025",
    TitleImg: {
      src: "/Accenture-Awards-ceremony.jpeg",
      alt: "Image description",
    },
    sections: {
      achievement: {
        title: "Achievement",
        displayComponent: "CustomTypography",
        data: {
          text:"My team has secured 1st place in the Accenture University Innovation Challenge (UIC) 2025!",
        },
      },
      awardOverview: {
        title: "Challenge Overview",
        displayComponent: "CustomTypography",
        data: {
          text:"A 2-week challenge for local university students to showcase their ingenuity for problem-solving by tackling real business problems. Register now! Applications for 2025 are now open.",
        },
      },
      projectOverview: {
        title: "Case Challenge - Problem statement",
        displayComponent: "CustomTypography",
        data: {
          text:"Despite widespread media reports and warnings from authorities, online scams in Singapore reached a record high in 2024, including investment fraud, phishing, and government impersonation schemes. As cybersecurity threats escalate, how can AI be harnessed to enhance threat intelligence, detect and analyze cyber threats in real-time, and disrupt malicious websites, with the goal of preventing scams and safeguarding citizens?",
        },
      },
      hmwStatement: {
        title: "How Might We statement",
        displayComponent: "CustomTypography",
        data: {
          text: "How might we provide Singapore citizens with real-time AI tools that simplify the validation of online interactions even during moments of emotional distress, ensuring they can make informed decisions quickly?"  
        },
      },
      projectSlides: {
        title: "Solution Deck",
        displayComponent: "PdfViewer",
        data: {
          fileUrl: "https://www.canva.com/design/DAGcIlPSx3E/UXwIgPMnohReWqee-qcwXQ/view?embed",
        },
      },
    },
  },
  singtelsutd: {
    name: "singtelsutd",
    title: "Singtel Information Systems and Programming Awards- Year 2023",
    TitleImg: {
      src: "/singtelAwardCermony.avif",
      alt: "Image description",
    },
    sections: {
      achievement: {
        title: "Achievement",
        displayComponent: "CustomTypography",
        data: {
          text:"My team (Team Hungrybees) has secured 1st place in the 1 D Project of 50.001 Information Systems and Programming",
        },
      },
      awardOverview: {
        title: "Challenge Overview",
        displayComponent: "CustomTypography",
        data: {
          text:"SUTD computer science students were required to develop an Android App that could help to solve a real-world problem. At the end of the term judges comprising of SUTD faculty and Singtel representatives would evaluate the projects and award the top 3 teams.",
        },
      },
      demoVideo: {
        title: "Demo Video",
        displayComponent: "YoutubeEmbedding",
        data: {
          videoSrc: "https://www.youtube.com/embed/5n0aRHMf5HE?si=2vsUCPCuI4nEQS23",
        },
      },
    },
  },
};

export default awardDetails;
