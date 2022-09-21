import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <Route {...rest} render={props => (
                auth.user !== null ?
                    <Component {...props} />
                    :
                    <Redirect to="/login" />
            )}

            />
        </div>
    );
}

export default PrivateRoute;