import React from "react";
import Title from  "./../Title";
import Body from "./../Body";
import "./product.styles.scss";
const Product = (props) => {
    const {title, description, childsDescription} = props;
    return (
    <div>
        <Title title={title}>
        <h2 key={1}>eat</h2>
        <h3 key={2}>chews</h3>
        </Title>
        <Body title={1} description={childsDescription}>
            <p>Lorem ipsum the text and nothing more</p>
        </Body>
        <hr/>
        <Title title={title}/>
        <hr/>
        <Body title={2} description="This the body's description new">
            <p> The text and nothing more</p>
        </Body>
        
    </div>
    );
}
export default Product;
