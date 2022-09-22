import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormGroup, Input } from 'reactstrap';
import { themeContext } from '../../contextapi/ThemeContext';

function OrderNowServices(props) {
    const value = useContext(themeContext);
    const dispatch = useDispatch()
    return (
        <div class={`${value.theme}`}>
            <div className="container-fluid py-5">
                <h1 className="text-primary mb-4 text-center">Order Now</h1>
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0 hadow-lg p-3 mb-5 bg-body rounded">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Services</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="white">
                                <tr>
                                    <td className="align-middle"><img src="img/ser1.jpg" alt style={{ width: 80 }} /> Air Freight</td>
                                    <td className="align-middle">$200</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                            <FormGroup style={{ width: 100 }}>
                                                <Input
                                                    id="exampleNumber"
                                                    name="number"
                                                    placeholder="number"
                                                    defaultValue={1}
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </div>

                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                                </tr>
                                <tr>
                                    <td className="align-middle"><img src="img/ser2.jpg" alt style={{ width: 80 }} /> Ocean Fr.</td>
                                    <td className="align-middle">$200</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                            <FormGroup style={{ width: 100 }}>
                                                <Input
                                                    id="exampleNumber"
                                                    name="number"
                                                    placeholder="number"
                                                    defaultValue={1}
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </div>

                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                                </tr>
                                <tr>
                                    <td className="align-middle "><img src="img/ser3.jpg" alt style={{ width: 80 }} /> Land Tras.</td>
                                    <td className="align-middle">$200</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                            <FormGroup style={{ width: 100 }}>
                                                <Input
                                                    id="exampleNumber"
                                                    name="number"
                                                    placeholder="number"
                                                    defaultValue={1}
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </div>

                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                                </tr>
                                <tr>
                                    <td className="align-middle"><img src="img/ser4.jpg" alt style={{ width: 80 }} /> Cargo Sto.</td>
                                    <td className="align-middle">$200</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                            <FormGroup style={{ width: 100 }}>
                                                <Input
                                                    id="exampleNumber"
                                                    name="number"
                                                    placeholder="number"
                                                    defaultValue={1}
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </div>

                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`col-lg-4 ${value.theme}`}>
                        <form className="mb-30" action>
                            <div className="input-group">
                                <input type="text" className="white form-control border-0 p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase my-4"><span className={`pr-3 ${value.theme}`}>Cart Summary</span></h5>
                        <div className="bg-light p-30 mb-5 white">
                            <div className="border-bottom p-3">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>$160</h5>
                                </div>
                                <NavLink to="/checkOut" className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</NavLink>
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