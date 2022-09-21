import { Form, Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';

function Getquote(props) {
    const value = useContext(themeContext);
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
    return (
        <div class={`${value.theme}`}>
            <div className="container-fluid  py-5">
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
        </div>
    );
}

export default Getquote;