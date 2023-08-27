// imports from react 
import { useState } from 'react';

// imports from react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// imports from internal components
import Home from './pages/Home';
import Company from './pages/Company';
import AulasCurso from './pages/AulasCurso';
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


function App() {
 
  const [nome, setNome] = useState()

  // var target = '_self'
  var target = '_blank'
  // var target = '_parent'
  // var target = '_top'

  console.log("-------------------- DATA ------------------------");
  console.log(data);
  console.log("-------------------- URL PHOTO -------------------");
  console.log(data.urlPhoto);

  return (
    <Router>
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
      
      <Links 
        title="20 Best JavaScript Frameworks For 2023" 
        url={data.bestJSFramework} target={target} 
      />
      <Links 
        title="Learn React JS at w3schools" 
        url={data.w3scSite} target={target} 
      />

      <ControleAulas title="Conditional renderization" number={12} />
      <Conditional />

      <ControleAulas title="Passing event/methos by props" number={11} />
      <Events />

      <Form />
      <List />
      <Frase />
      <SayMyName name={data.name} />
      <SayMyName name='AiDjey Jr' />
      
      <Person 
        name={data.name} age='61' 
        profession='44th USA President' 
        photo={data.urlPhoto}
      />

      <ControleAulas title="useState in action" number={10} />   
      <ControleAulas title="Events in React" number={9} />   
      <ControleAulas title="Getting Advanced in props" number={8} />
      <ControleAulas title="Using React Fragments" number={7} />
      <ControleAulas title="Inserting css in React" number={6} />
      <ControleAulas title="working with props" number={5} />

      <ControleAulas title="Creating components in React" number={4} />
      <HelloWorld />

      <ControleAulas title="Understanding the JSX" number={3} />
      <ControleAulas title="How to install React ?" number={2} />
      <ControleAulas title="Introduction" number={1} />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/empresa' element={<Company />} />
        <Route path='/aulas' element={<AulasCurso />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>

      {/* the footer goes here */}
      <Footer />
    </Router>
  );
}

export default App;
