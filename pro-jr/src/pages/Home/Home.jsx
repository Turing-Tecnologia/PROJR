import Logo from "../../components/Logo.jsx";
import Navbar from "../../components/Navbar.jsx"

import "/home/gabriel-rocha/PROJR/pro-jr/src/pages/Home/Home.module.css"

const Home = () => {
  return (
    <div id="home" className="view">
      <div className="header">
        <Logo />
        <Navbar />
      </div>
      <div className="title">
        <h1>
          Evoluindo processos,
          <br /> impactando resultados!
        </h1>
      </div>
      <button className="btnDiagn">Faça um diagnóstico gratuito!</button>
      <div className="imgAcess">
        <button>
          {" "}
          <img
            src="src/pages/Home/HomeImages/ACESSIBILIDADE → Button.png"
            alt=""
          />
        </button>
      </div>

      <div className="info">
        <h2>ProJúnior</h2>
        <div>
          <button className="btnLearnMore">Saiba mais</button>
          <button className="btnContact">Contato</button>
        </div>
      </div>
      <div className="imgsProjr">
        <img
          src="src/pages/Home/HomeImages/PRO_PNJ-removebg-preview (2) 1.png"
          alt=""
        />
        <img
          src="src/pages/Home/HomeImages/LOGO_PRO_JR_PNG-removebg-preview 1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
