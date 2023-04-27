import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "../design/custom.css";

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
        scrolled ? "bgColor" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto settext">
        <Link
          to="/"
          className="flex items-center gap-2 settext"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain alignment"
          />
          <p className="text-white -[18px] font-bold cursor-pointer flex ">
            BWD&nbsp;
            <span className="sm:block hidden settext"></span>
          </p>
        </Link>

        <ul className="list-none text-white hidden sm:flex flex-row gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a className="settext text-white" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="list-none hidden sm:flex flex-row gap-6">
          <li
            className={`${
              "Github" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a
              className="settext text-white "
              href={`https://github.com/MirzaMuhammadBaig`}
              target="blank"
            >
              {"Github"}
            </a>
          </li>

          <li
            className={`${
              "LinkedIn" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a
              className="settext text-white"
              href={`https://www.linkedin.com/in/mirza-muhammad-baig-blockchain-developer/`}
              target="blank"
            >
              {"LinkedIn"}
            </a>
          </li>

          <li
            className={`${
              "Fiverr" ? "text-secondary" : "text-white"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
          >
            <a
              className="settext text-white"
              href={`https://www.fiverr.com/mirzamuhammad68`}
              target="blank"
            >
              {"Fiverr"}
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
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
                    className={`settext font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a className="settext color_white" href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                </>
              ))}
              <li
                className={`${
                  "Github" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a
                  className="settext color_white"
                  href={`https://github.com/MirzaMuhammadBaig`}
                  target="blank"
                >
                  {"Github"}
                </a>
              </li>

              <li
                className={`${
                  "LinkedIn" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a
                  className="settext color_white"
                  href={`https://www.linkedin.com/in/mirza-muhammad-baig-blockchain-developer/`}
                  target="blank"
                >
                  {"LinkedIn"}
                </a>
              </li>

              <li
                className={`${
                  "Fiverr" ? "text-secondary" : "text-white"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              >
                <a
                  className="settext color_white"
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
