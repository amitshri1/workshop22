import React from 'react';
import Login from './features/Login';
import  { useSelector} from "react-redux";
import { selectUser } from './Reducer/userReducer.js';
import Logout from './features/Logout';
function App() {
  const user=useSelector(selectUser);

  return (
    
   <>
   {user?<Logout/>:<Login/>}
   </>
  );
}

export default App;