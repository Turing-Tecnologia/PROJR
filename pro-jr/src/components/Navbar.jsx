import React from "react";
import { Link } from "react-scroll";
import styles from './Navbar.module.css';
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre nós
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
