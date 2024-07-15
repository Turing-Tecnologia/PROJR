import './Navbar.module.css';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>Serviços</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>Sobre nós</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
