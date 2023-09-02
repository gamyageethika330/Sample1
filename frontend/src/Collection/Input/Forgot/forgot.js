import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Login } from "../Register/Login";
export const Forgot=() =>
{
    const nav=useNavigate();
    const [email,setemail]=useState([]);
    const [psw,setpsw]=useState([]);  
    const [cpsw,setcpsw]=useState([]);  
    const Submit=async()=>
    {
        
            const res=await axios.post("https://mybackend-l1z8.onrender.com/forgot/"+email+"/"+psw+"/"+cpsw)
            {

            
            
                if(res.data)
                {
                    alert("updated successfully");
                    nav('/login');
                }
                else
                {
                    alert("try again");
                }
            }
    
       
    }
    
    return(
        <>
        <div className="ga"><br/>
       <div><br/>
        <label>email:<input type="email" placeholder="E-Mail" onChange={(e)=>setemail(e.target.value)}></input></label><br/>
        <label >New:<input type='Password' placeholder="New Password" onChange={(e)=>setpsw(e.target.value)}></input></label><br></br>
        <div><label>Confirm:<input type="Password" placeholder="Conform Password" onChange={(e)=>setcpsw(e.target.value)}></input></label></div><br/>
        <button onClick={Submit} className="homepage">Submit</button><br/>
       </div>
        </div>
        </>
    )
}