import React from "react";
import {Age} from "./Age"


export class Welcome extends React.Component {


    render() {
        return (  console.log("ciao"),
        
            <div>
                <p>Welcome, {this.props.name} !</p>
                <Age />

              
             

            </div>
        )
    }
}


Welcome.defaultProps = {
    name: "John",
   
   

}