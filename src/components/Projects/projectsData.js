export const projects = [
  {
    title: "CTA Loans - Corcom",
    description:
      "This full-stack loan application integrates various AWS services and is designed as a training resource for future cohorts. It features a React and Bootstrap frontend hosted in an S3 bucket, with CodePipeline automating deployment from GitHub. The backend consists of Node.js RESTful APIs managed by AWS Lambda and API Gateway. Data is stored in AWS RDS with PostgreSQL. The project is secured within a custom VPC, complete with subnets, security groups, and an internet gateway, showcasing essential cloud-based application management skills.",
    technologies: [
      "JWT Tokens",
      "AWS RDS",
      "CodePipeline",
      "CI/CD",
      "S3",
      "API Gateway",
      "Lambda",
      "VPC",
      "React",
      "Bootstrap",
    ],
    links: [
      {
        label: "Live Site",
        url: "http://loan-app-react-website.s3-website.eu-west-2.amazonaws.com/",
      },
      {
        label: "GitHub Repo",
        url: "https://github.com/corecomtechacademy/loan-app-website",
      },
    ],
  },
  {
    title: "Automated Marking - Corcom",
    description:
      "A python script to automate the process of cloning from a list of Git repositories, detecting their programming languages, running compilation/validation processes, and logging the results to a selected excel file. Used by Corecom to increase efficiency of marking students work.",
    technologies: [
      "Repository Automation",
      "Python",
      "Data Processing",
      "Excel Automation",
      "File I/O",
      "PyPI",
    ],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/CTA-automated-marking",
      },
      {
        label: "PyPI Package",
        url: "https://pypi.org/project/automated-marking/",
      },
    ],
  },
  {
    title: "Job Market Insights Report - Corcom",
    description:
      "Used by Corecom to create PDF reports for potential clients, this project features a Python backend utilizing Beautiful Soup for data scraping from an external job market insights site. The React-based frontend provides user interaction, enabling efficient report generation and streamlined client outreach.",
    technologies: [
      "Data Scraping",
      "Python",
      "RESTful API",
      "React",
      "Input Error Handling",
    ],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/CC-Market-Insights-Report",
      },
      {
        label: "Live Site",
        url: "https://kawooky.github.io/CC-Market-Insights-Report/",
      },
    ],
  },
  {
    title: "Reddit Emulation",
    description:
      "A social news platform allowing users to browse, filter, vote, and comment on articles within specific topics. The platform utilizes RESTful APIs connected to a hosted SQL database.",
    technologies: [
      "SQL",
      "React",
      "RESTful API",
      "JavaScript",
      "Express",
      "Testing and Error Handling",
    ],
    links: [
      {
        label: "Live Site",
        url: "https://kawooky.github.io/fe-nc-news/",
      },
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/fe-nc-news",
      },
    ],
  },
  {
    title: "SociaLift",
    description:
      "Final group project at NorthCoders. A social gym mobile app where users can add and compare fitness achievements.",
    technologies: ["JavaScript", "React Native", "Firebase"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/fe-nc-socialift",
      },
      {
        label: "Video",
        url: "https://www.youtube.com/watch?v=OaWRBzGeB9A&t=14s&ab_channel=TomaszKrupa",
      },
      {
        label: "Project Slides",
        url: "/pdfs/sociaLiftPP.pdf",
      },
    ],
  },
  {
    title: "Basboosat Leeds",
    description:
      "The project was created as a template site to advertise my father's small dessert company which he runs from home.",
    technologies: ["Bootstrap", "JavaScript", "React", "CSS"],
    links: [
      {
        label: "Live Site",
        url: "https://kawooky.github.io/basboosat-leeds",
      },
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/basboosat-leeds",
      },
    ],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A classic two player game with a score board and responsive design. I had a lot of fun creating this!",
    technologies: ["JavaScript", "React", "CSS"],
    links: [
      {
        label: "Live Site",
        url: "https://kawooky.github.io/tic-tac-toe/",
      },
      {
        label: "GitHub Repo",
        url: "https://github.com/kawooky/tic-tac-toe",
      },
    ],
  },
  {
    title: "Dissertation",
    description:
      "University of Leeds Mathematics bachelor's degree dissertation titled Computational Applied Mathematics. Using python to perform various numerical schemes to approximate three important mathematical problems.",
    technologies: ["Python", "LaTeX"],
    links: [
      {
        label: "Download PDF",
        url: "/pdfs/dissertation.pdf",
      },
    ],
  },
];
