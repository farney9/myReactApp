import React from 'react'

const Comentario = (props) => {
    return (
        <div className="row d-flex">
            <hr/>
            <div className="col align-self-center align-items-center justify-content-center">
                <img src={props.imageUrl} className="img-fluid" alt=""/>
            </div>
            <div className="col align-self-center align-items-center justify-content-center">
                <h5>{props.persona}</h5>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default Comentario
