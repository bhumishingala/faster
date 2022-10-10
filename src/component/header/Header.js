import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../contextapi/ThemeContext';
import Alert from '../alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAction } from '../../redux/action/auth_action';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

function Header(props) {
    const value = useContext(themeContext);
    const cart = useSelector(state => state.cart)
    const checkout = useSelector(state => state.checkOut)
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    console.log(auth);

    return (
        <div>
            {/* Topbar Start */}
            <div class="line"></div>
            <div className={`container-fluid bg-dark`}>
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className={`d-inline-flex align-items-center`}>
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className={`px-2`} href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className={`px-2`} href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className={`px-2`} href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className={`px-2`} href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className={`px-2}`} href>
                                <i className="fab fa-youtube" />
                            </a>
                            <a className={`px-2`} href>
                                <button className="btn btn-primary d-none d-lg-block" onClick={() => value.toggle_theme(value.theme)}>change Theme</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Alert />
            <div class="line"></div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className={`navbar navbar-expand-lg  py-3 py-lg-0 px-lg-5 ${value.theme}`}>
                    <NavLink to={"/"} href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-5 text-uppercase text-primary"><i className="fa fa-truck mr-2" />Faster</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/aboutus">About</NavLink>
                            <NavLink className="nav-item nav-link" to="/services">Service</NavLink>
                            <NavLink className="nav-item nav-link" to="/price">Price</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink className="dropdown-item" to="/blog-grid">Blog Grid</NavLink>
                                    <NavLink className="dropdown-item" to="/blog-detail">Blog Detail</NavLink>
                                </div>
                            </div>
                            <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                        </div>
                        <NavLink href to="/orderNow">
                            {
                                checkout.checkUser == null ?
                                    <Badge badgeContent={cart.cart.length} color="warning">
                                        <ShoppingCartIcon color="bg-primary" />
                                    </Badge>
                                    :
                                    <Badge badgeContent={0} color="warning">
                                        <ShoppingCartIcon color="bg-primary" />
                                    </Badge>

                            }
                        </NavLink>
                        {
                            auth.user === null ?
                                <NavLink to="/login" className="ml-3 btn btn-primary py-2 d-none d-lg-block">
                                    <span>Login/ Signup</span>
                                </NavLink>
                                :
                                <NavLink to="/" className="ml-3 btn btn-primary py-2 d-none d-lg-block">
                                    <span onClick={() => { dispatch(signOutAction()) }}>Logout</span>
                                </NavLink>
                        }
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            <div class="line"></div>
        </div>

    );
}

export default Header;