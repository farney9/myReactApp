import React, { useState } from 'react'

const Lists = () => {
    const estadoinicial = [
        {id:1, texto: 'Tarea 1'},
        {id:2, texto: 'Tarea 2'},
        {id:3, texto: 'Tarea 3'},
    ]

    const [list, setList] = useState(estadoinicial)

    const arrayUno = ['Colombia', 'Argentina']
    const arrayDos = ['Perú', 'México']
    const arrayUnidos = [...arrayUno, ...arrayDos]
    console.log(arrayUnidos)

    const addItemToList = () => {
        console.log('click');
        setList([ 
            ...list,
            {id:4, texto: 'Tarea 4'}

        ])
    }
    
    return (
        <div>
            <hr/>
            <h2>Listas</h2>
                {
                    list.map((item, index) => {
                        return <h4 key={ item.id }>{item.texto}</h4>
                    })
                }
            <button
                className="btn btn-success"
                onClick={() => addItemToList()}>
                Click me
            </button>
            
        </div>
    )
}

export default Lists
