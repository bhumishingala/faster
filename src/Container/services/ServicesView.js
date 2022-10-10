import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../contextapi/ThemeContext';
import { history } from '../../history';
import { getProducts } from '../../redux/action/Products_action';

function Services(props) {
    const value = useContext(themeContext);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    let productsFilter = products.Products.filter((p) => p.category === props.location.state.name)
    console.log(productsFilter);
    console.log(props.location.state.name);

    const productsDetails = (Prodetalis) => {
        history.push('/ProductDetalis' , {Prodetalis:Prodetalis})
        console.log(Prodetalis);
    }

    return (
        <div class={`${value.theme}`}>
            {/* Features Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid w-100 h-100" src="img/about.jpg" alt />
                        </div>
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">ABOUT US</h6>
                            <h1 className={`mb-4 ${value.theme}`}>Trusted &amp; Faster Logistic Service Provider</h1>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <ul className="list-inline">
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Best In Industry</h6>
                                </li><li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Emergency Services</h6></li>
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />24/7 Customer Support</h6></li>
                            </ul>
                            <NavLink href to="/ProductDetalis" className="btn btn-primary py-2 px-4 my-2">Leran More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Product List Start */}
            <div className={`product-view ${value.theme}`}>
                <div className="container-fluid">
                    <h1 class={`${value.theme} text-center pt-5 pb-3`}>Services</h1>
                    <div className="row">
                        <div className="col-lg-8 p-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`product-view-top ${value.theme}`}>
                                        <div className='row'>
                                            {
                                                productsFilter.map((p) => {
                                                    return (
                                                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                                                            <div>
                                                                <div className="product-title">
                                                                    <span className='text-center d-block mb-2'>{p.category}</span>
                                                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>{p.name}</h5>
                                                                    <div className="ratting text-center mt-3">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                    </div>
                                                                </div>
                                                                <div className="text-center mt-3">
                                                                    <img src={p.Prof_img} width={90} height={90} className="mt-3" />
                                                                </div>
                                                                <div className="d-flex flex-column align-items-center py-4">
                                                                    <div className="product-action p-1 mb-2">
                                                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                                    </div>
                                                                    <h3 class={`${value.theme}`}><span>$</span>{p.price}</h3>
                                                                    <a href  onClick={() =>{Click();productsDetails(p)}} className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Side Bar Start */}
                        <div className="col-lg-4 sidebar">
                            <div className="sidebar-widget category">
                                <h2 className={`title text-primary`}>Category</h2>
                                <nav className="navbar">
                                    <ul className="navbar-nav shadow-lg p-5 bg-body rounded">
                                        <li className="nav-item">
                                            <NavLink to="/AirSevices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x text-primary fa-plane pr-3" />Air &amp; Freight</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/OcenSerivces" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-ship text-primary pr-3" />Ocean &amp; Freight</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/LandServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-truck text-primary pr-3" />Land &amp; Transport</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/cargoServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-store text-primary pr-3" />Cargo &amp; Storage</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="sidebar-widget widget-slider">
                                <div className="sidebar-slider normal-slider">
                                    <div className="col-md-12 mb-5 shadow-lg p-5 bg-body rounded">
                                        <div>
                                            <div className="text-center box3 mb-4">
                                                <img className="air1 color" src="img/air1.png" alt />
                                            </div>
                                            <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>Door-to-Door Services</h5>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <p>We can deliver your goods straight to your doorstep with utmost care through our vast network of agents and couriers around the world.</p>
                                                <NavLink href to="/ProductDetalis" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Side Bar End */}
                    </div>
                </div>
            </div>
            {/* Product List End */}
            {/* Pricing Plan Start */}
            {/* Pricing Plan End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>
    );
}

export default Services;