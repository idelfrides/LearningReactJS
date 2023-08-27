// imports from react 
import { useState } from 'react';

// imports from react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// imports from internal components
import Home from './pages/Home';
import Company from './pages/Company';
import HelloWorld from './components/HelloWorld';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import ControleAulas from './components/ControleAulas';
import Footer from './components/layout/Footer';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Frase from './components/Frase';
import Form from './components/Form';
import Greeting from './components/Greeting';
import SeuNome from './components/SeuNome';
import DevList from './components/DevList';
import Links from './components/Links';
import Conditional from './components/Conditional';
import Events from './components/Events';
import { getDevList }  from './DevLibs/libsApp';
import data  from './data.json';
// import libsApp  from './DevLibs/libsApp';
// import devConfigsHelper  from './devConfigsHelper.json' assert {type: 'json'};


function App() {
  
  const name = 'Barack Obama'
  const bestJSFramework = "https://www.lambdatest.com/blog/best-javascript-frameworks/"
  var w3scSite = "https://www.w3schools.com/react/default.asp"

  const [nome, setNome] = useState()

  // var target = '_self'
  var target = '_blank'
  // var target = '_parent'
  // var target = '_top'

  console.log(data)


  return (
    <Router>

      console.log(libsApp.configsLib());
      
      <Navbar />      
      
      <ControleAulas number={16.5} title="Reapresentação o projeto" />
      <ControleAulas number={16} title="React Icons" />
      <ControleAulas number={15} title="Implementando React Router" />

      <ControleAulas number={14} title="State Lift" />
      
      <SeuNome setNome={setNome} />
      <Greeting nome={nome} />

      <ControleAulas number={13} title="Renderiação de Listas" />
      <DevList itens={getDevList()} />
      <DevList itens={[]} />
      
      <Links title="20 Best JavaScript Frameworks For 2023" url={bestJSFramework} target={target} />
      <Links title="Learn React JS at w3schools" url={w3scSite} target={target} />

      <ControleAulas number={12} title="Renderiação condicional" />
      <Conditional />

      <ControleAulas number={11} title="Passar Eventos por props" />
      <Events />

      <Form />
      <List />
      <HelloWorld />
      <Frase />
      <SayMyName name={name} />
      <SayMyName name='AiDjey Jr' />
      
      <Person 
        name={name} age='61' 
        profession='44th USA President' 
        photo={data.urlPhoto}
      />
      <Frase />
      
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
