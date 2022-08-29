import React from "react";

const Hello= ()=> {
    // return React.createElement('div',null,"<h1>Hello</h1>")    // we get last parameters as it is 
    // return React.createElement('div',null,'h1',"Hello")       // we get last two parameters as it is 
    return React.createElement('div',{className:"NewClass"},React.createElement('h1',null,"Hello"))     

}

export default Hello;


// react.createelement only when use react 

// for not want to get child tag as no dom node user third parameters again React.createElement with all text node


// what about the null is for attribute or it pair of property and value 

// class as attribute it's not okay 

// in js class is reserved keyword so use the className

// JSX translates component into react dot create Element which is turns uses the react library

//JSX keep code simple eligent and readable
