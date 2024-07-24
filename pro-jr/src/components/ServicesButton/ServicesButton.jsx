import { useState } from 'react'
import StarLogo from '../../assets/ProJr_ServicesStar.png'
import style from '../ServicesButton/ServicesButton.module.css'

const ServicesButton = ({ ServicesTitle, ServicesContent }) => {
  {/*const [ExpandServices, setExpandServices] = useState(false)*/}
  return (
    <div id='containerServiceBtn' className={style.containerServiceBtn}>
      <div className={style.ServiceBtnSecon}>
      <a href="#">
        <img className={style.ServiceBtnImg} src={StarLogo} alt="Star 10" />  
      </a>
        <h3 className={style.ServiceBtnTitle}>{ ServicesTitle }</h3>
      </div>
      <div>
        <p className={style.ServiceButtonContent}>
          { ServicesContent }
        </p>
      </div>
    </div>
  )
}

export default ServicesButton