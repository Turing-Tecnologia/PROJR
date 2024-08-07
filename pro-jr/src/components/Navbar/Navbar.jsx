import React from "react";
import { Link } from "react-scroll";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <img 
            src="src/components/Navbar/logo_projr.png" 
            alt="Logo"
            className={styles.logo}
          />
        </li>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-62}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-62}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-62}>
            Sobre nós
          </Link>
        </li>
      </ul>
      <button className={styles.btnDiagn}>Faça um diagnóstico gratuito!</button>
    </nav>
  );
};

export default Navbar;
