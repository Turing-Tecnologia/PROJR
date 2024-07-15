import Navbar from '../../components/Navbar'

import './Home.moduele.css'

const Home = () => {
  return (
    <div id="home" className='view'>
        <Navbar/>
        <div>
            <h1>Evoluindo processos, impactando resultados!</h1>
            <button>Faça um diagnóstico gratuito!</button>
        </div>
        <div>
            <h2>ProJúnior</h2>
            <div>
                <button>Saiba mais</button>
                <button>Contato</button>
            </div>
        </div>
    </div>
  )
}

export default Home