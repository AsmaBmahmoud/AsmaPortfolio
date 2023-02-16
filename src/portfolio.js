/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ben Mahmoud Asma",
  title: "Hi all, I'm Asma",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsmaBmahmoud",
  linkedin: "https://www.linkedin.com/in/ben-mahmoud-asma-359a57177/",
  gmail: "benmahmoudasma57@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@asmabenmahmoud",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "digital economy University",
      logo: require("./assets/images/esen.jpeg"),
      subHeader: "professional license of Science in Computer Science and information technology system",
      duration: "September 2015 - mai 2018",
      desc: "Ranked top 100% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Ecole Supérieure d'Economie Numérique ESEN Manouba, Higher School of Digital Economy, University of Manouba Tunis Tunisia, invest in intelligence.",

      ]
    },
    {
      schoolName: "Khaled Ben Walid",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor degree of Science in Economics and Management",
      duration: "September 2014",
      desc: "Ranked top in the program..",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Oyez Altavia",
      companylogo: require("./assets/images/oyez.jpeg"),
      date: "september 2018 – Present",
      desc: "Oyez is an expert agency in connected commerce. We implement the technological and creative solutions that brands and distributors need to accelerate the digital transformation of their business models on mobile, web and in stores.",
      descBullets: [
        
      ]
    },
    {
      role: "Front-End Developer",
      company: "Barac.io",
      companylogo: require("./assets/images/Barac_Logo.jpeg"),
      date: "aout 2019 – juin 2020",
      desc: "Venari Security is the only company in the world focused on encrypted traffic analysis without decryption. We provide organisations with visibility and insight into their encrypted attack surface and how encryption is actively used across their enterprise. Enabling these organisations to define, measure, monitor and maintain strong encryption standards, highlighting and reporting on deviation. Giving them actionable insights and intelligence about their encrypted traffic."
    },
    {
      role: "Front-End Developer",
      company: "Breakpoint technology",
      companylogo: require("./assets/images/breakpoint.png"),
      date: "juillet 2020 – juin 2021",
      desc: "In an environment where the acceleration of retail transformation is becoming a strategic issue for digital departments, we are developing tools and integrating disruptive technologies allowing them to regain the flexibility and scalability that omni-channel projects need to become real vectors of business development."
    },
    {
      role: "Front-End Developer",
      company: "Oxilog",
      companylogo: require("./assets/images/OXILOG.png"),
      date: "juillet 2021 – Présent",
      desc: "Oxilog Consulting is a service company in consulting and engineering of computer systems"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/monoprix.png"),
      projectName: "Monoprix.fr",
      projectDesc: "Courses et Shopping en ligne (700K visites mensuelles). Contribuer au développement de la nouvelle version du site E-commerce monoprix. Mettre en place un système de livraisons, et faire la refonte des grosses parties dans l'application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.monoprix.fr/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/commande.png"),
      projectName: "Commande.com",
      projectDesc: "Commande(Safo): application web E-commerce destinée aux grandes enseignes comme Carrefour et Monoprix",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.commande.com/fr/login"
        }
      ]
    },
    {
      image: require("./assets/images/Barac_Logo.jpeg"),
      projectName: "Barac.io",
      projectDesc: "Detect threats and attacks accurately in encrypted traffic without decryption, using network packets and metadata and Artificial Intelligence in real time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://barac.io/"
        }
      ]
    },
    {
      image: require("./assets/images/linkinnov.jpeg"),
      projectName: "Linkinnov",
      projectDesc: "Linkinnov, the digital platform. dedicated to innovation and scientific expertise, Linkinnov connects French scientific experts and innovative companies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://linkinnov.com/#/"
        }
      ]
    },
    {
      image: require("./assets/images/P&V.png"),
      projectName: "Piere et vacances",
      projectDesc: "Pierre et Vacances est un site dédié pour le tourisme",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.pierreetvacances.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
   
    {
      title: "ESEN",
      subtitle: "Completed deploma from ESEN for Web App Developer",
      image: require("./assets/images/contact-image.jpeg"),
      imageAlt: "dep",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "http://www.promosport.sport.tn/fr"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@asmabenmahmoud/why-react-is-the-best-32a313b843e4",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33.........",
  email_address: "benmahmoudasm57@gmail.com"
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
