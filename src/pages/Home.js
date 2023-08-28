// imports from react 
import { useState } from 'react';

import HelloWorld from '../components/HelloWorld';
import ControleAulas from '../components/ControleAulas';
import SayMyName from '../components/SayMyName';
import Person from '../components/Person';
import List from '../components/List';
import Frase from '../components/Frase';
import Form from '../components/Form';
import Greeting from '../components/Greeting';
import SeuNome from '../components/SeuNome';
import DevList from '../components/DevList';
import Links from '../components/Links';
import Conditional from '../components/Conditional';
import Events from '../components/Events';
// import { getDevList }  from './DevLibs/libsApp';
import data from '../data2.json';
// import { makeFetch } from './myLibs';



function Home(){
    const [nome, setNome] = useState()

    // let target = '_self'
    let target = '_blank'
    // let target = '_parent'
    // let target = '_top'
    
    // const data_server = makeFetch('coure_classes', 'GET', '');
  
    console.log("-------------------- data_server ------------------------");
    // console.log(data_server);
    console.log("-------------------- URL PHOTO -------------------");
    console.log(data.testData.urlPhoto);
  
  
    return (
        <>

            <h2>Home</h2>
            <p>Content from Home page</p>

            <ControleAulas number={16.5} title="Reapresentação o projeto" />
            <ControleAulas number={16} title="React Icons" />
            <ControleAulas number={15} title="Implementando React Router" />
            <ControleAulas number={14} title="State Lift" />
            
            <SeuNome setNome={setNome} />
            <Greeting nome={nome} />

            <ControleAulas number={13} title="Renderiação de Listas" />
            <DevList itens={data.devList} />
            <DevList itens={[]} />
            
            <Links 
                title="20 Best JavaScript Frameworks For 2023" 
                url={data.testData.bestJSFramework} target={target} 
            />
            <Links 
                title="Learn React JS at w3schools" 
                url={data.testData.w3scSite} target={target} 
            />

            <ControleAulas title="Conditional renderization" number={12} />
            <Conditional />

            <ControleAulas title="Passing event/methos by props" number={11} />
            <Events />

            <Form />
            <List />
            <Frase />
            <SayMyName name={data.testData.name} />
            <SayMyName name='IJ ( Lê-se AiDjei )' />
            <SayMyName name='IJ WM Jr' />
            
            <Person 
                name={data.testData.name} age='61' 
                profession='44th USA President' 
                photo={data.testData.urlPhoto}
            />

            <ControleAulas title="useState in action" number={10} />   
            <ControleAulas title="Events in React" number={9} />   
            <ControleAulas title="Getting Advanced in props" number={8} />
            <ControleAulas title="Using React Fragments" number={7} />
            <ControleAulas title="Inserting css in React" number={6} />
            <ControleAulas title="Working with props" number={5} />

            <ControleAulas title="Creating components in React" number={4} />
            <HelloWorld />

            <ControleAulas title="Understanding the JSX" number={3} />
            <ControleAulas title="How to install React ?" number={2} />
            <ControleAulas title="Introduction" number={1} />
        </>
    )
}

export default Home;