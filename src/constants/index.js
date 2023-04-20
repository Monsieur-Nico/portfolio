import {
  backend,
  bestBuy,
  creator,
  css,
  devsden,
  docker,
  figma,
  git,
  html,
  interview,
  javascript,
  lighthouse,
  millennium,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  rok,
  tailwind,
  textConvert,
  threejs,
  typescript,
  uberLabs,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Apple Advisor",
    company_name: "BestBuy Canada",
    icon: bestBuy,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Served patrons in a first-point-of-contact role while maintaining health & safety in the workplace.",
      "Helped manage a team of over 10 members.",
      "Showed great knowledge in computers and softwares to help customers with their choices.",
    ],
  },
  {
    title: "Owner and Developer",
    company_name: "Rok Commander",
    icon: rok,
    iconBg: "#383E56",
    date: "Jan 2019 - Oct 2022",
    points: [
      "Own a Discord bot with over 2.7 million users.",
      "Manage customer service functions as well as the development of strategic content for the bot.",
      "Implementing user-friendly design to ensure all users can use the bot easily and smoothly.",
      "Creating game infographics for people to use and benefit to learn the game.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lighthouse Labs (Bootcamp)",
    icon: lighthouse,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Completed a comprehensive, 12-week skills development program focused on industry-driven training of full stack development skills, including data modelling, automated testing, and software architecture.",
      "Collaborating with cross-functional teams to create high-quality projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and receiving constructive feedback from other developers and mentors.",
    ],
  },
  {
    title: "Risk Services Agent",
    company_name: "Millenium1Solutions",
    icon: millennium,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "Tracked fraud transaction investigations, liaising directly with clients to obtain and assess information.",
      "Made determinations as to whether certain transactions involved fraud or could be cleared.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Dev's Den",
    description:
      "Social media platform for software developers and software engineers to share coding knowledge, learn new things and tackle problems as a community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: devsden,
    source_code_link: "https://github.com/Dev-s-Den/Devs-Den",
  },
  {
    name: "Interview Scheduler",
    description:
      "Interview Scheduler is a single page application helps users create appointments, as well as editing and deleting them. Errors handling has been setup be simple.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "storybook",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "pink-text-gradient",
      },
    ],
    image: interview,
    source_code_link: "https://github.com/Monsieur-Nico/Interview-Scheduler",
  },
  {
    name: "textConvert",
    description:
      "Open source library to convert text into many conventions and formats. Recently implemented converting numbers to text as well.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "chai",
        color: "green-text-gradient",
      },
      {
        name: "mocha",
        color: "pink-text-gradient",
      },
    ],
    image: textConvert,
    source_code_link: "https://www.npmjs.com/package/textconvert",
  },
  {
    name: "Uber Labs",
    description:
      "React based project to provide a simple interface to place orders and for the resturants to manage orders. Using the Twilio API to confirm placing orders.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Twilio",
        color: "pink-text-gradient",
      },
    ],
    image: uberLabs,
    source_code_link: "https://github.com/kencruz/uber-labs",
  },
];

export { services, technologies, experiences, projects };
