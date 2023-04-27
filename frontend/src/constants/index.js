import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  fiverr,
  next,
  express,
  etherjs,
  ipfs,
  kafka,
  hardhat,
  solidity,
  presale,
  tka,
  cf,
  blockchain,
  pool,
  fld,
  ecommerce,
  p1,
  qms,
} from "../assets/index.js";

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
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next js",
  //   icon: next,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express JS",
  //   icon: express,
  // },
  {
    name: "Ether JS",
    icon: etherjs,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Kafka",
  //   icon: kafka,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "IPFS",
    icon: ipfs,
  },
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
      "This seller is very work hard. His communication and seller support skill is very good. Give me perfect work on time.",
    name: "Philippe Alain",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I have impressed this seller because this seller have very good communication and problem solving skill. I APPRECIATE YOU.",
    name: "Lvory Violet",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    testimonial:
      "This seller-service is awesome and on time. I impressed from his work. This seller is also guide me about my project. Fast and perfect service provider. From every angle this seller is perfect.",
    name: "Arsalan fstom",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const projects = [
  {
    name: "Blockchain based Land Registry System",
    description:
      "Smart contract for Land Registration system registers and verifies sellers, buyers, and land, and checks land ownership. Only the Land Inspector can approve or deny verification. Provides a secure and transparent foundation for decentralized land registration system.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "truffle",
        color: "green-text-gradient",
      },
      {
        name: "web3js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Blockchain-based-Land-Registry-System",
  },
  {
    name: "Special NFT (ERC721) Contract",
    description:
      "ERC721 smart contract enables minting of unique tokens with metadata, with limits for admins, whitelisted users, and the general public, including per-wallet limits. Features include minting of NFTs by the owner, max supply, wallet limit, address whitelisting, admin setting, and base URI update.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "web3js",
        color: "green-text-gradient",
      },
      {
        name: "truffle",
        color: "pink-text-gradient",
      },
      {
        name: "pinata",
        color: "color_white",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Special-NFT-Market-Place",
  },
  {
    name: "Presale or ICO",
    description:
      "ERC20 token crowdsale contract allows purchase with another ERC20 token. Additionally, early users may receive bonus tokens based on the sale parameters set by the owner. Contract owner sets sale parameters, can increase NFT liquidity with function, retrieve contract balance, and use for fundraising/exchange purposes.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "ethersjs",
        color: "pink-text-gradient",
      },
      {
        name: "web3js",
        color: "color_white",
      },
    ],
    image: presale,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Presale-or-initial-coin-offering-ICO-",
  },
  // {
  //   name: "Create Blockchain Using Javascript",
  //   description:
  //     "In this project, I have created a many functions of blockchain using JavaScript and the more confusion was exists in my mind that how does blockchain work practically?, the more confusion have cleared about how does blockchain work?",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "redis",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: blockchain,
  //   source_code_link:
  //     "https://github.com/MirzaMuhammadBaig/Create-Blockchain-From-Scratch",
  // },
  {
    name: "TokenLuncher Airdrop",
    description:
      "The contract distributes tokens either for free or a fee, with user purchase limits and timing constraints. Tokens can be obtained using Ether or for free. Early investors receive a special discount.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "openzeppelin",
        color: "green-text-gradient",
      },
    ],
    image: tka,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/TokenLuncher-Airdrop",
  },
  {
    name: "Crowd Funding",
    description:
      "Solidity smart contract for crowdfunding platform enables user contributions, proposal voting, and withdrawal if funding target not met. Manager creates and manages campaigns, and claims funds for completed campaigns.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
    ],
    image: cf,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Crowd-Funding-Contract",
  },
  // {
  //   name: "Ecommerce Store",
  //   description:
  //     "This ecommerce store has separate admin and client panels. Only the admin can manage products through the admin dashboard, including adding, deleting, and updating. The admin can also monitor product statistics and deliveries. Clients can browse and purchase products, and the website alerts when a product is out of stock.",
  //   tags: [
  //     {
  //       name: " express",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "next",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "color_yellowgreen",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "redux-toolkit",
  //       color: "color_yellow",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "color_white",
  //     },
  //     {
  //       name: "bootstrap",
  //       color: "color_brown",
  //     },
  //   ],
  //   image: ecommerce,
  //   source_code_link: "https://github.com/MirzaMuhammadBaig/ecommerce-store",
  // },
  // {
  //   name: "Communication Between Client, You & Third-Party",
  //   description:
  //     "This project improves communication among clients, merchants, and software professionals. Third parties can post client projects on the website, and users can browse and select projects to work on.",
  //   tags: [
  //     {
  //       name: "next",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "color_yellowgreen",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongoose",
  //       color: "color_red",
  //     },
  //     {
  //       name: "node",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "color_white",
  //     },
  //   ],
  //   image: p1,
  //   source_code_link:
  //     "https://github.com/MirzaMuhammadBaig/Manage-Communication",
  // },
  {
    name: "Query Management System",
    description:
      "Portal access requires registration or login. Clients can preview websites. Admin portal for purchase inquiries requires user details and website of interest. Reviews may prompt additional questions or information.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react - next",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "color_white",
      },
    ],
    image: qms,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Query-Management-System",
  },
  {
    name: "Defi - Flash Loan Contract",
    description:
      "Create and deploy a Flash loan smart contract for traditional finance. Receive funding with the liquidity protocol called Aave. Transact with our deployed contract to execute a Flash loan.",
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
    image: fld,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/DeFi--Create-a-Flash-Loan-contract-using-Aave",
  },
  {
    name: "Self Uniswap or (DEFI)",
    description:
      "First clone uniswap-v2-core and uniswap-v2-periphery and then create our custom uniswap and deploy on goerli then create some erc20 tokens for creating pools and then for swapping.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "ethersjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MirzaMuhammadBaig/Self-Uniswap",
  },
  {
    name: "Get Pools Feeds From Different Dexs",
    description:
      "In this project, I am fetching feeds from different dexs of solana & ethereum and then that's data store in kafka with partitions.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "zookeeper",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "color_white",
      },
    ],
    image: pool,
    source_code_link:
      "https://github.com/MirzaMuhammadBaig/Get-Pool-Feeds-From-different-dexs",
  },
];

export { services, technologies, experiences, testimonials, projects };
