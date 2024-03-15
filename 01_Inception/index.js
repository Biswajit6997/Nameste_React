
// const heading = React.createElement("h1", 
// {
//     id:"heading",//props
//     xyz:"abc"

// }, "Biswajit from React");

// console.log(heading);//object

const parent=React.createElement(
    "div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},[

            React.createElement("h1",{},"I am an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag"),
        ]),
        React.createElement("div",{id:"child2"},[

            React.createElement("h1",{},"I am in child2  h1 tag"),
            React.createElement("h2",{},"I am in child2 in h2 tag"),
        ])
    ]
     );


console.log(parent);
// it means ::
// <div id="parent">
//         <div id="child">
//             <h1>I am an h1 tag</h1>
//         </div>
//     </div>


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);