import { useState } from 'react'
import { nanoid } from "nanoid";

const CrudSimple = () => {
    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([{id: '', tarea: ''}])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState<string | undefined >(undefined)
    const [error, setError] = useState('')

    const editar = (item: { tarea: string, id: string }) => {

        console.log(item);
        
        setModoEdicion(true)
        setTarea(item.tarea) // tarea es la propiedad del objeto: el objeto tiene 2 propiedades: id, tarea
        setId(item.id)
    }

    const editarTarea = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        
        if(!tarea.trim()){
          console.log('Campo vacio')
          setError('El campo es obligatorio')
          return
        }

        const arrayEditado = tareas!.map(item => item.id === id ? {id, tarea} : item)
        
        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        setId('')
        setError('')
    }

    const agregarTarea = (e: { preventDefault: () => void; }) => {

        e.preventDefault()

        console.log(tarea);

        if(!tarea.trim()){
          console.log('Campo vacio')
          setError('El campo es obligatorio')
          return
        }
        setTareas([
            ...tareas,
            {id: nanoid(10), tarea: tarea}
        ])

        console.log(tareas);
        
        setTarea('')
        setError('')
      }

      const eliminarTarea = (id: any) => {
          const arrayFiltrado = tareas.filter(item => item.id !== id)
          setTareas(arrayFiltrado)
      }

    return (
        <div>
            <h1>Crud Simple</h1>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Lista de Tareas</h4>
                    <ul className="list-group">
                        {
                            tareas.length === 0
                            ? (
                                <li className="list-group-item"><strong>No hay tareas</strong></li>
                            )
                            : (
                                tareas.map(item => (
                                    <li className="list-group-item" key={item.id}>
                                        <span className="lead">{item.tarea}</span>
                                        <button 
                                            onClick={() => eliminarTarea(item.id)}
                                            className="btn btn-sm btn-danger float-end mx-2">
                                                <i className="far fa-trash-alt"></i>                                         </button>
                                        <button 
                                            onClick={ () => editar(item)}
                                            className="btn btn-sm btn-warning float-end">
                                                <i className="far fa-edit"></i>                                         </button>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center">
                        {modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'}
                    </h4>
                    <form
                        noValidate 
                        onSubmit={modoEdicion ? editarTarea : agregarTarea}>
                        <label htmlFor="validationTarea" className="form-label">Tarea</label>
                        <input
                            required
                            id="validationTarea" 
                            type="text" 
                            className="form-control mb-2"
                            placeholder="Ingrese Tarea"
                            onChange={e => setTarea(e.target.value)} 
                            value={ tarea }/>
                        {
                            error ? <div className="text-danger">{error}</div> : null
                            
                        }
                        <div className="d-grid gap-2">
                            {
                                // operador ternario 
                                // ? si es verdadero
                                // : si es falso

                                modoEdicion 
                                ? (
                                    <button className="btn btn-warning" type="submit">
                                        <i className="fas fa-edit"></i> Editar
                                    </button>
                                ) 
                                : (
                                    <button className="btn btn-dark" type="submit">
                                        <i className="fas fa-plus"></i> Agregar
                                    </button>

                                )
                            }
                        </div>
                    </form>
                </div>            
            </div>
        </div>
    )
}

export default CrudSimple
