const projectDetails2 = {
  TunaDB: {
    name: "TunaDB",
    title: "TunaDB - Distributed Database",
    TitleImg: {
      src: "/tunadbcover.png",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Distributed Systems & Computing module at SUTD. Project required applying protocols learned during the lessons to construct a fault tolerant distributed database.",
        },
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Implemented gossip protocol that efficiently and rapidly disseminates information about node statuses across the network under 100ms.",
          "Implemented a robust fault tolerant system that can perform data replication and redistribution ensuring data can be preserved and accessed even in the event of up to r-1 concurrent failures (r: replication factor) and up to n-1 node failures (n: total number of nodes).",
          "Implemented a distribution handler that utilizes the consistent hashing ring with Go to redistribute up to 1k+ records across a 4-node cluster within seconds, maintaining data consistency during node transitions.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://github.com/uimagine-admin/tunadb.git",
            image: "/tunadb.png",
            text: "GitHub Repository",
          },
        ],
      },
      projectSlides: {
        title: "Project Slides",
        displayComponent: "PdfViewer",
        data: {
          fileUrl: "https://www.canva.com/design/DAGZtre4t3E/mwe3OmWC5cElbLmhoBWqtw/view?embed",
        },
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["PostMan", "Docker", "Go", "Python",],
      },
    },
  },
  dlPRoj: {
    name: "dlPRoj",
    title: "Dementia Diagnosis via MRI images",
    TitleImg: {
      src: "/mri.jpeg",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Deep Learning module at SUTD. Project required applying Deep Learning techniques for creating models for Medical application.",
        },
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Engineered three machine learning models—modified ResNet architecture, CNN, and CRNN—to classify dementia stages from MRI scans with high precision (ResNet: 99.77%, CNN: 98.86%, CRNN: 98.36%).",
          "Leveraged adversarial training, data normalization, and targeted augmentation to bolster CNN's performance against variability, while adapting a tailored ResNet architecture to serve as a performance benchmarking for other models built.",
          "Managed models with different parameter scales, balancing computational efficiency with predictive performance, considering deployment on constrained medical devices.",
          "Assessed model efficacy with F1 score and confusion matrix analysis to understand classification performance and limitations in a multi-class setup, aligning with standards for medical diagnostics deployment.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://github.com/a-nnza-r/MCC-Dementia.git",
            image: "/ML-proj.png",
            text: "GitHub Repository",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["Pandas", "PyTorch", "Python", "NumPy", "Matplotlib"],
      },
    },
  },
  mlSentimentAnalysis: {
    name: "mlSentimentAnalysis",
    title: "Sentiment Analysis Machine Learning Project",
    TitleImg: {
      src: "/Sentiment-analysis.png",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Machine Learning (50.007) module at SUTD. The project focuses on creating automated systems for analysing sentiment information associated with social media data.",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "In this design project, we designed a sequence labeling model for informal texts using the hidden Markov model (HMM).",
          "Our goal was to build a sequence labeling system from a training dataset and use the system to predict tag sequences for new sentences.",
        ],
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Implemented a function for estimating emission parameters from the training set using MLE (maximum likelihood estimation).",
          "Designed and implemented a simple sentiment analysis system using emission probabilities.",
          "Performed sentiment analysis using the Viterbi algorithm.",
          "Designed and implemented a modified Viterbi algorithm to extract k-best sequences of output sentiment.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://github.com/a-nnza-r/ML-proj.git",
            image: "/ML-proj.png",
            text: "GitHub Repository",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["Matplotlib", "NumPy", "Python", "Pandas", "Seaborn"],
      },
    },
  },
  ORA: {
    name: "ORA",
    title: "Project ORA",
    TitleImg: {
      src: "/img1.png",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Elements of Software Construction (50.003) module at SUTD. The project successfully created a web application that centralizes event proposal forms for respective fifth-rows, allowing for easy management and communication.",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "OSL-Fifth Row App is a web application designed to improve the event proposal form submission and management process for OSL, Fifth-Row EXCOs, and ROOT users.",
        ],
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Contributed as a backend developer and tester.",
          "Incorporated an account-based solution to enable different types of users to have different privileges.",
          "Incorporated form validation to alleviate the need for excessive back-and-forth between OSL and EXCOs.",
          "Collaborated in planning interaction sequences between the client, backend, and database components of the application.",
          "Ensured the integration of error-handling strategies to enhance the application's robustness.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://drive.google.com/file/d/1sQpJY8KudrkNaZZT0YPnvjGOF1c7M81x/view?usp=sharing",
            image: "",
            text: "App Demo Video",
          },
          {
            link: "https://github.com/a-nnza-r/ESC_backend",
            image: "/ESC_backend.png",
            text: "Backend Git Repository for Project ORA",
          },
          {
            link: "https://github.com/esctmp/osl-fifth-row-app",
            image: "/osl-fifth-row-app-frontend.png",
            text: "Frontend Git Repository for Project ORA",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["React.js", "Node.js", "PostgreSQL", "Next.js", "Github"],
      },
    },
  },
  tiktokChallenge: {
    name: "tiktokChallenge",
    title: "Group Buy App - TikTok Challenge",
    TitleImg: {
      src: "/TikTokChallenge.jpeg",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "ThriftTogether is a project aimed at simplifying the process of initiating group orders for food, inspired by late-night TikTok videos. The motivation behind this project is to eliminate the cumbersome process of coordinating orders, calculating shared costs, and dealing with multiple payment methods when sharing a meal with friends after discovering an enticing dish on TikTok.",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "Simplified Group Ordering: ThriftTogether enables users to quickly and easily initiate group food orders directly from TikTok videos.",
          "Seamless Sharing: Users can share their food preferences with friends by generating a QR code or sharing a direct link, making it effortless to organize a group order.",
          "Location-Based Clustering: The platform automatically groups users based on their location to ensure that everyone in the group receives their food while it's still hot and fresh.",
          "Automated Calculations: ThriftTogether eliminates the need for manual calculations of shared costs, simplifying the financial aspect of group orders.",
          "Single Payment Solution: Users no longer need to deal with separate payments; ThriftTogether handles all transactions, providing a streamlined and convenient payment process.",
        ],
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Designed RESTful APIs, allowing ThriftTogether to be easily integrated as a microservice into other platforms or e-commerce systems.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://devpost.com/software/thrifttogether-groupbuy-with-friends-on-tiktok-shop",
            image: "",
            text: "Devpost Link",
          },
          {
            link: "https://www.youtube.com/watch?v=tp59MqQrKNA",
            image: "",
            text: "YouTube Video for Project Description",
          },
          {
            link: "https://github.com/Nextify-Lab/tiktok-hackathon-2023",
            image: "/tiktok-hackathon-2023.png",
            text: "GitHub Repository",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["Tailwindcss", "Firebase", "Next.js", "Typescript", "Github"],
      },
    },
  },
  HungryBees: {
    name: "HungryBees",
    title: "HungryBees - Food Delivery Sharing App",
    TitleImg: {
      src: "/hungryBeesTitle.png",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Information Systems & Programming (50.001) module at SUTD. HungryBees is a simple app that enables users to easily form groups or join group orders online at any time, allowing them to share the expenses of food deliveries.",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "Android Application built using Java.",
          "Incorporated various features such as a login page, proximity-based browsing, and listing functionality.",
          "Incorporated filtered browsing for a user-centric experience.",
          "Chat Rooms for group buyers to communicate about their order details.",
        ],
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Developed responsive Android UI to simplify group food orders by integrating Google Firebase and Java.",
          "Utilised Android Developer API to retrieve device location and identify close-proximity group food orders.",
          "Led the system design process, including selecting the appropriate tech stack, defining key data models, and determining data flow architecture to optimise app performance and user experience.",
        ],
      },
      projectAchievements: {
        title: "Project Achievements",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://drive.google.com/file/d/1icM1crLzab0Q5Hr2d0CZGLUxijE9S-vN/view?usp=sharing",
            image: "/singtel-cert.png",
            text: "Best Project Award from SUTD x Singtel",
          },
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://github.com/NathanAW24/food-sharing-app",
            image: "/hungryBeesGithub.png",
            text: "GitHub Repository Link",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: ["Java", "Android"],
      },
    },
  },
  GFSI: {
    name: "GFSI",
    title: "Global Food Security Index Predictive Analysis",
    TitleImg: {
      src: "/GFSITitle.jpeg",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "This group project was developed under the Data Driven World (10.020) module at SUTD with the following design task: 'Create a model to predict a country’s Global Food Security Index (GFSI) by entering a country’s features, thus allowing UN Security Council members to weigh the importance of assisting this country.'",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "We applied data transformations and other data cleaning techniques to build an appropriate Linear Regression model to predict GFSI based on certain features.",
        ],
      },
      projectContribution: {
        title: "Project Contribution",
        displayComponent: "CustomList",
        data: [
          "Data preprocessing, such as removing outliers, data transformation, and scaling.",
          "Implemented a Regression model from scratch (without the use of ML packages such as Scikit-learn).",
          "Trained and validated the model, performed fine-tuning to improve model robustness.",
          "Tested model results.",
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://github.com/NathanAW24/food-security",
            image: "/GFSI-modelRepo.png",
            text: "Regression Model Repository",
          },
          {
            link: "https://github.com/NathanAW24/food-security-website",
            image: "/GFSI-WebsiteRepo.png",
            text: "Website Repository",
          },
        ],
      },
      projectTechnologies: {
        title: "Technologies Used",
        displayComponent: "TechIconContainer",
        data: [
          "Python",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Next.js",
        ],
      },
    },
  },
  designThinkingProject: {
    name: "designThinkingProject",
    title: "Project LIT-TREE-LY",
    TitleImg: {
      src: "/DTItitle.jpeg",
      alt: "Image description",
    },
    sections: {
      projectOverview: {
        title: "Project Overview",
        displayComponent: "CustomTypography",
        data: {
          text: "A fully-functional all-weather shelter that brings people together through an immersive and integrative audio and visual experience. Office workers can collaboratively create memorable interactions that stimulate the senses of touch, hearing, and sight, promoting a healthy work-life balance in a lively and liberating manner. This is a group project developed under the Design Thinking and Innovation (3.007) module at SUTD (Singapore University of Technology and Design).",
        },
      },
      projectDescription: {
        title: "Project Description",
        displayComponent: "CustomList",
        data: [
          "In today’s increasingly sedentary lifestyle, it is crucial to achieve a proper and healthy balance amid the hustle of daily economic pursuits. This is especially prevalent in Singapore, an advanced and fast-paced society, where many individuals dedicate long hours to work. According to a 2019 Cigna 360 well-being survey, a remarkable 92 percent of working Singaporeans experience stress, which is 8 percent higher than the global average. Numerous studies suggest that Singaporeans' stress is primarily manifested in the workplace. Since Changi Business Park is highly populated by corporate headquarters, it is important that the environment uplifts workers' spirits to ensure sustainable working lifestyles. Hence, Project LIT-TREE-LY aims to promote a healthy work-life balance.",
        ],
      },
      projectAchievements: {
        title: "Project Achievements",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://www.idesignawards.com/winners/zoom.php?eid=9-42006-22&count=0&mode=",
            image: "/ida-design-awards-logo.png",
            text: "Bronze in Architecture Categories / Public Art & Public Art Installation",
          },
        ],
      },
      projectLinks: {
        title: "Project Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "http://asd.courses.sutd.edu.sg/dti-teams/sc02-group-7-project-part-4redo/",
            image: "/LIT-TREE-LYLinkIMG.png",
            text: "Project Website",
          },
        ],
      },
    },
  },
};

export default projectDetails2;
