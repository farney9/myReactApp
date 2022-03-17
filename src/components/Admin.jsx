import React from 'react'
import { auth } from "../firebase";
import { withRouter } from 'react-router-dom';
import CrudFirebaseWithUsers from './CrudFirebaseWithUsers';


const Admin = (props) => {

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if (auth.currentUser) {
            // console.log('existe usuario');
            setUser(auth.currentUser)
            
        } else {
            console.log('no existe usuario');
            props.history.push('/login')
        }
    }, [props.history])


    return (
        <div>
            {/* <h4>Admin</h4> */}
            {
                user && (
                    <CrudFirebaseWithUsers user={user}/>
                    )
                }
        <br/>
            
        </div>
    )
}

export default withRouter(Admin)
