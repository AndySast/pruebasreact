import React from "react";
const Product = (props) => {
    return (
    <div>
        <p>{props.title}</p>
        <h1>{props.children ? props.children : "There's not content"}</h1>
    </div>
    );
}
export default Product;
