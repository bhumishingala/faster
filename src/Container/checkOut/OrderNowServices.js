import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormGroup, Input } from 'reactstrap';
import { themeContext } from '../../contextapi/ThemeContext';
import { history } from '../../history';
import { addCart, decrementAction, deleteCart, getCart, incrementAction } from '../../redux/action/Cart_action';

function OrderNowServices(props) {
    const value = useContext(themeContext);
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const checkout = useSelector(state => state.checkOut)
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    const increment = (id) => {
        dispatch(incrementAction(id))
    }

    const decrement = (id) => {
        dispatch(decrementAction(id))
    }

    console.log(cart.cart);
    const orderFilter = []
    products.Products.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                orderFilter.push({ ...p, services: c.services })
            }
        })
    })
    console.log(orderFilter);

    let subTotal = 0
    function productTotal(price, services) {
        subTotal = subTotal + Number(price * services)
        return Number(price * services)
    }

    const checkOutUser = (checkOutOrder) => {
        history.push('/checkOut', { checkOutOrder: checkOutOrder })
    }

    return (
        <div class={`${value.theme}`}>
            <div className="container-fluid py-5">
                <h1 className="text-primary mb-4 text-center">Order Now</h1>
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className={`table table-light table-borderless table-hover text-center mb-0 hadow-lg p-3 mb-5 bg-body rounded ${value.theme}`}>
                            {
                                orderFilter.length > 0 ?
                                    checkout.checkUser == null ? 
                                    <>
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Category</th>
                                                <th>Services</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="white">
                                            {
                                                orderFilter.map((orderC, i) => {
                                                    return (
                                                        <>
                                                            <tr className='justify-content-center' key={i}>
                                                                <td className='align-middle'><img src={orderC.Prof_img} style={{ width: 100 }} /></td>
                                                                <td className="align-middle">{orderC.name}</td>
                                                                <td className="align-middle">${orderC.price}</td>
                                                                <td className="align-middle">
                                                                    <div className="input-group quantity mx-auto mt-3" style={{ width: 100 }}>
                                                                        <FormGroup style={{ width: 100 }}>
                                                                            <div class="input-group quantity mx-auto">
                                                                                <div class="input-group-btn">
                                                                                    <button class="btn btn-sm btn-primary btn-minus" onClick={() => decrement(orderC.id)}>
                                                                                        <i class="fa fa-minus"></i>
                                                                                    </button>
                                                                                </div>
                                                                                <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value={orderC.services} />
                                                                                <div class="input-group-btn">
                                                                                    <button class="btn btn-sm btn-primary btn-plus" onClick={() => increment(orderC.id)}>
                                                                                        <i class="fa fa-plus"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </FormGroup>
                                                                    </div>

                                                                </td>
                                                                <td className="align-middle">${productTotal(orderC.price, orderC.services)}</td>
                                                                <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={() => dispatch(deleteCart(orderC.id))}><i class="fa fa-times"></i></button></td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </>
                                    : 
                                    orderFilter.length == 0
                                    :
                                    <h3 className={`${value.theme}`}>Cart is Empty</h3>

                            }
                        </table>
                    </div>
                    <div className={`col-lg-4 ${value.theme}`}>
                        <h5 className="section-title position-relative text-uppercase my-4"><span className={`pr-3 ${value.theme}`}>Cart Summary</span></h5>
                        <div className="bg-light p-30 mb-5 white">
                            <div className="border-bottom p-3">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>${subTotal}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>${subTotal + 10}</h5>
                                </div>
                                <a onClick={() => checkOutUser(orderFilter)} className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>
    );
}

export default OrderNowServices;