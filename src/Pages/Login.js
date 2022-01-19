import React from "react";
import {Link } from "react-router-dom";

import Dishes from "../Components/Dishes";

function Login(){
    return(
        <>
         <div>
         <Dishes/>
     
          </div>
        <h1> Welcome to Dish Poll App</h1>
        <span><Link to="/"></Link></span>
         </>
         
        
    );
}
export default Login;
