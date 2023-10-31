const courseDetails = {
  dataScience: {
    name: "dataScience",
    title:
      "Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning",
    TitleImg: {
      src: "/eduback.jpeg",
      alt: "images description",
    },
    sections: {
      courseDescription: {
        title: "Course Description",
        displayComponent: "CustomList",
        data: [
          "Data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow",
        ],
      },
      courseLinks: {
        title: "Course Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/",
            image: "/dataScienceCourse.png",
            text: "Link to course",
          },
          {
            link: "https://drive.google.com/file/d/18ptiJ9wXLl9OkBq2cCjZcGsh-f5P5bpl/view?usp=sharing",
            image: "/dataSciCert.png",
            text: "Course Certificate",
          },
        ],
      },
      courseTechnologies: {
        title: "Technologies used",
        displayComponent: "TechIconContainer",
        data: ["Python", "Numpy", "Pandas"],
      },
    },
  },
  deepLearning: {
    name: "deepLearning",
    title:
      "Learn to create Deep Learning Algorithms in Python from two Machine Learning & Data Science experts.",
    TitleImg: {
      src: "/eduback.jpeg",
      alt: "images description",
    },
    sections: {
      courseDescription: {
        title: "Course Description",
        displayComponent: "CustomList",
        data: [
          "Deep Learning A-Z™ is structured around special coding blueprint approaches meaning that you won't get bogged down in unnecessary programming or mathematical complexities and instead you will be applying Deep Learning techniques from very early on in the course. You will build your knowledge from the ground up and you will see how with every tutorial you are getting more and more confident.",
        ],
      },
      courseLinks: {
        title: "Course Links",
        displayComponent: "LinksContainer",
        data: [
          {
            link: "https://www.udemy.com/course/deeplearning/",
            image: "/dlLogo.jpeg",
            text: "Link to course",
          },
          {
            link: "https://drive.google.com/file/d/1HQ8pccnjPfIlTLZGY4bLlmu0Rlem_HMG/view?usp=sharing",
            image: "/dlcert.png",
            text: "Course Certificate",
          },
        ],
      },
      courseTechnologies: {
        title: "Technologies used",
        displayComponent: "TechIconContainer",
        data: ["Python", "Numpy", "Pandas"],
      },
    },
  },
};

export default courseDetails;
