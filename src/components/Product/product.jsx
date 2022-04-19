import React from "react";
import Title from  "./../Title";
import Body from "./../Body";
import "./product.styles.scss";
const Product = (props) => {
    const {data} = props;
    return (
    <div>
        <Title title={data.title}/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <Body title={1} description="This the body's description">
            <p>Lorem ipsum the text and nothing more</p>
        </Body>
        <hr/>
        <Body title={2} description="This the body's description new">
            <p>oTRA Ocsa the text and nothing more</p>
        </Body>
    </div>
    );
}
export default Product;