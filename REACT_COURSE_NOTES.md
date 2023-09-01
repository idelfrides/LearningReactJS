# ReactJS 
  A Library for front-end Development. 
  React JS Course


**Started Date:** 2023-07-20

**End Date:** 2023-08-04

## About
This project is the conceptual part of React Course I made by @matheusbattist.
ReactJS is Library for front-end Development. 
I dedicated my life during one month and six days ( including the second part of course ) learninhg and practicing ReactJS and I hundestand this is only the begining of my journey to solidify that hard skill .

This project also has been used by me to  `learn` and  `train` ReactJS. 


## `CLASS 1` - INTRODUCTION TO REACT
  - Overview of the project wil be created in the course
  - Technical Requirements
  - Notion and Concepts aout React
  - ReactJS is library for web interface creation
  - It is used to build SPAs (Single Page Application)
  - Component Based
  - Use JSX to render HTML
  - Apply virtual DOM to make/execute changes from DOM
  - We can add it to a project or create one with React

## `CLASS 2` - INSTALL REACT
  - We use `create-react-app (CRA)`  tool to create a react app
  - CRA is a script execution tool to create a React Application, where that execution is performed through `nodejs`  and  `npm`
  - `npm start` initialize a react app in dev

#### STEPS TO CREATE A REACTJS APP

##### STEP 1 - INSTALL `npm` and `react`
Access -> [React Dev](https://react.dev/)

##### STEP 2 - CREATE A REACT APP USING `create-react-app` tool
Access -> [Create React App](https://create-react-app.dev)

**RUN COMMAND:**  `npx create-react-app` [YOUR_APP_NAME]
    
##### STEP 3 - AFTER APP HAS SUCCESSFULY CREATED
  Unce React App has been successfuly created, folow the `Steps` in file 
  [README.md](https://github.com/idelfrides/LearningReactJS/blob/main/README.md)
  

## `CLASS 3` - UNDERSTANDING JSX FILES  

  - `JSX` is similar to HTML, but it wrote inside a javascript code
  - Is mean way to write HTML with RactJS
  - We can interpolate variables by putting them inside { }
  - It's possible to execute functions in JSX-Inser variables in `tags atributtes` is algo possible


## `CLASS 4` - CREATING COMPONENTS IN REACT  

  - Allow to split the Application in part
  - The Components render JSX such as `APP.js`
  - Component need a js file with same name. 
  - Components can be imported to any part of Application as many time you need
  - Normlay they stay in folder called  `components`
  - A Component is a javascript function, it name must be equal to his file name
  - They can be used in many other components

## `CLASS 5` - WORKING WITH PROPS  

  - `props` are values passed to a Component
  - They may be used dinamicaly
  - The value is passed as argument when calling a Component
  - That value need to be recovered from inside a parameter, normly `props`
  - `props` are read-only
  

## `CLASS 6` - INSERTING CSS IN REACT  
  - CSS can be added by global way to React App through 'index.css' file
  - However, it possible styling at Component level
  - For that, It used 'CSS modules'
  - Create a css file with this pattern `[COMPONENT_NAME].module.css` and import  that it with key 'styles' in its own Component
  - Inside CSS modules files, have to use classes name in `Camel case` or `snake case`


## `CLASS 7` - USING REACT FRAGMENTS  

  - `React fragments` allow to create a Component without a superior element
  - The purpose is `uncomplicate DOM nodes`
  - The syntax is `<> ... </>` without tag name
  - It created in JSX


## `CLASS 8` - GETTING ADVANCED IN PROPOS  

  - We can `define type for props`, making a kind of validation
  - We do it in an object called `PropTypes` in Component
  - It's possible to `set a default value`
  - To do that, use object `defaultProps`
  

## `CLASS 9` - EVENTS IN REACT 

  - Types: `onClick`, `onChange`, `onSubmit`
  - React events are the same events of DOM, we have events to respond a click
  - The event is associated to a tag that will execute it
  - Generally a `method` is assigned to the event
  - That `method` have to be `created in Component` 
  
  
  ## `CLASS 10` - useState IN ACTION  

  - `useState` is a React Hook
  - With it we can `manage the state` of a Component in a simple way
  - This Hook `works so well with events`
  - It's possible to assign an event to state changing
  

## `CLASS 11` - PASSING EVENTS/METHODS BY PROPS  

  - `Methods` can be passed by props also
  - In other words, a `Component child can activate a method from his father`
  - Let's access the method through an event
  - The syntax is the same as a data props:
  - Like this -> `props.methodName`


## `CLASS 12` - CONDITIONAL RENDERIZATION  

  - We can define showing some element to a condition statement `IF`
  - That action is called by `Conditional Renderization`
  - For that we envolve the tags in `{ }`
  - Because { } allow to execute `javascript` code, so you create your condition
  - It is possible to use `state` to create conditions
  - OBS.: Always avoid creating complexo logics in templates JSX
  

## `CLASS 13` - LIST RENDERIZATION  

  - For doing a list Renderization, first of all, we need an `array`
  - Then use `map` function to loop the list of itens
  - So, render and show something in screen
  - It is possible to put together `Conditional operations and List Renderization`
  - To return an JSX template, must use `( )`
  

## `CLASS 14` - STATE LIFT  

  - `State Lift` is a technique used to share the `state`
  - It is normal many components `depends on same state`
  - In that case, we centralize the state in the father Component, and `define who uses and who defines ( setState )`
  

## `CLASS 15` - IMPLEMENTING REACT ROUTER  

  - `React Router` is a package to change Application
  - So, we can access other pages without `page reload`
  - Only by changing aome app part, which change from a view to other
  - We need to install this package in the project via `npm install`
  - And then, make some changes on app strutructure
  

## `CLASS 16` - REACT ICONS

  - `React Icons` is an external package of icons
  - We need to `add it to project through npm install`
  - It aloow us to add icons to project with a `Components-like syntax`
  - Moreover, `there are a big quantity of icons available`
  
  Access -> [Access React Icons website](https://react-icons.github.io/react-icons/)


## `CLASS 16.5` - RE-PRESENTATION OF THE PROJECT

  - Overview of the project again
   

## IMPORTANT LINKS
  Access links bellow
  
- [Fix import Switch error](https://kinsta.com/knowledgebase/attempted-import-error-switch-is-not-exported-from-react-router-dom/)

- [Install Node.js on Windows Subsystem for Linux (WSL2)](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
