import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Civilizacion from './Civilizacion';
import Contacto from './Contacto';
import Inicio from './Inicio';
import Demo from "./Demo";
import Login from './Login';
import Admin from './Admin';
import Nosotros from './Nosotros';
import Navbar from './Navbar';

// FireBase
import { auth } from "../firebase";
import CrudFirebase from './CrudFirebase';
import Reset from './Reset';

const RouteComponent = () => {
    const [fireBaseUser, setFireBaseUser] = React.useState(false)
    React.useEffect(() =>{
        auth.onAuthStateChanged(user => {
            // console.log(user);
            if (user) {
                setFireBaseUser(true)
                
            } else {
                setFireBaseUser(null)
            }
        })
    }, [])
    return fireBaseUser !== false ? (
        <>
            <Router>
                <Navbar fireBaseUser={fireBaseUser}/>
                <div className="container my-5">
                    <Switch>
                        <Route path="/" exact><Inicio/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/reset"><Reset/></Route>
                        <Route path="/admin"><Admin/></Route>
                        <Route path="/nosotros" exact><Nosotros/></Route>
                        <Route path="/nosotros/:id"><Civilizacion/></Route>
                        <Route path="/inicio"><Inicio/></Route>
                        <Route path="/demo"><Demo/></Route>
                        <Route path="/contacto"><Contacto/></Route>
                        <Route path="/crudfirebase"><CrudFirebase/></Route>
                    </Switch>
                </div>

            </Router>

        </>
    ):
    <div className="row">
        <div className="col-12 my-5 text-center">
            <div className="fa-3x">
                <span><i className="fas fa-spinner fa-pulse"></i></span><br/>
                <h4>Loading...</h4>
                
            </div>
        </div>
    </div>
}

export default RouteComponent