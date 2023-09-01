 import "./App.css";
 
 import Submit from "./Submit";
import {Sevage,Drugs} from './Problems'
 import {BrowserRouter,Routes,Route} from "react-router-dom";
 import { Login } from "./Collection/Input/Register/Login";
 import { Register } from "./Collection/Input/Register/register";
 import { Inp } from "./input";
 import Home from "./Home";
 import { Forgot } from "./Collection/Input/Forgot/forgot";
 function App(){
  return(
         <>
        <BrowserRouter>
        <Routes>
         <Route path='/'  element={<Login/>}/>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/input'  element={<input/>}/>
        <Route path='/Sevage'  element={<Sevage/>}/>
         <Route path='/home'  element={<Home/>}/>
         <Route path='/Drugs'  element={<Drugs/>}/>
          <Route path='/Submit' element={<Submit/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/login' element={<Login/>}/>
         
        </Routes>
        </BrowserRouter>
        </>
       
     ) ;
 }
 export default App;

