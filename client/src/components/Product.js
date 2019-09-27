import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

//format release date of product
const formatReleaseDate = (timestamp) => {
    const date = new Date(timestamp);
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let strTime = `${hours}:${minutes} ${ampm}`;

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    return `Available ${months[date.getMonth()]} ${date.getDate()} at ${strTime}`;
}

const Product = (props) => {
    const product = props.product;
    
    return (
        product ? 
            <Link to={{pathname: `/products/${product.name.toLowerCase()}/${product.id}`, product: product}} className="Product-Div">
                <img src={product.image} alt={product.name} className="Product-Image"/>
                <div className="Product-Price">${product.price}</div> 
                <div className="Product-Details">
                    <div className="Product-Wrapper">
                        <h3 className="Product-Name">{product.name}</h3>
                        <h6 className="Product-Desc">{product.model}</h6>
                        <p className="Product-ReleaseDate">{formatReleaseDate(product.releaseDate)}</p>
                    </div>
                </div>
            </Link>
            :
            null
    )
}

export default Product;