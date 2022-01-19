import React  from "react";
import {Link } from "react-router-dom";
import './Home.css';


function Home(){
    return (
      <div className="container">
     
      <div className="User-name">
        <label htmlFor="name">Userame</label>
        <input
            type="text"
            name="name"
            id="name" 
            placeholder="Username"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
         
        </div>

        <div className="log">
      <Link  to="/login">Login</Link>
      </div>
      </div>
      
    );
}
export default Home;