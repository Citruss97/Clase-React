import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//let nombre =  "Luis Alejandro Aguilar Corella"
function A(props){
  console.log(props.children)
return props.children
}

function B(props){
return <p>Mi primera experiencia en react {props.nombre}</p>
}

class MiComponenteClase extends Component{
  render(){
    return <p>Mi nombre {nombre}</p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Luis";
    return (
      <div>
        <A nombre="Alejandro">
        <p>{2+5}</p>
        <p>Mi primer Caso</p>
        </A>
        <B nombre={nombre}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
