import React from "react";
import { Link } from "react-scroll";
import styles from './Navbar.module.css';

const Navbar = () => {
  // Define o offset em 8vh, convertendo para pixels ou uma unidade que o react-scroll aceite
  const offset = -8 * window.innerHeight / 100; // -8vh em pixels

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500} offset={offset}>
            <img 
              src="src/components/Navbar/logo_projr.png" 
              alt="Logo"
              className={styles.logo}
            />
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500} offset={offset}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={offset}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={offset}>
            Sobre nós
          </Link>
        </li>
      </ul>
      <button className={styles.btnDiagn}>Faça um diagnóstico gratuito!</button>
    </nav>
  );
};

export default Navbar;
