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
  presale,
  tka,
  cf,
  blockchain,
  pool,
  fld,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "Rust",
  //   icon: rust,
  // },
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
  // {
  //   name: "Web3 JS",
  //   icon: web3js,
  // },
  {
    name: "Ether JS",
    icon: etherjs,
  },
  // {
  //   name: "Truffle",
  //   icon: truffle,
  // },
  {
    name: "Hardhat",
    icon: hardhat,
  },
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
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "IPFS",
    icon: ipfs,
  },
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
    name: "Blockchain based Land Registry System",
    description:
      "This contract is a smart contract for a Land Registration system. It includes several functions for registering and verifying sellers, buyers, and land. The contract also includes functions for checking the owner of a particular land. The contract ensures that only the Land Inspector can verify or reject sellers, buyers, and land. Overall, this contract can be used as a basis for building a decentralized land registration system that is secure and transparent.",
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
    source_code_link: "https://github.com/MirzaMuhammadBaig/Blockchain-based-Land-Registry-System",
  },
  {
    name: "Special NFT (ERC721) Contract",
    description:
      "This is a Solidity smart contract implementing the ERC721 standard. It allows for the minting of unique tokens with metadata and implements various limits for different types of minters (admins, whitelisted users, and the general public) as well as per-wallet limits. This contract allows the owner to mint NFTs, set a maximum supply limit, set a per-wallet limit, and whitelist and admin addresses. The contract also allows for setting and updating the base URI for the tokens.",
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
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MirzaMuhammadBaig/Special-NFT-Market-Place",
  },
  {
    name: "Presale or ICO",
    description:
      "The crowdsale contract of their ERC20 token and enable users to buy it with another ERC20 token. The owner of the contract can set the sale parameters, such as the sale start time, early bonus tokens, and early user quantities. The owner can increase the liquidity of the nft held by the contract by calling the increaseLiquidityCurrentRange function. The contract also provides a function to retrieve the contract balance. The contract can be used for fundraising or other similar applications where users can exchange tokens for a particular purpose.",
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
        color: "white-text-gradient",
      },
    ],
    image: presale,
    source_code_link: "https://github.com/MirzaMuhammadBaig/Presale-or-initial-coin-offering-ICO-",
  },
  {
    name: "TokenLuncher Airdrop",
    description:
      "The contract can distribute tokens for free or for a price, depending on the configuration of the contract. Users can purchase tokens using Ether or receive them for free, and there are limits on the number of tokens that each user can receive. There are constraints on the timing of purchases. Finally, there is a special discount for early investors.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "openzeppelin",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tka,
    source_code_link: "https://github.com/MirzaMuhammadBaig/TokenLuncher-Airdrop",
  },
  {
    name: "Crowd Funding",
    description:
      "This code is a Solidity smart contract for a crowdfunding platform. It allows users to contribute funds to campaigns, vote for campaign proposals, and withdraw their contributions if the campaign does not reach its funding target. The contract is managed by a manager who can create campaigns and claim funds for completed campaigns.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: cf,
    source_code_link: "https://github.com/MirzaMuhammadBaig/Crowd-Funding-Contract",
  },
  {
    name: "Create Blockchain Using Javascript",
    description:
      "In this project, I have created a many functions of blockchain using JavaScript and the more confusion was exists in my mind that how does blockchain work practically?, the more confusion have cleared about how does blockchain work?",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://github.com/",
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
        color: "white-text-gradient",
      },
    ],
    image: pool,
    source_code_link: "https://github.com/MirzaMuhammadBaig/Get-Pool-Feeds-From-different-dexs",
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
    source_code_link: "https://github.com/MirzaMuhammadBaig/DeFi--Create-a-Flash-Loan-contract-using-Aave",
  },
];

export { services, technologies, experiences, testimonials, projects };
