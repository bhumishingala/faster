import React, { useContext } from 'react';
import { themeContext } from '../../contextapi/ThemeContext';

function AboutUs(props) {
    const value = useContext(themeContext);
    return (
        <div class={`${value.theme}`}>
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">About</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">About</p>
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
                                <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
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
                                {/* 16:9 aspect ratio */}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Features Start */}
            <div className={`container-fluid  my-5 ${value.theme}`}>
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

export default AboutUs;