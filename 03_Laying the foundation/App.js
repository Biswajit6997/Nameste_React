
import React from "react";
import  ReactDOM  from "react-dom";

//React Element
// const heading=React.createElement("h1",{id:"head"},"Nameste React🚀🚀")
// console.log(heading);

// JSX (Transpiled before it reaches the JS)-PARCEL -Babel
// JSX --> HTML like or XML-Like Syntax same as above line
// JSX ==> Babel transpiles it to React.createElement=> ReactElement-Js Object =>HTMLElement(render)

//React Element
//JSX 
const jsxHeading=(<h1 className="heading">
    Nameste React using JSX 🚀
    </h1>)

// React Component
//1.Class Based Component--Old
//2. Functional Component--New---Most Used

const HaeadingComponent=()=>{
   return <h1>Nameste React Functional Component 🚀🚀🚀🚀</h1>
    
}



const number=100000;
//component compasation
const HaeadingComponent2=()=>(
    <div id="container">
       
        {jsxHeading}  {/* react element */}
    <h2>{number}</h2>
    {/* GTis three are same syntax */}
    <HaeadingComponent/>
    {HaeadingComponent()}
    <HaeadingComponent></HaeadingComponent>


    <h1>Nameste React Functional Component 2</h1>
    <Titel/>
    <heading/>
    </div>
)



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HaeadingComponent2/>)

// const root=ReactDOM.createRoot(document.getElementById("root"))
// // root.render(heading)
// root.render(jsxHeading)



const Titel=function(){
    return (
    <h1 className="titel">Biswajit</h1>)
}