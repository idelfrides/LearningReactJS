import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import ControleAulas from './components/ControleAulas';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      
      <ControleAulas number={16.5} title="Reapresentação o projeto" />
      <ControleAulas number={16} title="React Icons" />
      <ControleAulas number={15} title="Implementando React Router" />

      <Navbar />      
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/empresa' element={<Company />} />
        <Route path='/contato'  element={<Contact />} />
      </Routes>

      {/* the footer goes here */}
      <Footer />
    </Router>
  );
} 

export default App;
