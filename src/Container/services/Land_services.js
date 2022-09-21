import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../contextapi/ThemeContext';

function Land_services(props) {
    const value = useContext(themeContext);
    return (
        <div class={`${value.theme}`}>
            {/* Features Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid w-100 h-100" src="img/ser3.jpg" alt />
                        </div>
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">LAND TRANSPORTATION SERVICES</h6>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <ul className="list-inline">
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Best In Industry</h6>
                                </li><li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Emergency Services</h6></li>
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />24/7 Customer Support</h6></li>
                            </ul>
                            <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Leran More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase">Your cargo's most practical and trustworthy fleet</h6>
                        <h1 className={`mb-4 ${value.theme}`}>LAND TRANSPORTATION</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5 shadow-lg p-5 bg-body rounded">
                            <div>
                                <div className="text-center box mb-4">
                                    <img className="air1 color" src="img/land1.png" alt />
                                </div>
                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>Full Container Load (FCL)</h5>
                                <div className="d-flex flex-column align-items-center py-4">
                                <p>We can deliver your goods straight to your doorstep with utmost care through our vast network of agents and couriers around the world.</p>
                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 shadow-lg p-5 bg-body rounded">
                            <div>
                                <div className="text-center box mb-4">
                                    <img className="air1" src="img/land2.png" alt />
                                </div>
                                <h5 className={` text-center text-primary text-uppercase font-weight-bold`}>Cross-Border    </h5>
                                <div className="d-flex flex-column align-items-center py-4">
                                <p>We can deliver your goods straight to your doorstep with utmost care through our vast network of agents and couriers around the world.</p>
                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 shadow-lg p-5 bg-body rounded">
                            <div>
                                <div className="text-center box mb-4">
                                    <img className="air1" src="img/land3.png" alt />
                                </div>
                                <h5 className={` text-center text-primary text-uppercase font-weight-bold`}>Domestic Distribution</h5>
                                <div className="d-flex flex-column align-items-center py-4">
                                <p>We can deliver your goods straight to your doorstep with utmost care through our vast network of agents and couriers around the world.</p>
                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>
    );
}

export default Land_services;