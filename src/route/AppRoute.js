import React from 'react';
import { Router } from 'react-router-dom';
import Cargo_services from '../Container/services/Cargo_services';
import OrderNowServices from '../Container/checkOut/OrderNowServices';
import CheckOutServices from '../Container/checkOut/CheckOutServices';
import Category from '../admin-panel/container/category/Category';
import ProductsDetalis from '../Container/services/ProductsDetalis';
import Products from '../admin-panel/container/products/Products';
import Home from '../Container/home/Home';
import { Switch } from 'react-router-dom';
import AboutUs from '../Container/aboutus/AboutUs';
import Price from '../Container/price/Price';
import Bloggrid from '../Container/blog-grid/Bloggrid';
import Blogdetail from '../Container/blog-detail/Blogdetail';
import Contact from '../Container/contact/Contact';
import Search from '../Container/search/Search';
import Login from '../Container/login/Login';
import PublicRoute from './PublicRoute';
import ClientRoute from './ClientRoute';
import PrivateRoute from './PrivateRoute';
import Services from '../Container/services/servicesAdd.js/Services';
import ServicesView from '../Container/services/ServicesView'

function AppRoute(props) {
    return (
        <Switch>
            <PublicRoute path={"/"} exact component={Home} />
            <PublicRoute path={"/aboutus"} exact component={AboutUs} />
            <PublicRoute path={"/services"} exact component={Services} />
            <PublicRoute path={"/servicesView"} exact component={ServicesView} />
            <ClientRoute path={"/price"} exact component={Price} />
            <PublicRoute path={"/blog-grid"} exact component={Bloggrid} />
            <PublicRoute path={"/blog-detail"} exact component={Blogdetail} />
            <ClientRoute path={"/contact"} exact component={Contact} />
            <PublicRoute path={"/search"} exact component={Search} />
            <PublicRoute path={"/cargoServices"} exact component={Cargo_services} />
            <ClientRoute path={"/orderNow"} exact component={OrderNowServices} />
            <ClientRoute path={"/checkOut"} exact component={CheckOutServices} />
            <PublicRoute path={"/ProductDetalis"} exact component={ProductsDetalis} />
            <PublicRoute path={"/login"} exact resticted="true" component={Login} />

            <PrivateRoute path={"/Categary"} exact component={Category} />
            <PrivateRoute path={"/Products"} exact component={Products} />
        </Switch>
    );
}

export default AppRoute;