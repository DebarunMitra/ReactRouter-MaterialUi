import React,{ Component, Fragment } from "react";
import {Link, Route} from 'react-router-dom';
import NotFound from '../../Error/404';
import Text from '../Texts/text';


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

            <Route path={`${url}/texts/:textId`} render={
                props=>{
                    const text=texts.find(({id})=> id===props.match.params.textId)

                    if(!text){
                        return <NotFound />
                    }

                    return  <Text {...text} />
                }
            } />
    </div>
</Fragment>