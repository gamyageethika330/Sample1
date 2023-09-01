import React from "react";
import { useNavigate } from "react-router-dom";
const Submit = () =>
{
    const nav=useNavigate();
    const Sevage= () =>
    {
        nav('/Sevage');
    }
    const Population= () =>
    {
        nav('/Population');
    }
    const Drugs= () =>
    {
        nav('/Drugs');
    }
    const Calculator= () =>
    {
        nav('/Calculator');
    }
    return(
        <>
      <div className="div_b">
        <div className="div_s" >
        <button onClick={Sevage}className="button_s">Sevage</button>
        </div>
        <div className="div_p">
        <button onClick={Population} className="button_s">Population</button>
        </div>
        <div className="div_d">
        <button onClick={Drugs}className="button_s">Drugs</button>
        </div>
        </div>
         </>
    )
}
export default Submit;