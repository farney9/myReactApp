import React from 'react'
import { useParams } from 'react-router-dom'

const Civilizacion = () => {
    const {id} = useParams()
    // console.log(id);
    
    const [civilizacion, setCivilizacion] = React.useState([])

    React.useEffect(() => {
        // console.log('useEffect');
        const getData = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const pueblo = await data.json()
            // console.log(pueblo);
            setCivilizacion(pueblo)
        }

        getData();
    },[id])

    return (
        <div>
            <h2>{civilizacion.name}</h2>
            <h5>{civilizacion.team_bonus}</h5>
        </div>
    )
}

export default Civilizacion
