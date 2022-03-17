import React from 'react'
import { auth } from '../firebase'
import {withRouter} from 'react-router-dom'

const Reset = (props) => {

    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(null)

    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
            // console.log('Ingrese email');
            setError('Ingrese email')
            return
        }
        setError(null)
        resetPassword()
    }

    const resetPassword = React.useCallback(async () => {
        try {
            await auth.sendPasswordResetEmail(email)
            props.history.push('/login')
            console.log('Correo enviado');
        } catch (error) {
            console.log(error);
            setError(error.message)
        }

    },[email,props.history])


    return (
        <div className="mt-5">
            <h4 className="text-center"> Reset password</h4>
            <hr/>
            <div className="row justify-content-center"></div>
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <form onSubmit={procesarDatos}>
                    {
                        error && (
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {error}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )
                    }
                    <input
                        onChange={ e => setEmail(e.target.value) }
                        value={email}
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese email.."
                    />
                    <div className="d-grid">
                        <button className="btn btn-success mb-2" type="submit">
                        Enviar <i className="far fa-paper-plane"></i> 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Reset)
