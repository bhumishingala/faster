import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './Container/aboutus/AboutUs';
import Services from './Container/services/Services';
import Price from './Container/price/Price';
import Bloggrid from './Container/blog-grid/Bloggrid';
import Blogdetail from './Container/blog-detail/Blogdetail';
import Contact from './Container/contact/Contact';
import Refexample from './Container/refexample/Refexample';
import Search from './Container/search/Search';
import Login from './Container/login/Login';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import ThemeContext from './contextapi/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext>
            <Header />
            <Switch>
              <PublicRoute path={"/"} exact component={Home}/>
              <PublicRoute path={"/aboutus"} exact component={AboutUs}/>
              <PrivateRoute path={"/services"} exact component={Services}/>
              <PublicRoute path={"/price"} exact component={Price}/>
              <PublicRoute path={"/blog-grid"} exact component={Bloggrid}/>
              <PublicRoute path={"/blog-detail"} exact component={Blogdetail}/>
              <PrivateRoute path={"/contact"} exact component={Contact}/>
              <Route path={"/rexexample"} exact component={Refexample}/>
              <PublicRoute path={"/search"} exact component={Search}/>
              <PublicRoute path={"/login"} exact resticted="true" component={Login}/>
            </Switch>
            <Footer />
          </ThemeContext>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;