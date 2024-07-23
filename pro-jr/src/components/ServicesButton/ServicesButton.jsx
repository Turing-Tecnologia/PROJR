import { useState } from 'react'
import StarLogo from '../../assets/ProJr_ServicesStar.png'

const ServicesButton = ({ ServicesTitle, ServicesContent }) => {
  const [ExpandServices, setExpandServices] = useState(false)
  return (
    <div>
      <div>
      <a href="#">
        <img src={StarLogo} alt="Star 10" />  
      </a>
        <h3>{ ServicesTitle }</h3>
      </div>
      <div>
        <p>
          { ServicesContent }
        </p>
      </div>
    </div>
  )
}

export default ServicesButton