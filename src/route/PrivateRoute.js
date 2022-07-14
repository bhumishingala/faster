import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../uitilis/Index';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <div>
            <Route {...rest} render={props => (
                isLogin() ?
                    <Component {...props} />
                    :
                    <Redirect to="/login" />
            )}

            />
        </div>
    );
}

export default PrivateRoute;