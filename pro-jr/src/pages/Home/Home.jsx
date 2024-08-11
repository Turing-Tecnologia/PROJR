import style from "../Home/Home.module.css";
import { Link } from "react-scroll";
import { useOffset } from '../../context/OffsetContext';

const Home = () => {
  const { offset } = useOffset();

  return (
    <div id="home" className={`${style.home} view`}>
          <img
            src="src/pages/Home/HomeImages/ACESSIBILIDADE → Button.png"
            alt="Botão de acessibilidade"
            className={style.accessibility}
          />
      <div className={style.slogan}>
        <h1>
          Evoluindo processos,
          <br/> impactando resultados!
        </h1>
      
        <h2>ProJúnior</h2>

        <div className={style.buttons}>
          <Link to="about" smooth={true} duration={500} offset={offset}>
              <button className={style.btnLearnMore}>
                Saiba mais
              </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={offset}>
            <button className={style.btnContact}>
              Contato
            </button>
          </Link>
        </div>
      </div>

      <div className={style.imgsProjr}>
        <img
          src="src/pages/Home/HomeImages/PRO_PNJ-removebg-preview (2) 1.png"
          alt="Logo da PROJR"
          className={style.projrLogo}
        />
        <img
          src="src/pages/Home/HomeImages/LOGO_PRO_JR_PNG-removebg-preview 1.png"
          alt="Símbolo de engrenagem com uma lâmpada no centro"
        />
      </div>
    </div>
  );
};

export default Home;
