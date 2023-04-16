import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  fiverr,
  chakra,
  next,
  express,
  bootstrap,
  etherjs,
  ipfs,
  kafka,
  materialui,
  pinata,
  rust,
  postman,
  truffle,
  hardhat,
  solidity,
  web3js,
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
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
  },
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
    name: "Rust",
    icon: rust,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next js",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Web3 JS",
    icon: web3js,
  },
  {
    name: "Ether JS",
    icon: etherjs,
  },
  // {
  //   name: "Truffle",
  //   icon: truffle,
  // },
  // {
  //   name: "Hardhat",
  //   icon: hardhat,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Chakra UI",
  //   icon: chakra,
  // },
  // {
  //   name: "Material UI",
  //   icon: materialui,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Kafka",
  //   icon: kafka,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "IPFS",
  //   icon: ipfs,
  // },
  // {
  //   name: "Pinata",
  //   icon: pinata,
  // },
  // {
  //   name: "Postman",
  //   icon: postman,
  // },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#1dbf73",
    date: "Oct 2022 - Dec 2022",
    points: [
      "First project: Created a smart contract then do testing then integration & then deploy using solidity & javascript.",
      "Second project: Created a decentralized app then do testing then integration & then deploy using solidity & javascript.",
      "Third project: Removed the bugs on smart contract.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Suffa Computer Education",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "May 2021 - August 2021",
    points: [
      "Creating and managing bussiness dashboard in which I was analytic all bussiness.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Bawdicsoft",
    icon: shopify,
    iconBg: "#000000",
    date: "Dec 2022 - Jan 2023",
    points: [
      "In this project, I have created a mixture of presale & airdrop system.",
      "Testing of this project is from the mocha & chai (framework of javascript).",
      "Integration & deployment on blokchain using ethers.js & hardhat.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Saylani",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "This app is my final project in which I have created many more functionalities. In short it was an full flash app.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bawdicsoft",
    icon: shopify,
    iconBg: "#000000",
    date: "Dec 2022 - Mar 2023",
    points: [
      "In this project I have created a webiste for clients interaction with software and talking to srvices and dicussion on orders and many more.",
      "In simple this is a very good project for communication with client and software house",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bawdicsoft",
    icon: shopify,
    iconBg: "#000000",
    date: "Dec 2022 - Apr 2023",
    points: [
      "In this project, I have created a e-commerce website.",
      "In which two dashboards one is client and second is admin and created many more.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Antematter",
    icon: meta,
    iconBg: "#000000",
    date: "Mar 2023 - Mar 2023",
    points: [
      "In this project, I clone the uniswap & created a customize defi.",
      "Integration & deployment on blokchain using ethers.js & hardhat.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Antematter",
    icon: meta,
    iconBg: "#000000",
    date: "Apr 2023 - Apr 2023",
    points: [
      "In this project, I have worked on two blockchain solana & ethereum.",
      "Purpose of this project is, fetch all pool feeds of different decentralized exchanges from both blockchains.",
      "If user comes and give the symbol of coin, like BTC then search all pools of 6 dexs, 3 ethereum dexs and 3 solana dexs.",
      "Then show the output, like pool address, dex name, token price in that pool, liquidity & token pair.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
