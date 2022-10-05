import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { isLogin } from '../uitilis/Index';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ component: Component, resticted = false, ...rest }) {
    let auth = useSelector(state => state.auth)

    return (
        // <Route  {...rest} render={props => (
        //     auth.user !== null && resticted ?
        //         <>
        //             <Header />
        //             <Redirect to="/" />
        //             <Footer />
        //         </>
        //         :
        //         <>
        //             <Header />
        //             <Component {...props} />
        //             <Footer />
        //         </>
        // )}

        // />
        <Route  {...rest} render={props => (
            isLogin() && resticted ?
                <Redirect to="/" />
                :
                <Component {...props} />
        )}

        />
    );
}

export default PublicRoute;