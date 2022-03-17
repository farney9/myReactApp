import  { useState } from 'react'

const Lists = () => {
    const estadoinicial = [
        {id:1, texto: 'Task 1'},
        {id:2, texto: 'Task 2'},
        {id:3, texto: 'Task 3'},
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
            {id: 4, texto: 'Task 4'}

        ])
    }
    
    return (
        <div>
            <hr/>
            <h2>Listas</h2>
                {
                    list.map((item) => {
                        return <h4 key={ item.id }>{item.texto}</h4>
                    })
                }
            <button
                className="btn btn-success"
                onClick={() => addItemToList()}>
                Add task
            </button>
            
        </div>
    )
}

export default Lists
