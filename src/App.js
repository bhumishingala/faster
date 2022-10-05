import logo from './logo.svg';
import './App.css';
import ThemeContext from './contextapi/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import Cargo_services from './Container/services/Cargo_services';
import Getquote from './Container/quote/Getquote';
import OrderNowServices from './Container/checkOut/OrderNowServices';
import CheckOutServices from './Container/checkOut/CheckOutServices';
import Category from './admin-panel/container/category/Category';
import ProductsDetalis from './Container/services/ProductsDetalis';
import Products from './admin-panel/container/products/Products';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './Container/aboutus/AboutUs';
import Services from './Container/services/Services';
import Price from './Container/price/Price';
import Bloggrid from './Container/blog-grid/Bloggrid';
import Blogdetail from './Container/blog-detail/Blogdetail';
import Contact from './Container/contact/Contact';
import Search from './Container/search/Search';
import Login from './Container/login/Login';

import AppRoute from './route/AppRoute';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Layout from './admin-panel/compoent/layout/Layout';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext>
            <Header />
            <Switch>
              <PublicRoute path={"/"} exact component={Home} />
              <PublicRoute path={"/aboutus"} exact component={AboutUs} />
              <PublicRoute path={"/services"} exact component={Services} />
              <PrivateRoute path={"/price"} exact component={Price} />
              <PublicRoute path={"/blog-grid"} exact component={Bloggrid} />
              <PublicRoute path={"/blog-detail"} exact component={Blogdetail} />
              <PrivateRoute path={"/contact"} exact component={Contact} />
              <PublicRoute path={"/search"} exact component={Search} />
              <PublicRoute path={"/cargoServices"} exact component={Cargo_services} />
              <PublicRoute path={"/getquote"} exact component={Getquote} />
              <PrivateRoute path={"/orderNow"} exact component={OrderNowServices} />
              <PrivateRoute path={"/checkOut"} exact component={CheckOutServices} />
              <PublicRoute path={"/ProductDetalis"} exact component={ProductsDetalis} />
              <PublicRoute path={"/login"} exact resticted="true" component={Login} />
              <Layout>
                <PrivateRoute path={"/Categary"} exact component={Category} />
                <PrivateRoute path={"/Products"} exact component={Products} />
              </Layout>
            </Switch>
            <Footer />
            {/* <AppRoute /> */}
          </ThemeContext>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;