import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Inp =()=>
{
    const nav=useNavigate();
    const [prob,setprob]=useState([]);

    useEffect(()=>
    {
        axios.get("http://localhost:8000/apr")
        .then((result)=>
        {
            setprob(result.data);

        })
        axios.get("http://localhost:8000/apr")
        .then((result)=>
        {
            setprob(result.data);

        })


    })
    {
        return(
        <>
        <input type="textarea">
            <textarea className="txt" rows="50" cols="50"></textarea>
            </input>
        

        </>
        );
    }
}