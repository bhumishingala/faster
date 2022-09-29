import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../../contextapi/ThemeContext';
import { getProducts } from '../../../redux/action/Products_action';

function Products(props) {
    const value = useContext(themeContext);
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    console.log(props);

    return (
        <div>
            <div className="row">
                {
                    products.Products.map((p) => {
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
                                            <NavLink href="#" to={"/ProductDetalis"} onClick={() => Click()} className="m-2"><i className="fa fa-cart-plus" /></NavLink>
                                            <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                            <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                        </div>
                                        <h3 class={`${value.theme}`}><span>$</span>{p.price}</h3>
                                        <NavLink href to="/ProductDetalis" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;