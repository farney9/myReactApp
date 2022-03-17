import React from 'react'
import moment from "moment";
import 'moment/locale/es' ;

import { db } from "../firebase";
const CrudFirebaseWithUsers = (props) => {

    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [tarea, setTarea] = React.useState('')
    const [tareas, setTareas] = React.useState([])
    const [error, setError] = React.useState(null)
    const [id, setId] = React.useState('')
    const [ultimo, setUltimo] = React.useState(null)
    const [desactivar, setDesactivar] = React.useState(false)

    const editar = item => {
        setModoEdicion(true)
        setTarea(item.name) // tarea es la propiedad del obeto: el objeto tiene 3 propiedades: id, fecha, name
        setId(item.id)
    } 
       
    const editarTarea = async (e) => {
        e.preventDefault()
        if(!tarea.trim()){
          console.log('Campo vacio')
          setError('El campo es obligatorio')
          return
        }
        try {
            await db.collection(props.user.uid).doc(id).update({
                name: tarea
            })
            const arrayEditado = tareas.map(item => (
                item.id === id ? {id:item.id, fecha: item.fecha, name: tarea} : item
            ))

            setTareas(arrayEditado)
            setModoEdicion(false)
            setTarea('')
            setId('')
            setError(null)
        } catch (error) {
            console.log(error);
        }
    }

    const agregarTarea =  async e => {
        e.preventDefault()
        if(!tarea.trim()){
          console.log('Campo vacio')
          setError('El campo es obligatorio')
          return
        }

        try {
            const nuevaTarea = {
                name: tarea,
                fecha: Date.now()
            }
            const data = await db.collection(props.user.uid).add(nuevaTarea)
            setTareas([
                ...tareas,
                {...nuevaTarea, id: data.id}
            ])
            setTarea('')
            setError(null)
            
        } catch (error) {
            console.log(error);
            
        }
      }

      const eliminarTarea = async (id) => {
          try {
              await db.collection(props.user.uid).doc(id).delete()
              const arrayFiltrado = tareas.filter(item => item.id !== id)
              setTareas(arrayFiltrado)
              
          } catch (error) {
              console.log(error);
          }
    }

    const onVerMas = async () => {
        console.log('Ver mas ..');
        try {
            const data = await db.collection(props.user.uid).orderBy('fecha', 'desc').limit(5).startAfter(ultimo).get();
            const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data()}));

          setTareas([
              ...tareas,
              ...arrayData
          ]);

          setUltimo(data.docs[data.docs.length -1])

          const query = await db.collection(props.user.uid).orderBy('fecha', 'desc').limit(2).startAfter(data.docs[data.docs.length -1]).get();

          if (query.empty) {
              console.log('No hay más registros');
              setDesactivar(true)
          } else {
              setDesactivar(false)
          }

        } catch (error) {
            console.log(error.message);
        }
    }
    
    React.useEffect(() => {
      const obtenerDatos = async () => {
          setDesactivar(true)
        try {
          const data = await db.collection(props.user.uid).orderBy('fecha', 'desc').limit(5).get();
        //   console.log(data.docs);
   
          const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data()}));

          setUltimo(data.docs[data.docs.length -1])
          
          console.log(arrayData);
          setTareas(arrayData);
          const query = await db.collection(props.user.uid).orderBy('fecha', 'desc').limit(2).startAfter(data.docs[data.docs.length -1]).get();

          if (query.empty) {
              console.log('No hay más registros');
              setDesactivar(true)
          } else {
              setDesactivar(false)
          }

        } catch (error) {
          console.log(error);
        }
      };
   
      obtenerDatos();
    }, [props.user.uid]);

   
    return (
        <div>
            <h4>Crud Firebase With User Accounts</h4>
            <hr/>
            <h3>Hi {props.user.email}!</h3>
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
                                <span className="lead">{item.name} - {moment(item.fecha).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                <span className="lead">{item.fecha}</span>
                                <button 
                                    onClick={() => eliminarTarea(item.id)}
                                    className="btn btn-sm btn-danger float-end mx-2">
                                        <i className="far fa-trash-alt"></i> Eliminar
                                </button>

                                <button 
                                    onClick={ () => editar(item)}
                                    className="btn btn-sm btn-warning float-end">
                                    <i className="far fa-edit"></i> Editar
                                </button>

                            </li>

                            ))
                        )
                    }
                    </ul>
                    <div className="d-grid mt-2">
                        <button
                            onClick={()=> onVerMas()} 
                            className="btn btn-outline-primary btn-sm fw-bold"
                            disabled={desactivar}>
                                Ver más...
                        </button>
                    </div>
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
                            onChange={e => setTarea(e.target.value)} value={ tarea}/>
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

export default CrudFirebaseWithUsers
