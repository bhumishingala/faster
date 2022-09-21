import React, { useContext } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';

function CheckOutServices(props) {
    const value = useContext(themeContext);

    let schema = yup.object().shape({
        fname: yup.string().required("Please Enter First Name."),
        lname: yup.string().required("Please Enter Last Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        phone: yup.string().required("Please Enter Mobile Number"),
        Address1: yup.string().required("Please Enter Address."),
        Address2: yup.string().required("Please Enter Address."),
        country: yup.string().required("Please Enter Country."),
        city: yup.string().required("Please Enter City."),
        state: yup.string().required("Please Enter state."),
        zipcode: yup.number().required("Please Enter Zip Code."),
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
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;
    return (
        <div class={`${value.theme}`}>
            {/* Checkout Start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <h5 className="section-title position-relative text-uppercase mb-3"><h4 className="text-primary mb-4">Billing Address</h4></h5>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit}>
                                <div className={`p-30 mb-5 shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`}>
                                    <div className="row">
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
                                            <select className="custom-select" name="country" onChange={handleChange} onBlur={handleBlur}>
                                                <option selected>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                            </select>
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
                                        <div className="margin justify-content-center"><button type="submit" className="btn btn-primary py-2 px-4 d-none d-lg-block">Submit</button></div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="text-primary pr-3">Order Total</span></h5>
                        <div className={`shadow-lg p-3 mb-5 bg-body rounded p-30 mb-5 ${value.theme}`}>
                            <div className="border-bottom">
                                <h6 className="mb-3">Products</h6>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 1</p>
                                    <p>$150</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 2</p>
                                    <p>$150</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 3</p>
                                    <p>$150</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 4</p>
                                    <p>$150</p>
                                </div>
                            </div>
                            <div className="border-bottom pt-3 pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6 class={`${value.theme}`}>Subtotal</h6>
                                    <h6 class={`${value.theme}`}>$150</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className={`font-weight-medium ${value.theme}`}>Shipping</h6>
                                    <h6 className={`font-weight-medium ${value.theme}`}>$10</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 class={`${value.theme}`}>Total</h5>
                                    <h5 class={`${value.theme}`}>$160</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div >
    );
}

export default CheckOutServices;