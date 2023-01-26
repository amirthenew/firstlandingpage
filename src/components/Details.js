
import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const params = useParams()
    console.log(params);
    return (  <div>
        <h1>Details - {params.id}</h1>
        </div>);
}
 
export default Details;