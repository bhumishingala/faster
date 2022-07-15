import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-white pl-2" href>
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="text-white pl-2" href>
                                <NavLink href className="btn btn-primary d-none d-lg-block" to="/login">Login</NavLink>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-5 text-uppercase text-primary"><i className="fa fa-truck mr-2" />Faster</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
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
                        <NavLink className="text-primary px-2" to="/search">
                            <SearchIcon />
                        </NavLink>
                        <a href className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </div>

    );
}

export default Header;