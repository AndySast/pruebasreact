import React from "react";
const Body = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            {props.children}
        </div>
    )
}
export default Body;