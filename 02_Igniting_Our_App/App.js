
import React from "react";
import  ReactDOM  from "react-dom";


const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', {}, 'This is nameste React 🚀'),
		React.createElement('h2', {}, 'This is h2 Tag'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'I am biswajit Tag'),
		React.createElement('h2', {}, 'I am h2 Tag'),
		React.createElement('h3', {}, 'I am h3 Tag'),

	]),
]);
console.log(parent);//return a object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

