import React from "react";
import { useNavigate } from 'react-router-dom';
const Login = () =>
{
    const nav = useNavigate();
   const  Submit= () =>
    { 
        nav('/Home');
    }
    return(
        <>
       <button onClick={Submit}>Submit</button>
        </>
    );
}
export default Login;
