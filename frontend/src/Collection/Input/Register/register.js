import React,{useEffect,useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
export const Register=() =>
{
    const nav=useNavigate();
    const [name,sname]=useState([]);
    const [pnum,setpnum]=useState([]);
    const [email,setemail]=useState([]);
    const [psw,setpsw]=useState([]);
    const [cpsw,setcpsw]=useState([]);
    const Submit=async()=>
    {
        if(psw===cpsw){
            try
        {
            const res=await axios.post("https://mybackend-l1z8.onrender.com/Login/"+name+"/"+pnum+"/"+email+"/"+psw)
            {
                if(res.data)
                {
                    alert("saved");
                    nav('/')
                }
                else
                {
                    alert("try again");
                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
        }
        else{
            alert("your password and conform password is not same");
        }

        
    }
    return(
        <>
        <div className="ga">
            <h1>SIGN-UP</h1>
            <div><label>name:<input type="text" onChange={(e)=>sname(e.target.value)}></input></label></div><br/>
            <div><label>phone num:  <input type="tel" onChange={(e)=>setpnum(e.target.value)}></input></label></div><br/>
            <div><label>E-mail:<input type="email" onChange={(e)=>setemail(e.target.value)}></input></label></div><br/>
            <div><label>Password:<input type="password" placeholder="Password"onChange={(e)=>setpsw(e.target.value)}></input></label></div><br/>
            <div><label>Password:<input type="password" placeholder="Conform Password" onChange={(e)=>setcpsw(e.target.value)}></input></label></div><br/>
            <button onClick={Submit}>Submit</button>
        </div>
        
        
        </>
       
    );
}