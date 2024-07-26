import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="src/components/navBarImage/logo_projr.png" alt="Logo" />
    </div>
  );
};

export default Logo;
