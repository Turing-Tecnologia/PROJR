import style from './OurClients.module.css'

import LogoClientUFERSA from '../../assets/ProJr_Client_UFERSA.png'
import LogoOralVitta from '../../assets/ProJr_Client_Oral_Vitta.png'
import LogoImperioFit from '../../assets/ProJr_Client_Imperio_Fit.png'
import LogoOlimpiana from '../../assets/ProJr_Client_Olimpiana.png'
import LogoCasa301 from '../../assets/ProJr_Client_Casa_301.png'
import LogoDrogariaAngicana from '../../assets/ProJr_Client_Drogaria_Angicana.png'

import LogoIFRN from '../../assets/ProJr_Client_IFRN.png'
import LogoR2Web from '../../assets/ProJr_Client_R2_Web.png'
import LogoAcaiteriaCongelado from '../../assets/ProJr_Client_Acaiteria_Congelado.png'
import LogoMariCaldas from '../../assets/ProJr_Client_Mari_Caldas.png'
import LogoChiancaNature from '../../assets/ProJr_Client_Chianca_Nature.png'

import LogoDraGabrielaMaia from '../../assets/ProJr_Client_Dra_Gabriela_Maia.png'
import LogoM3 from '../../assets/ProJr_Client_M3.png'
import LogoJotaManutencoes from '../../assets/ProJr_Client_Jota_Manutencoes.png'
import LogoCasteloDoce from '../../assets/ProJr_Client_Castelo_Doce.png'
import LogoSaraCakes from '../../assets/ProJr_Client_Sara_Cakes.png'

const OurClients = () => {
  return (
    <div className={style.OurServicesBase}>
      <h3>Nossos Clientes</h3>
      <div className={style.OurServicesBaseImg}>
        <img src={LogoClientUFERSA} alt="Logo UFERSA" />
        <img src={LogoOralVitta} alt="Logo Oral Vitta" />
        <img src={LogoImperioFit} alt="Logo Imperio Fit" />
        <img src={LogoOlimpiana} alt="Logo Olimpiana" />
        <img src={LogoCasa301} alt="Logo Casa 301" />
        <img src={LogoDrogariaAngicana} alt="Logo Drogaria Angicana" />
        <img src={LogoIFRN} alt="Logo IFRN" />
        <img src={LogoR2Web} alt="Logo R2 Web" />
        <img src={LogoAcaiteriaCongelado} alt="Logo Açaiteria Congelado" />
        <img src={LogoMariCaldas} alt="Logo Mari Caldas" />
        <img src={LogoChiancaNature} alt="Logo Chianca Nature" />
        <img src={LogoDraGabrielaMaia} alt="Logo Drª Gabriela Maia" />
        <img src={LogoM3} alt="Logo M3" />
        <img src={LogoJotaManutencoes} alt="Logo Jota Manutenções" />
        <img src={LogoCasteloDoce} alt="Logo Castelo Doce" />
        <img src={LogoSaraCakes} alt="Logo Sara Cakes" />
      </div>
    </div>
  )
}

export default OurClients