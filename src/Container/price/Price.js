import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../contextapi/ThemeContext';
import { history } from '../../history';
import { addCart } from '../../redux/action/Cart_action';
import ProductsDetalis from '../services/ProductsDetalis';

function Price(props) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const value = useContext(themeContext);
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const OrderNow = (orderFilter) => {
        history.push('/orderNow', { orderFilter: orderFilter }, dispatch(addCart(orderFilter)))
        console.log(orderFilter);
    }

    return (
        <div class={`${value.theme}`}>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Price</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Price</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Affordable Pricing Packages</h1>
                    </div>
                    <div className="row">
                        {
                            products.Products.map((p) => {
                                if (p.price < 90) {
                                    return (
                                        <>
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
                                                        <a href onClick={() => { Click(); OrderNow(p) }} className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            })
                        }
                        {/* <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>Air Freight</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>WORLDWIDE CONSOLIDATIONS</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/air2.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>90</h3>
                                    <a href onClick={() => OrderNow()} className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>Ocean Freight</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>FULL CONTAINER LOAD (FCL)</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/sea1.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>100</h3>
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>cargo storage</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>E-FULFILLMENT</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/cargo2.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>95</h3>
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>Air Freight</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>TOP URGENT DIRECT</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/air3.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>100</h3>
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>Land tansport</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>CROSS-BORDER</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/land1.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>108</h3>
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 height shadow-sm p-5 bg-body rounded">
                            <div>
                                <div className="product-title">
                                    <span className='text-center d-block mb-2'>cargo storage</span>
                                    <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>REVERSE LOGISTICS</h5>
                                    <div className="ratting text-center mt-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <img src="img/cargo3.png" width={90} height={90} className="mt-3" />
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <div className="product-action p-1 mb-2">
                                        <a href="#" onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                        <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                    </div>
                                    <h3 class={`${value.theme}`}><span>$</span>75</h3>
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Pricing Plan End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>

    );
}

export default Price;