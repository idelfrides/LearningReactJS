# React JS Library for front-end Development. 
#### React JS Course

**Started Date:** 2023-07-20

**Finished Date:** 2023-08-26

### About
- description: This project is the result of my last Hard Skill conquested - ReactJS Library for front-end Development. 
I dedicated my life during one month and six days learninhg and praticing React JS and I hundestand this is only the begining of my journey to solidify that hard skill .



## CLASS 1 - INTRODUCTION TO REACT
  Show project wil be created in the course


# CLASS 2 - INSTALLING REACT

## STEPS TO CREATE A REACTJS APP

### 1 - INSTALL npm and react

[React Dev](https://react.dev/)

### 2 - CREATE AN REACT APP USING create-react-app tool

[Create React App](https://create-react-app.dev)

***COMMAND:** npx create-react-app [APP_NAME]
    
### 3 - AFTER APP HAS SUCCESSFULY CREATED
-----------------------------------------
#### npm start
    Starts the development server.

#### npm run build
    Bundles the app into static files for production.

#### npm test
    Starts the test runner.

#### npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd costs
  **npm start**

**Happy hacking!**


[Fix import Switch error](https://kinsta.com/knowledgebase/attempted-import-error-switch-is-not-exported-from-react-router-dom/)
----------------------------------------------------------

# CLASS 3 - UNDERSTANDING JSX FILES
    

### 5 - INSTALL npm and react


## IMPORTANT LINKS

[Install Node.js on Windows Subsystem for Linux (WSL2)](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)


# CLASS 16 - REACT ICONS

[Access React Icons website](https://react-icons.github.io/react-icons/)



#  ------- código do App.js  -------------


import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';
import { useState }  from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Frase from './components/Frase';
import List from './components/List';
import Events from './components/Events';
import Form from './components/Form';
import Conditional from './components/Conditional';
import DevList from './components/DevList';
import Links from './components/Links';
import ControleAulas from './components/ControleAulas';
import Greeting from './components/Greeting';
import SeuNome from './components/SeuNome';


function App() {
  
  const devList = [
    "Python", "JavaScript", "Java", "PHP", "GO(golang)", "Ruby", "Lua", "C/C++", 
    "Web2py", "Falcon", "Bottle", "CherryPy", 
    "Django", "Flask", 
    "Django Rest Framework", "FastAPI", 
    "ReactJS", "AngularJS", "Vue.js", "Ember.js", "Backbone", 
    "Node.JS", "Next.js", "Express"
  ]
  
  const urlPhoto = 'https://via.placeholder.com/150';
  const name = 'Barack Obama'
  const bestJSFramework = "https://www.lambdatest.com/blog/best-javascript-frameworks/"
  var w3scSite = "https://www.w3schools.com/react/default.asp"

  const [nome, setNome] = useState()

  // var target = '_self'
  var target = '_blank'
  // var target = '_parent'
  // var target = '_top'

  return (
    <div className="App">
     
      <ControleAulas number={15} title="Implementando React Router" />


      <ControleAulas number={14} title="State Lift" />
      <SeuNome setNome={setNome} />
      <Greeting nome={nome} />

      <ControleAulas number={13} title="Renderiação de Listas" />
      <DevList itens={devList} />
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
        photo={urlPhoto}
      />
      <Frase />
    </div>
  );
} 

export default App;
