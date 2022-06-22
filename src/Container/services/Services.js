import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import List from '../../component/list/List';
import * as yup from 'yup';

function Services(props) {
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


    const data = [
        {
            id: 101,
            name: 'John Doe',
            service: 'Air Freight',
            price: '$99',
            expriance: '25+'
        },
        {
            id: 102,
            name: "John Doe",
            service: "Ocean Freight",
            price: '$49',
            expriance: '24+'
        },
        {
            id: 103,
            name: "John Doe",
            service: "Land Transport",
            price: '$149',
            expriance: '20+'
        },
        {
            id: 104,
            name: "John Doe",
            service: "Cargo Storage",
            price: '$99',
            expriance: '18+'
        },
    ]

    const get = (id) => {
        console.log(id);
    }

    return (
        <div>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Service</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Service</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Services Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                        <h1 className="mb-4">Best Logistic Services</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-3 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                                <i className="fa fa-2x fa-plane text-dark pr-3" />
                                <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
                            </div>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                            <a className="border-bottom text-decoration-none" href>Read More</a>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                                <i className="fa fa-2x fa-ship text-dark pr-3" />
                                <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                            </div>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                            <a className="border-bottom text-decoration-none" href>Read More</a>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                                <i className="fa fa-2x fa-truck text-dark pr-3" />
                                <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
                            </div>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                            <a className="border-bottom text-decoration-none" href>Read More</a>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                                <i className="fa fa-2x fa-store text-dark pr-3" />
                                <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
                            </div>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                            <a className="border-bottom text-decoration-none" href>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/*  Quote Request Start */}
            <div className="container-fluid bg-secondary my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
                            <h1 className="mb-4">Request A Free Quote</h1>
                            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                                    <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                                    <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                                    <h6 className="font-weight-bold mb-4">Complete Projects</h6>
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
                                                <option value={1}>Service 1</option>
                                                <option value={2}>Service 1</option>
                                                <option value={3}>Service 1</option>
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
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                        <h1 className="mb-4">Our Clients Say</h1>
                    </div>
                    <div>
                        <List 
                            isData = {data} 
                            getId = {get}
                        />
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </div>

    );
}

export default Services;