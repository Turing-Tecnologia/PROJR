import React from 'react'
import styles from '../Impact/Impact.module.css'
import projrLogo from '../Impact/img/projrLogo.png'

const Impact = () => {
    return (
        <div className="view">
        <section className={styles.section}>
            <h1 className={styles.h1}>Impacto</h1>
              <img src={projrLogo} className={styles.img} alt="" />
                <div className={styles.impact}>
                    <div className={styles.impactBox}>
                        <h2 className={styles.h2}>+62</h2>
                        <h3 className={styles.h3}>ESTUDANTES POTENCIALIZADOS</h3>
                    </div>
                    <div className={styles.impactBox}>
                        <h2 className={styles.h2}>+39</h2>
                        <h3 className={styles.h3}>PROJETOS ENTREGUES</h3>
                    </div>
                    <div className={styles.impactBox}>
                        <h2 className={styles.h2}>+24</h2>
                        <h3 className={styles.h3}>CLIENTES IMPACTADOS</h3>
                    </div>
                </div>
        </section>
        </div>
    )
}
  
export default Impact