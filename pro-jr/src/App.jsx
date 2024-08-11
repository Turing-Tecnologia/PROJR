import './App.css';

{/* context */}
import { OffsetProvider } from './context/OffsetContext';

{/* pages */}
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Impact from './pages/Impact/Impact';
import OurClients from './pages/OurClients/OurClients';
import OurServices from './pages/OurServices/OurServices';

{/* components */}
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <>
        <OffsetProvider>
          <Navbar />
          <Home />
        </OffsetProvider>
        <About/>
        <OurServices/>
        <Impact/>
        <OurClients/>
        <Contact/>
    </>
  )
}

export default App
