import React from "react";
import {Age} from "./Age"


export function Welcome({name = 'Jhon'}) {


  
        return ( 
        
            <div className="welcome">
                <p>Welcome, {name} !</p>
                <Age />

              
             

            </div>
        )
    }



