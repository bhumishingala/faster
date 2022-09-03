import { Form, Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';

function Contact(props) {
    const value = useContext(themeContext);
    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        subject: yup.string().max(30,"It's to 30 character").required("Please Enter Any Subject."),
        message: yup.string().required("Please Enter Any Message.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message : ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

    return (
        <div class={`${value.theme}`}>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Contact</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Contact</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <div className="bg-primary text-dark text-center p-4">
                                <h4 className="m-0"><i className="fa fa-map-marker-alt text-white mr-2" />123 Street, New York, USA</h4>
                            </div>
                            <iframe style={{ width: '100%', height: 470 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-lg-7 shadow-lg p-3 mb-5 bg-body rounded">
                            <h6 className="text-primary text-uppercase font-weight-bold">Contact Us</h6>
                            <h1 className={`mb-4 ${value.theme}`}>Contact For Any Queries</h1>
                            <div className={`contact-form ${value.theme}`} style={{ padding: 30 }}>
                                <div id="success" />
                                <Formik values={formik}>
                                    <Form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" name="name" data-validation-required-message="Please enter your name" onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-danger'>{errors.name &&  touched.name ? errors.name : ''}</p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" name="email" data-validation-required-message="Please enter your email" onChange={handleChange} onBlur={handleBlur}/>
                                            <p className='text-danger'>{errors.email &&  touched.email ? errors.email : ''}</p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" name="subject" data-validation-required-message="Please enter a subject" onChange={handleChange} onBlur={handleBlur}/>
                                            <p className='text-danger'>{errors.subject &&  touched.subject ? errors.subject : ''}</p>
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control border-0 py-3 px-4" rows={3} id="message" placeholder="Message" name="message" data-validation-required-message="Please enter your message" defaultValue={""} onChange={handleChange} onBlur={handleBlur}/>
                                            <p className='text-danger'>{errors.message &&  touched.message ? errors.message : ''}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send
                                                Message</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    );
}

export default Contact;