// imports from react 
// import { useState } from 'react';

// imports from react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// imports from internal components
import Home from './pages/Home';
import Company from './pages/Company';
import AulasCurso from './pages/AulasCurso';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
 
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/empresa' element={<Company />} />
        <Route path='/aulas' element={<AulasCurso />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </Router>
  );
}

export default App;
