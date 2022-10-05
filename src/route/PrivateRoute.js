import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../admin-panel/compoent/layout/Layout';

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            {/* <Route {...rest} render={props => (
                auth.user !== null && auth.user.role === "admin" ?
                    <>
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    </>
                    :
                    <Redirect to="/login" />
            )}

            /> */}
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