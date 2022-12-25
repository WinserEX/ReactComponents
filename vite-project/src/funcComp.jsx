import { Button} from 'react-bootstrap';
import './funcComp.css'
import Componente from './Componente';

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
            <Button           
             variant="danger">Click me!
            </Button>
        </div>
    )
}

export default Comp


