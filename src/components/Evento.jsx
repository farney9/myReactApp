import React, { useState } from 'react'

const Evento = () => {

    const [texto, setTexto] = useState('Texto por defecto')

    const eventoClick = () => {
        console.log('Has dado un click');
        setTexto('Cambiando el texto...');
    }
    return (
        // Se usa Fargment para no tener que usar un div adocional y el cual no queremos que se renderice en el Dom
        <>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={ () => eventoClick()} className="btn btn-primary">Click Me</button>
        </>
    )
}

export default Evento
