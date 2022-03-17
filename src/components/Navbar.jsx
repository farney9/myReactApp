import React from 'react'
import { auth } from "../firebase";

import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    const onLogOut = () => {
        auth.signOut()
                .then(() => {
                    props.history.push('/login')
                })
    }
    return (
        <>
                <nav className="navbar navbar-dark sticky-top bg-dark navbar-expand-md">
                    <div className="container-fluid">
                        <Link 
                            to="/"
                            className="navbar-brand">Navbar
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink 
                                        to="/inicio"
                                        className="nav-link"
                                        activeClassName="active">Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/demo"
                                        className="nav-link"
                                        activeClassName="active">Demo
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/nosotros" 
                                        className="nav-link"
                                        activeClassName="active">Nosotros
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/contacto" 
                                        className="nav-link"
                                        activeClassName="active">Contacto
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/crudfirebase" 
                                        className="nav-link"
                                        activeClassName="active">CRUD Firebase
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/" 
                                        className="nav-link"
                                        activeClassName="active">Auth
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li>
                                {
                                    props.fireBaseUser !== null ? (
                                        <NavLink 
                                        to="/admin">
                                            <button
                                                className="btn btn-outline-primary me-2" 
                                                type="button">Admin
                                            </button>    
                                        </NavLink>
                                        
                                    ) : null
                                    }
                                </li>

                                <li>
                                    {
                                        props.fireBaseUser !== null ? (
                                            <button
                                                onClick={() => onLogOut()}
                                                className="btn btn-outline-primary" 
                                                type="button">Cerrar Sesión
                                            </button>
                                        ) : (
                                            <NavLink 
                                            to="/admin">
                                                <button
                                                    className="btn btn-outline-primary" 
                                                    type="button">Login
                                                </button>    
                                            </NavLink>
                                        )
                                    }
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default withRouter(Navbar)
