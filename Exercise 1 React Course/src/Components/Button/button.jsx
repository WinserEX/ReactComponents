import React from 'react';

let Button = ({func, name}) => {

    return (
        <button onClick={func}>{name}</button>
    )
}

export default Button