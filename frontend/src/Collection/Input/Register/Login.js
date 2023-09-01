import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Login=() =>
{
    const nav=useNavigate();
    const [email,setemail]=useState([]);
    const [psw,setpsw]=useState([]);  
    const reg=() =>{
        nav('/register')
    }
    const forgot=()=>{
        nav('forgot')
    }
    const Submit=async()=>
    {
        try
        {
            const res=await axios.get("http://localhost:8000/login/"+email+"/"+psw)
            
                if(res.data)
                {

                    nav('/home');
                }
                else
                {
                    alert("try again");
                }
            }

        
        catch(e)
        {
            
            console.log(e)
        }
       
    }
    
    return(
        <>
        <div className="ga"><br/>
       <div><br/>
       <label>email:<input type="email" placeholder='Email'onChange={(e)=>setemail(e.target.value)}></input></label>
        <label >Password:<input type='password'placeholder="Password" onChange={(e)=>setpsw(e.target.value)}></input></label><br></br>
        <button onClick={Submit} className="homepage">Submit</button><br/>
        <button type="button" name="button"  onClick={reg} className="homepage">sign up</button>
        <button type="button" name="button"  onClick={forgot} className="homepage">forgotpassword?</button>
       </div>
        </div>
        </>
    )
}