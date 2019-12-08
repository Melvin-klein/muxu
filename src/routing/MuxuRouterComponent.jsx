import React from 'react';
import {Route} from 'react-router-dom';

const MuxuRouterComponent = props => {
    return (
        <React.Fragment>
            {props.router.routes.map(route => {
                let Page = route.component;

                return (
                    <Route exact={route.uri === '/'} path={route.uri} component={Page}/>
                );
            })}
        </React.Fragment>
    );
};

export default MuxuRouterComponent;
