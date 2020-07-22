import React from "react";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth"

class App extends React.Component{
    render() {
       return (
           <div>Hello!
               <GoogleAuth/>
               <FacebookAuth/>
           </div>

       )
    }
}

export default App;