import React, { useContext } from 'react';
import { themeContext } from '../../contextapi/ThemeContext';

function Price(props) {
    const value = useContext(themeContext)
    return (
        <div class={`${value.theme}`}>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Price</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Price</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Affordable Pricing Packages</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5 shadow-lg p-3 mb-5 bg-body rounded">
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
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 shadow-lg p-3 mb-5 bg-body rounded">
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
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 shadow-lg p-3 mb-5 bg-body rounded">
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
                                    <a href className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan End */}
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Our Clients Say</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="position-relative bg-secondary p-4">
                            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt />
                                <div className="ml-3">
                                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                                    <small>- Profession</small>
                                </div>
                            </div>
                            <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                        </div>
                        <div className="position-relative bg-secondary p-4">
                            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt />
                                <div className="ml-3">
                                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                                    <small>- Profession</small>
                                </div>
                            </div>
                            <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                        </div>
                        <div className="position-relative bg-secondary p-4">
                            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt />
                                <div className="ml-3">
                                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                                    <small>- Profession</small>
                                </div>
                            </div>
                            <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                        </div>
                        <div className="position-relative bg-secondary p-4">
                            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style={{ width: 60, height: 60 }} alt />
                                <div className="ml-3">
                                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                                    <small>- Profession</small>
                                </div>
                            </div>
                            <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </div>

    );
}

export default Price;