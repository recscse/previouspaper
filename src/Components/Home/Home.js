import React from "react";
import imgs from "../../imgers/home.jpg"
import "./home.css"
const Home=()=>{
    return(
        <div>
            
            <h3>Home Page</h3>
            <img src={imgs} className="imgs" alt={"logo"}></img> 
            <p>
                
            Get you previous Year Papre and Check your Potential and get the right path to ace in your career
            
            </p> 
            
            
          
        </div>
    )
}
export default Home;