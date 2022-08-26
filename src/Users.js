import React from "react";
export class User1 extends React.Component

{
    render(){
        return(
            <h1>Hello User</h1>
        )
    }
}
function Users(){
    function Apple(){
        return(
            <h1>Apple</h1>
        )
    }
    return(
        <div>
        <h1>User Component</h1>
        <h2>Hello</h2>
        <Apple></Apple>
        </div>

    )
}

export default Users;

// here by two way

// function component and second class component
