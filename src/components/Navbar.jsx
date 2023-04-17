import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            MMB &nbsp;
            <span className="sm:block hidden">Blockchain</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ul className="list-none hidden sm:flex flex-row gap-6">
          <li
            className={`${
              "Github" === "Github" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a href={`https://github.com/MirzaMuhammadBaig`} target="blank">
              {"Github"}
            </a>
          </li>

          <li
            className={`${
              "LinkedIn" === "LinkedIn" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a
              href={`https://www.linkedin.com/in/mirza-muhammad-baig-blockchain-developer/`}
              target="blank"
            >
              {"LinkedIn"}
            </a>
          </li>

          <li
            className={`${
              "Fiverr" === "Fiverr" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a href={`https://www.fiverr.com/mirzamuhammad68`} target="blank">
              {"Fiverr"}
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <>
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                </>
              ))}
              <li
                className={`${
                  "Github" === "Github" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a href={`https://github.com/MirzaMuhammadBaig`} target="blank">
                  {"Github"}
                </a>
              </li>

              <li
                className={`${
                  "LinkedIn" === "LinkedIn" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a
                  href={`https://www.linkedin.com/in/mirza-muhammad-baig-blockchain-developer/`}
                  target="blank"
                >
                  {"LinkedIn"}
                </a>
              </li>

              <li
                className={`${
                  "Fiverr" === "Fiverr" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a
                  href={`https://www.fiverr.com/mirzamuhammad68`}
                  target="blank"
                >
                  {"Fiverr"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
