import React from 'react'
import { Link } from 'react-router-dom';

const Nosotros = () => {
    const [civilization, setCivilization] = React.useState([])

    React.useEffect(() => {
        // console.log('useEffect');
        getData();
    }, [])

    const getData = async () => {

        try {
            //aoe2 Age of empires 2
            // const data = await fetch('https://jsonplaceholder.typicode.com/users')
            //TODO: para la peticion fetch se debe instalar en el navegador la extensión CORS unblock

            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            const aoe2 = await data.json()
            // console.log(aoe2.civilizations);
            setCivilization(aoe2.civilizations)
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h1>Civilización</h1>
            <hr />
            <table className="table table-hover table-striped my-4">
                <thead className="table-dark">
                    <tr>
                        {/* <th scope="col"><span><i className="fas fa-user"></i></span> Nombres y Apellidos</th>
                        <th scope="col"><span><i className="fas fa-at"></i></span> Nombre de usuario</th>
                        <th scope="col"><span><i className="fas fa-envelope-square"></i></span> Email</th> */}
                        <th scope="col">Civilización</th>
                        <th scope="col">Expansion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        civilization.map((item) => {
                        return <tr key={item.id}>
                                <td>
                                    <Link
                                        to={`/nosotros/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </td>
                                    <td>{item.expansion}</td>
                                </tr>
                        })
                    }
                </tbody>
            </table>            
        </div>
    )
}

export default Nosotros
