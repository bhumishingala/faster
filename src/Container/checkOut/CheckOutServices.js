import React, { useContext, useEffect, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { CheckOutAction } from '../../redux/action/CheckOut.action';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';

function CheckOutServices(props) {
    const value = useContext(themeContext);
    const dispatch = useDispatch();
    const checkout = useSelector(state => state.checkOut)

    let schema = yup.object().shape({
        fname: yup.string().matches(/^[a-zA-Z\s]+$/, "Enter a valid First Name").required("Please Enter First Name."),
        lname: yup.string().matches(/^[a-zA-Z\s]+$/, "Enter a valid Last Name").required("Please Enter Last Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter a valid phone number').min(10, "too short").max(10, "too short").required('Phone number is required'),
        Address1: yup.string().required("Please Enter Address."),
        Address2: yup.string().required("Please Enter Address."),
        country: yup.string().matches(/^[a-zA-Z\s]+$/, "Enter a valid Country Name").required("Please Enter Country."),
        city: yup.string().matches(/^[a-zA-Z\s]+$/, "Enter a valid City Name").required("Please Enter City."),
        state: yup.string().matches(/^[a-zA-Z\s]+$/, "Enter a valid State Name").required("Please Enter state."),
        zipcode: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter a valid Zip Number number').min(6, "too short").max(6, "too short").required("Please Enter Zip Code."),
        payment: yup.string().required("Please Selecet Any Payment Method.")
    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            Address1: '',
            Address2: '',
            country: '',
            city: '',
            state: '',
            zipcode: '',
            payment: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleInsert(values);
        },
        enableReinitialize: true
    });

    const handleInsert = (values) => {
        dispatch(CheckOutAction(values));
        formik.resetForm(values)
    }

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

    let subTotal = 0
    function productTotal(price, services) {
        subTotal = subTotal + Number(price * services)
        return Number(price * services)
    }

    console.log(checkout.checkUser);

    return (
        <div class={`${value.theme}`}>
            {/* Checkout Start */}
            <div className="container-fluid py-5">
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit}>
                        <div className="row px-xl-5">
                            {
                                checkout.checkUser == null ?
                                    <>
                                        <div className="col-lg-8">
                                            <h5 className="section-title position-relative text-uppercase mb-3"><h4 className="text-primary mb-4">Billing Address</h4></h5>
                                            <div className={`p-30 mb-5 shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`}>
                                                <div className="row d-flex">
                                                    <div className="col-md-6 form-group">
                                                        <label class={`${value.theme}`}>First Name</label>
                                                        <input className="form-control" type="text" placeholder="John" name="fname" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.fname && touched.fname ? <p>{errors.fname}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>Last Name</label>
                                                        <input className="form-control" type="text" placeholder="Doe" name="lname" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.lname && touched.lname ? <p>{errors.lname}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>E-mail</label>
                                                        <input className="form-control" type="text" placeholder="example@email.com" name="email" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.email && touched.email ? <p>{errors.email}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>Mobile No</label>
                                                        <input className="form-control" type="text" placeholder="+123 456 789" name="phone" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.phone && touched.phone ? <p>{errors.phone}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>Address Line 1</label>
                                                        <input className="form-control" type="text" placeholder="123 Street" name="Address1" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.Address1 && touched.Address1 ? <p>{errors.Address1}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>Address Line 2</label>
                                                        <input className="form-control" type="text" placeholder="123 Street" name="Address2" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.Address2 && touched.Address2 ? <p>{errors.Address2}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>Country</label>
                                                        <input className="form-control" type="text" placeholder="123 Street" name="country" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.country && touched.country ? <p>{errors.country}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>City</label>
                                                        <input className="form-control" type="text" placeholder="New York" name="city" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.city && touched.city ? <p>{errors.city}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>State</label>
                                                        <input className="form-control" type="text" placeholder="New York" name="state" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.state && touched.state ? <p>{errors.state}</p> : ''}
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label>ZIP Code</label>
                                                        <input className="form-control" type="text" placeholder={123} name="zipcode" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.zipcode && touched.zipcode ? <p>{errors.zipcode}</p> : ''}
                                                    </div>
                                                    <div className="margin justify-content-center"><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block">Place Order</button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="text-primary">Order Total</span></h5>
                                            <div className={`shadow-lg p-3 mb-5 bg-body rounded p-30 mb-5 ${value.theme}`}>
                                                <div className="border-bottom">
                                                    <h6 className="mb-3">Products</h6>
                                                    {
                                                        props.location.state.checkOutOrder.map((ch) => {
                                                            return (
                                                                <div className="d-flex justify-content-between">
                                                                    <p>{ch.name}</p>
                                                                    <p className='ml-5'>${productTotal(ch.price, ch.services)}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="border-bottom pt-3 pb-2">
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <h6 class={`${value.theme}`}>Subtotal</h6>
                                                        <h6 class={`${value.theme}`}>${subTotal}</h6>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className={`font-weight-medium ${value.theme}`}>Shipping</h6>
                                                        <h6 className={`font-weight-medium ${value.theme}`}>$10</h6>
                                                    </div>
                                                </div>
                                                <div className="pt-2">
                                                    <div className="d-flex justify-content-between mt-2">
                                                        <h5 class={`${value.theme}`}>Total</h5>
                                                        <h5 class={`${value.theme}`}>${subTotal + 10}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-5 shadow-lg p-3 mb-5 bg-body rounded p-30">
                                                <h5 class="section-title position-relative text-uppercase mb-3"><span class={`pr-3 ${value.theme}`}>Payment</span></h5>
                                                <div class={`p-30 ${value.theme}`} onChange={handleChange} onBlur={handleBlur}>
                                                    <div class="form-group" >
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" value="Direct-Check" name="payment" id="directcheck" />
                                                            <label class="custom-control-label" for="directcheck">Direct Check</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-4">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" value="Cash-on-Delivery" name="payment" id="banktransfer" />
                                                            <label class="custom-control-label" for="banktransfer">Cash on Delivery</label>
                                                        </div>
                                                    </div>
                                                    {errors.payment && touched.payment ? <p>{errors.payment}</p> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                    :
                                    <div className="col-lg-12">
                                        <h3 className='text-center'><CheckCircleOutlineIcon sx={{ color: green[500] }} />order SuccessFully</h3>
                                    </div>
                            }
                        </div>
                    </Form>
                </Formik>
            </div>
            {/* Checkout End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div >
    );
}

export default CheckOutServices;