import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  './Logout.css';
import { logout, selectUser } from "../Reducer/userReducer";
function Logout() {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
   const  handleLogout=(e)=>{
        e.preventDefault();
       
        
        dispatch(logout());
    }
    return (
        <div className="logoutform">
            <h1>Hello, {user.name} !</h1>
            <h3>This is form in Reactjs With Redux</h3>
            <button onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout;