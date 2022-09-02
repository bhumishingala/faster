import { Form, Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';

function Footer(props) {
    const value = useContext(themeContext);

    console.log(value);
    let schema = yup.object().shape({
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

    return (
        <div>
            <div className={`container-fluid bg-dark mr-5 mt-5 py-5 px-sm-3 px-md-5 ${value.theme}`}>
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-6">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h3 className="text-primary mb-4">Get In Touch</h3>
                                <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                                <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className={`btn btn-outline-light btn-social mr-2 ${value.theme}`} href="#"><i className="fab fa-twitter" /></a>
                                    <a className={`btn btn-outline-light btn-social mr-2 ${value.theme}`}  href="#"><i className="fab fa-facebook-f" /></a>
                                    <a className={`btn btn-outline-light btn-social mr-2 ${value.theme}`}  href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a className={`btn btn-outline-light btn-social mr-2 ${value.theme}`}  href="#"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5z">
                                <h3 className="text-primary mb-4">Quick Links</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className={`mb-2 ${value.theme}`} href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                                    <a className={`mb-2 ${value.theme}`} href="#"><i className="fa fa-angle-right mr-2" />About Us</a>
                                    <a className={`mb-2 ${value.theme}`} href="#"><i className="fa fa-angle-right mr-2" />Our Services</a>
                                    <a className={`mb-2 ${value.theme}`} href="#"><i className="fa fa-angle-right mr-2" />Pricing Plan</a>
                                    <a className={`mb-2 ${value.theme}`} href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                                    <Link className={`nav-link py-0 mb-2 ${value.theme}`} to="/rexexample"><i className="fa fa-angle-right mr-2" />Ref Example</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Newsletter</h3>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit} className="w-100">
                                <div className="input-group">
                                    <input type="text" name="email" className="form-control border-light" style={{ padding: 30 }} placeholder="Your Email Address" onChange={handleChange} onBlur={handleBlur} />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-primary px-4">Sign Up</button>
                                    </div>
                                </div>
                                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className={`container-fluid bg-dark  border-top py-4 px-sm-3 px-md-5 ${value.theme}`} style={{ borderColor: '#3E3E4E !important' }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className={`m-0 ${value.theme}`}>© <a href="#">Your Site Name</a>. All Rights Reserved.
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                            <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className={`nav-link py-0 ${value.theme}`} href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link py-0 ${value.theme}`} href="#">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link py-0 ${value.theme}`} href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link py-0 ${value.theme}`} href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;