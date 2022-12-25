import React from "react"

let Componente = (props) => {
    const { nombre, apellido } = props
    return(
        <div>
            <React.Fragment>
                <p>{ nombre } { apellido }</p>
            </React.Fragment>
        </div>
    )
}

export default Componente