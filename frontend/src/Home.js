import React from 'react';
import { useNavigate } from 'react-router-dom';
export function Home(){
    const nav=useNavigate();
    const Sub=()=>
    {
        nav('/input')

    }
        // const Inpt=()=>{
        //     nav('/input')
        // }
    return(
        <>
        <div className='div1'>
            {/* <img className='im' src="13.ico"  width="150px" height="150px"align="mrginalleft" alt=''></img>
            <center ><h2 className='div3'>FANTASTIC FOUR</h2></center>
            <center><img src="12.ico" width="250px" alt='' ></img></center>
    <button className='button' onClick={Sub}>submit</button> */}
         <img className='im' src="p1.ico"  width="150px" height="150px"align="mrginalleft" alt=''></img>   
            <center ><h2 className='div3'>COMMON PROBLEMS</h2></center>
            <center><img  src="pro.ico" width="350px" alt='' ></img></center>
            <button className='button' onClick={Sub}>WELCOME</button>
                </div>
          
         {/* { <center><h2>GAMYA GEETHIKA</h2>
           <h2>PALLAVI</h2>
            <h2>SHALU</h2>
           <h2>JYOTHI</h2></center>  } */}
        </> 
    );
}
export default Home;