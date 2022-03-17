import React from 'react'
import { Link } from 'react-router-dom';

const Nosotros = () => {
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        // console.log('useEffect');
        getUsers();
    }, [])

    const getUsers = async () => {

        try {
            // const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            const users = await data.json()
            console.log(users.civilizations);
            setEquipo(users.civilizations)
            
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
                        <th scope="col">Nombre Civilización</th>
                        <th scope="col">Expansion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipo.map((item) => {
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
