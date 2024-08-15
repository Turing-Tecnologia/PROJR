import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServicesIcon.module.css';
import StarLogo from '../../assets/ProJr_ServicesStar.png';

const ServicesIcon = ({ title, description }) => {
  const isLargeTitle = title.length > 25;

  let descriptionClass;
  if (description.length < 100) {
    descriptionClass = styles['short-description'];
  } else if (description.length >= 100 && description.length <= 250) {
    descriptionClass = styles['medium-description'];
  } else {
    descriptionClass = styles['long-description'];
  }

  return (
    <div className={styles['icon-wrapper']}>
      <div className={styles.icon}>
        <img 
          src={StarLogo} 
          alt='estrela laranja' 
          className={styles.star}
        />
        <div>
          <h2 className={isLargeTitle ? styles['large-title'] : ''}>
            {title}
          </h2>
          <p className={descriptionClass}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

ServicesIcon.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServicesIcon;
