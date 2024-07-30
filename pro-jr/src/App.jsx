import './App.css';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Impact from './pages/Impact/Impact';
import OurClients from './pages/OurClients/OurClients';
import OurServices from './pages/OurServices/OurServices';
import Whatsapp from './pages/Whatsapp/Whatsapp';

function App() {

  return (
    <>
        <Home/>
        <About/>
        <OurServices/>
        <Impact/>
        <OurClients/>
        <Contact/>
        <Whatsapp />
    </>
  )
}

export default App
