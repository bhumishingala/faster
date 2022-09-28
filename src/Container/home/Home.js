import { Form, Formik, useFormik } from 'formik';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';
import { getCategory } from '../../redux/action/Category_action';
import Services from '../services/servicesAdd.js/Services';

function Home() {
    const value = useContext(themeContext);
    const category = useSelector(state => state.category)
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        services: yup.string().required("Please Enter Any Services.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            services: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;
    console.log(category.category.length);


    return (
        <div class={`${value.theme}`}>
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-primary mb-4">Safe &amp; Faster</h1>
                    <h1 className="text-white display-3 mb-5">Logistics Services</h1>
                    <div className="mx-auto" style={{ width: '100%', maxWidth: 600 }}>
                        <div className="input-group">
                            <input type="text" className="form-control border-light" style={{ padding: 30 }} placeholder="Tracking Id" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-3">Track &amp; Trace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid w-100" src="img/about.jpg" alt />
                            <div className="bg-primary text-dark p-4">
                                <h3 className="m-0">25+ Years Experience</h3>
                            </div>
                        </div>
                        <div className="col-lg-7 justify-content-start">
                            <h6 className="text-primary text-uppercase font-weight-bold mr-auto">About Us</h6>
                            <h1 className={`mb-4 ${value.theme}`}>Trusted &amp; Faster Logistic Service Provider</h1>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <div className="d-flex align-items-center pt-2">
                                <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                    <span />
                                </button>
                                <h5 className={`font-weight-bold m-0 ml-4 ${value.theme}`}>Play Video</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Modal */}
                <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/*  Quote Request Start */}
            <div className="container-fluid  my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
                            <h1 className={`mb-4 ${value.theme}`}>Request A Free Quote</h1>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                                    <h6 className={`font-weight-boldmb-4 ${value.theme}`}>SKilled Experts</h6>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                                    <h6 className={`font-weight-boldmb-4 ${value.theme}`}>Happy Clients</h6>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                                    <h6 className={`font-weight-boldmb-4 ${value.theme}`}>Complete Projects</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-primary py-5 px-4 px-sm-5">
                                <Formik values={formik}>
                                    <Form className="py-5" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control border-0 p-4" placeholder="Your Name" onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-white'>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control border-0 p-4" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-white'>{errors.email && touched.email ? errors.email : ''}</p>
                                        </div>
                                        <div className="form-group">
                                            <select name="services" className="custom-select border-0 px-4" onChange={handleChange} onBlur={handleBlur} style={{ height: 47 }}>
                                                <option selected>Select A Service</option>
                                                <option value={1}>Air Freight Service</option>
                                                <option value={2}>Ocean Freight Service</option>
                                                <option value={3}>Land Transport Service</option>
                                                <option value={4}>Cargo Storage Service</option>
                                            </select>
                                            <p className='text-white'>{errors.services && touched.services ? errors.services : ''}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit">Get A Quote</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote Request Start */}
            {/* Services Start */}
            <Services />
            {/* Services End */}
            {/* Features Start */}
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid w-100" src="img/feature.jpg" alt />
                        </div>
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
                            <h1 className={`mb-4 ${value.theme}`}>Faster, Safe and Trusted Logistics Services</h1>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <ul className="list-inline">
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Best In Industry</h6>
                                </li><li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />Emergency Services</h6></li>
                                <li><h6 class={`${value.theme}`}><i className="far fa-dot-circle text-primary mr-3" />24/7 Customer Support</h6></li>
                            </ul>
                            <a href className="btn btn-primary mt-3 py-2 px-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Affordable Pricing Packages</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div>
                                <div className="text-center p-4">
                                    <h1 className={`display-4 mb-0 ${value.theme}`}>
                                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 2 }}>$</small>49<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 0 }}>/Mo</small>
                                    </h1>
                                </div>
                                <div className="bg-primary text-center p-4">
                                    <h3 className="m-0">Basic</h3>
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                    <NavLink href to="/ProductDetalis" onClick={() => Click()} className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div>
                                <div className="text-center p-4">
                                    <h1 className={`display-4 mb-0 ${value.theme}`}>
                                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 2 }}>$</small>99<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 0 }}>/Mo</small>
                                    </h1>
                                </div>
                                <div className="bg-primary text-center p-4">
                                    <h3 className="m-0">Premium</h3>
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                    <NavLink href to="/ProductDetalis" onClick={() => Click()} className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div>
                                <div className="text-center p-4">
                                    <h1 className={`display-4 mb-0 ${value.theme}`}>
                                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 2 }}>$</small>149<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 0 }}>/Mo</small>
                                    </h1>
                                </div>
                                <div className="bg-primary text-center p-4">
                                    <h3 className="m-0">Business</h3>
                                </div>
                                <div className="d-flex flex-column align-items-center py-4">
                                    <p>HTML5 &amp; CSS3</p>
                                    <p>Bootstrap 4</p>
                                    <p>Responsive Layout</p>
                                    <p>Compatible With All Browsers</p>
                                    <NavLink href to="/ProductDetalis" onClick={() => Click()} className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan End */}
            {/* Team Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Delivery Team</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Meet Our Delivery Team</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-5">
                                <img className="card-img-top" src="img/team-1.jpg" alt />
                                <div className="card-body text-center p-0">
                                    <div className={`team-text d-flex flex-column justify-content-center ${value.theme}`}>
                                        <h5 className={`font-weight-bold ${value.theme}`}>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-5">
                                <img className="card-img-top" src="img/team-2.jpg" alt />
                                <div className="card-body text-center p-0">
                                    <div className={`team-text d-flex flex-column justify-content-center ${value.theme}`}>
                                        <h5 className={`font-weight-bold ${value.theme}`}>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-5">
                                <img className="card-img-top" src="img/team-3.jpg" alt />
                                <div className="card-body text-center p-0">
                                    <div className={`team-text d-flex flex-column justify-content-center ${value.theme}`}>
                                        <h5 className={`font-weight-bold ${value.theme}`}>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team card position-relative overflow-hidden border-0 mb-5">
                                <img className="card-img-top" src="img/team-4.jpg" alt />
                                <div className="card-body text-center p-0">
                                    <div className={`team-text d-flex flex-column justify-content-center ${value.theme}`}>
                                        <h5 className={`font-weight-bold ${value.theme}`}>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>

    );
}

export default Home;