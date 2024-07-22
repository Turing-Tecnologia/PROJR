import styles from './Contact.module.css';
import classNames from 'classnames';

const Contact = () => {
  return (
    <div className={classNames('view', styles.container)}>
        <div className={classNames(styles.contato, styles.contatoContainer)}>
            <h2>Contato</h2>

            <h3>Fone</h3>
            <p>(84) 99952-1516 - ProJr</p>

            <h3>Email</h3>
            <p>projrconsultoriaangicos@gmail.com</p>

            <h3>Endereço</h3>
            <p>Rua: Gamaliel Martins Bezerra, 587, bairro Alto da Alegria – Angicos/RN.</p>
            <p>CEP: 59.515-000 UFERSA – Bloco de Professores II, sala 36</p>
        </div>
        <div className={classNames(styles.map)}>
            <p>localização</p>
        </div>
    </div>
  )
}

export default Contact