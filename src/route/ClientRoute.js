import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

function ClientRoute({ component: Component, ...rest }) {
    let auth = useSelector(state => state.auth);
    return (
        <Route {...rest} render={props => (
            auth.user !== null ?
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Redirect to="/login" />
                    <Footer />
                </>
        )}

        />
    );
}

export default ClientRoute;