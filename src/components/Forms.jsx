import React from 'react'

const Forms = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])
    const save = (evento) => {
        evento.preventDefault()

        if (!fruta.trim()) {
            console.log('Campor fruta está vacío');
            return
        }

        if (!descripcion.trim()) {
            console.log('Campor descripcion está vacío');
            return
        }
        console.log(`procesasndo datos.. ${fruta} ${descripcion}`);

        setLista([
            ...lista,
            { nombreFruta: fruta, nombreDescripcion: descripcion }
        ])

        evento.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-3 my-3">
                <h2>Formulario</h2>
                <form onSubmit={save}>
                    <input
                        onChange={(evt) => setFruta(evt.target.value)}
                        className="form-control mb-2"
                        placeholder="Ingrese fruta..."
                        type="text" />
                    <input
                        onChange={(evt) => setDescripcion(evt.target.value)}
                        className="form-control mb-2"
                        placeholder="Ingrese descripción..."
                        type="text" />
                    <div className="d-grid gap-2">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block rounded-pill">
                            <i className="far fa-save fa-2x"></i> Add
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                          <th scope="col">Fruta</th>
                            <th scope="col">descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map((item, index) => {
                            return <tr key={index}>
                                        <td>{item.nombreFruta}</td>
                                        <td>{item.nombreDescripcion}</td>
                                    </tr>
                        })
                        }
                   </tbody>
                </table>
            </div>
        </div>

    )
}

export default Forms
