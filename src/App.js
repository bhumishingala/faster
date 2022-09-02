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

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Header />
          <Switch>
            <PublicRoute path={"/"} exact component={Home}></PublicRoute>
            <PublicRoute path={"/aboutus"} exact component={AboutUs}></PublicRoute>
            <PrivateRoute path={"/services"} exact component={Services}></PrivateRoute>
            <PublicRoute path={"/price"} exact component={Price}></PublicRoute>
            <PublicRoute path={"/blog-grid"} exact component={Bloggrid}></PublicRoute>
            <PublicRoute path={"/blog-detail"} exact component={Blogdetail}></PublicRoute>
            <PrivateRoute path={"/contact"} exact component={Contact}></PrivateRoute>
            <Route path={"/rexexample"} exact component={Refexample}></Route>
            <PublicRoute path={"/search"} exact component={Search}></PublicRoute>
            <PublicRoute path={"/login"} exact resticted="true" component={Login}></PublicRoute>
          </Switch>
        <Footer />
      </ThemeContext>
    </div>
  );
}

export default App;
