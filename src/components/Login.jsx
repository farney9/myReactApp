import React from 'react'
import { withRouter } from 'react-router-dom';
import { db, auth } from "../firebase";



const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)
    const [isRegistrered,setIsRegistrered] = React.useState(false)


    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
            // console.log('Ingrese email');
            setError('Ingrese email')
            return
        }

        if (!password.trim()) {
            // console.log('Ingrese password');
            setError('Ingrese password')
            return
        }
        if (password.trim().length < 6) {
            // console.log('Password debe ser mayor a 6 caracteres');
            setError('Password debe ser mayor a 6 caracteres')
            return
        }
        setError(null)

        if (isRegistrered) {
            registrar()
        } else {
            login()
        }
    }

    const login = React.useCallback( async () => {
        try {
            const resp = await auth.signInWithEmailAndPassword(email, password)
            console.log(resp.user);
            setEmail('')
            setPassword('')
            setError(null)
            props.history.push('/admin')
 
        } catch (error) {
            console.log(error);
            if (error.code ==='auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code ==='auth/user-not-found') {
                setError('Email no registrado')
            }
            if (error.code ==='auth/wrong-password') {
                setError('Usuario o password  inválido')
            }
            if (error.code === 'auth/too-many-requests') {
                setError('Demasiados intentos: se ha bloqueado el acceso temporalmente, pruebe más tarde');
             }
        }
    }, [email, password, props.history])

    const registrar = React.useCallback( async () => {
        try {
           const resp =  await auth.createUserWithEmailAndPassword(email,password)
           console.log(resp.user);
           await db.collection('users').doc(resp.user.uid).set({
               email: resp.user.email,
               uid: resp.user.uid
           })

           await db.collection(resp.user.uid).add({
               name: 'Tarea de Ejemplo',
               fecha: Date.now()
           })
           setEmail('')
           setPassword('')
           setError(null)
           props.history.push('/admin')
            
        } catch (error) {
            console.log(error);

            if (error.code ==='auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code ==='auth/email-already-in-use') {
                setError('El email está actualmente en uso por otra cuenta')
            }
        }
    }, [email, password, props.history])




    return (
        <div className="mt-5">
            <h4 className="text-center">
                {
                    isRegistrered ? 'Registro de usuarios' : 'Login de usuarios'
                }
            </h4>
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
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese email.."
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password" 
                        className="form-control mb-2"
                        placeholder="Ingrese password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="d-grid">
                        <button className="btn btn-dark mb-2" type="submit">
                            {
                                isRegistrered ? 'Registrarse' : 'Iniciar sesión'
                                
                            }
                        </button>
                        <span className="text-center">ó</span>
                        <button
                            onClick={() => setIsRegistrered(!isRegistrered)} 
                            className="btn btn-info mb-2">
                            {
                                isRegistrered ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'
                            }
                        </button>
                        {
                            !isRegistrered ? (
                                    <button
                                    onClick={() => props.history.push('/reset')} 
                                        className="btn btn-danger">¿Olvidó su contraseña?
                                    </button>
                            ): null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login) 
