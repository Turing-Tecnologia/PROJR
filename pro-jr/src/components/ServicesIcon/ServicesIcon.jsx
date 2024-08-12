import styles from './ServicesIcon.module.css';
import StarLogo from '../../assets/ProJr_ServicesStar.png';

const ServicesIcon = ({ title, description }) => {
  return (
    <div className={styles.icon}>
      <img 
        src={StarLogo} 
        alt='estrela laranja' 
        className={styles.star}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesIcon;
