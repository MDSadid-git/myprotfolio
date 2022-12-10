import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="https://drive.google.com/file/d/1la6AnDRtAhMEwIX8V0jV4ah-u70UhD7N/view?fbclid=IwAR1tq9flLEab_L-zp3mh1snC2QzMgaPRJuW-Jpmu9dvkgVJ-cdLlHf74OrE"
            target={"_blank"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
