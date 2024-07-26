import { useState } from 'react'
import styles from '../ServicesButton/ServicesButton.module.css'

const ServicesButton = ({ ServiceSrc, ServiceTitle, ServiceContent }) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div className={styles.serviceContainer}>

      <div className={styles.serviceHeader}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <img className={`${styles.serviceImage} ${isHovered ? styles.serviceRotate : ''}`} src={ServiceSrc} alt="Star 10" />

          <h3 className={styles.serviceTitle}>{ ServiceTitle }</h3>
      </div>

      <div className={`${styles.serviceContent} ${isHovered ? styles.serviceShow : ''}`}>
        {ServiceContent}
      </div>
    </div>
  )
}

export default ServicesButton