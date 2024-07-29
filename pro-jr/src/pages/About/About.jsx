import React from 'react'
import projrLogo from '../About/projr-logo.png'
import stylesAbout from '../About/img/About.module.css'

const About = () => {
  return (
    <div className='view'>
      <section className={stylesAbout.section}>
        <img className={stylesAbout.img} src={projrLogo} alt="" />
            <h2 className={stylesAbout.h2}>Quem somos</h2>
              <p className={stylesAbout.p}>
                  Somos uma Empresa Júnior do curso de Engenharia de Produção da
                  Universidade Federal Rural do Semi Árido (UFERSA), localizada no
                  Oeste potiguar, campus Angicos. Desenvolvemos serviços de consultoria
                  da área de Engenharia de produção, auxiliando empresas a aprimorar seus
                  serviços e produtos.
              </p>
              <p className={stylesAbout.p}>
                  Uma associação sem fins lucrativos, composta por estudantes, atuando de
                  maneira voluntária. A ProJr Consultoria surgiu no ano de 2017,
                  tornando-se federada a RN Júnior no ano de 2019 onde desde então faz
                  parte do movimento empresa júnior (MEJ).
              </p>
            <h3 className={stylesAbout.h3}>Venha nos conhecer!</h3>
          <button className={stylesAbout.button}>Saiba Mais</button>
      </section>
    </div>
  )
}

export default About