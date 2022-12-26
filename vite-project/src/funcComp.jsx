import { Button} from 'react-bootstrap';
import './funcComp.css'
import Componente from './Componente';
import React from 'react';
import { Component } from 'react';


class Contador extends Component{
    constructor(){
        super();
        this.state = {contador: 0}
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(){
        this.setState(
            ()=>{
                return { contador: this.state.contador + 1 }
            });
    }

    handleReset(){
        this.setState(
            ()=>{
                return { contador: 0 }
            });
    }
    
    render() {
        return (
            <div>
                <h1>
                    {this.state.contador}
                </h1>
                <Boton name="Add 1" func={ this.handleClick }/>
                <Boton name="Reset" func={ this.handleReset }/>
            </div>
        );
    }
}

function Boton({ name, func }){
    return (
        <Button           
             variant="danger"
             onClick={ func }
             >{ name }
        </Button>
    )
}

function Comp(props) {
    const estudiantes = [
        {nombre: "Winser", apellido: "Espinal"},
        {nombre: "Oup", apellido: "Uzeta"},
        {nombre: "Adonis", apellido: "Francisco"},
        {nombre: "Nestor", apellido: "Ulloa"}
    ]
    
    return (
        <div className='funcComp'>
            { estudiantes.map(est => <Componente {...est} key={est.name} /> ) }
            
            <Contador />
        </div>
    )
}

export default Comp


