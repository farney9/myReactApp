import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante';
    const img = 'https://loremflickr.com/640/360/dog?random=2'

    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>

            <img src={img} alt=""/>
        </div>
    )
}

export default Variables
