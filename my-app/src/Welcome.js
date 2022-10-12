import React from "react";
import {Age} from "./Age"


export class Welcome extends React.Component {


    render() {
        return (  
        
            <div>
                <p>Welcome, {this.props.name} !</p>
               { Age.defaultProps.age > 18 && Age.defaultProps.age < 65 && this.props.name === "John" && <Age />} 

              
             

            </div>
        )
    }
}


Welcome.defaultProps = {
    name: "John",
   
   

}