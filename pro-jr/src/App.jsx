import './App.css';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Impact from './pages/Impact/Impact';
import OurClients from './pages/OurClients/OurClients';
import OurServices from './pages/OurServices/OurServices';

import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <OurServices/>
        <Impact/>
        <OurClients/>
        <Contact/>
    </>
  )
}

export default App
