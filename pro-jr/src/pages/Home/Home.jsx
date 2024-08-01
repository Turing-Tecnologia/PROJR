import Logo from "../../components/Logo.jsx";
import Navbar from "../../components/Navbar.jsx";
import style from "../Home/Home.module.css";

const Home = () => {
  return (
    <div id="home" className={style.home}>
      <div className="header">
        <Navbar />
      </div>
      <div className={style.title}>
        <h1>
          Evoluindo processos,
          <br /> impactando resultados!
        </h1>
      </div>

      <button className={style.btnDiagn}>Faça um diagnóstico gratuito!</button>

      <div className={style.imgAcess}>
        <button>
          {" "}
          <img
            src="src/pages/Home/HomeImages/ACESSIBILIDADE → Button.png"
            alt=""
          />
        </button>
      </div>

      <div className={style.info}>
        <h2>ProJúnior</h2>
        <div>
          <button className={style.btnLearnMore}>Saiba mais</button>
          <button className={style.btnContact}>Contato</button>
        </div>
      </div>

      <div className={style.imgsProjr}>
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
