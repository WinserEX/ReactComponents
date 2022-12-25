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
    }

    handleClick(){
        this.setState(
            ()=>{
                return { contador: this.state.contador + 1 }
            });
    }
    
    render() {
        return (
            <div>
                <h1>
                    {this.state.contador}
                </h1>
                <Boton handleClick={ this.handleClick }/>
            </div>
        );
    }
}

function Boton({ handleClick }){
    return (
        <Button           
             variant="danger"
             onClick={ ()=> handleClick() }
             >Click me!
        </Button>
    )
}

function Comp({job, fname, lname}) {
    const estudiantes = [
        {nombre: "Winser", apellido: "Espinal"},
        {nombre: "Oup", apellido: "Uzeta"},
        {nombre: "Adonis", apellido: "Francisco"},
        {nombre: "Nestor", apellido: "Ulloa"}
    ]
    
    return (
        <div className='funcComp'>
            { estudiantes.map(est => <Componente {...est}/> ) }
            
            <Contador />
        </div>
    )
}

export default Comp


