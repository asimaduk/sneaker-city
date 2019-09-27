import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    document.title = `Not Found | Sneaker City`;

    return (
        <div>
            <h3 style={{textAlign:'center'}} >Ooops, page not found!</h3>
            <center><Link to="/">Return to Home Page</Link></center>
        </div>
    );
}

export default NotFound;