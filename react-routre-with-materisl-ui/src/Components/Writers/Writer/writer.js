import React,{ Component, Fragment } from "react";
import {Link} from 'react-router-dom';

export default ({match:{url}, id, name, description, born, deceased, image, texts})=>
<Fragment>
    <div>
    <img src={image} alt={`${name}-${id}`} width='300' height='400' />
            <h1>{name}</h1>
            <h3>{born} &mdash; {deceased}</h3>
            <p>{description}</p>
            <ul>
                {texts.map(({id, title})=>
                <li>
                    <Link to={`${url}/texts/${id}`}>{title}</Link>
                </li>)}
            </ul>
    </div>
</Fragment>