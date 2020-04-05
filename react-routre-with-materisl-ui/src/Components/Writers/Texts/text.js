import React, { Component, Fragment } from "react";
import { Link, Route } from 'react-router-dom';
import NotFound from '../../Error/404';

export default ({title, description, published})=>
<Fragment>
    <h4>{title} {published?`(${published})`:''}</h4>

    <p>{description?description:<i>No Description !!</i>}</p>
</Fragment>