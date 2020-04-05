import React,{Fragment} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import Writer from './Writer/writer';
import NotFound from '../Error/404';

export default ({match: {url},writers})=>{
    return(
        <Fragment>
            <ul>
            {writers.map(({id, name})=>
                <li key={id}>
                    <Link to={`${url}/${id}`}>{name}</Link>
                </li>
            )}
            </ul>

            <Route exact path={url} render={() =>
            <h4>Please select one user !</h4>
            } />

            <Route path={`${url}/:writerId`} render={
                props =>{
                    const writer = writers.find(writer => writer.id === props.match.params.writerId)
                    if(!writer){
                        return <Redirect to="/404" component={NotFound} />
                    }
                    return <Writer {...props} {...writer} />
                } 
                }/>
            </Fragment>
    )
}