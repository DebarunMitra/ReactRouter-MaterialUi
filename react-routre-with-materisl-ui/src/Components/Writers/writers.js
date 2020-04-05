import React,{Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Writer from './Writer/writer';

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
                ({ match }) => <Writer {...writers.find(writer => writer.id === match.params.writerId)}/>
                }/>
            </Fragment>
    )
}