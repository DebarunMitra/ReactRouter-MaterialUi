import React,{ Component, Fragment } from "react";

export default ({id, name, description, born, deceased, image})=>
<Fragment>
    <div>
    <img src={image} alt={`${name}-${id}`} width='300' height='400' />
            <h1>{name}</h1>
            <h3>{born} &mdash; {deceased}</h3>
            <p>{description}</p>
    </div>
</Fragment>