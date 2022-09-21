import { Form, Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';

function Blogdetail(props) {
    const value = useContext(themeContext); 
    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        website: yup.string().required("Please Enter Website Name."),
        message : yup.string().required("Please Enter Message.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            website: '',
            message :''
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
                    <h1 className="text-white display-3">Blog Detail</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Blog Detail</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Blog Start */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="pb-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/blog-1.jpg" alt />
                                <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle" style={{ width: 60, height: 60, bottom: '-30px', right: 30 }}>
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className={`mb-3 ${value.theme}`} style={{ padding: 30 }}>
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" style={{ width: 40, height: 40 }} src="img/user.jpg" alt />
                                        <a className="text-muted ml-2" href>John Doe</a>
                                    </div>
                                    <div className="d-flex align-items-center ml-4">
                                        <i className="far fa-bookmark text-primary" />
                                        <a className="text-muted ml-2" href>Web Design</a>
                                    </div>
                                </div>
                                <h4 className={`font-weight-bold mb-3 ${value.theme}`}>Kasd tempor diam sea justo dolor</h4>
                                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                    magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                    amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                    sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                    sit stet no diam kasd vero.</p>
                                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                    vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                    nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                    ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                    clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                    justo dolore sit invidunt.</p>
                                <h4 className={`mb-3 ${value.theme}`}>Est dolor lorem et ea</h4>
                                <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/blog-1.jpg" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>
                                <h5 className={`mb-3 ${value.theme}`}>Est dolor lorem et ea</h5>
                                <img className="img-fluid w-50 float-right ml-4 mb-2" src="img/blog-2.jpg" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                    aliquyam et ut.</p>
                            </div>
                        </div>
                        {/* Blog Detail End */}
                        {/* Comment List Start */}
                        <div className={` shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`} style={{ padding: 30, marginBottom: 30 }}>
                            <h3 className={`mb-4 ${value.theme}`}>3 Comments</h3>
                            <div className="media mb-4">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                <div className="media-body">
                                    <h6 class={`${value.theme}`}><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="btn btn-sm btn-light">Reply</button>
                                </div>
                            </div>
                            <div className="media">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                <div className="media-body">
                                    <h6 class={`${value.theme}`}><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="btn btn-sm btn-light">Reply</button>
                                    <div className="media mt-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                        <div className="media-body">
                                            <h6 class={`${value.theme}`}><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                                ipsum diam tempor consetetur at sit.</p>
                                            <button className="btn btn-sm btn-light">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        <div className={`mb-3 shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`} style={{ padding: 30 }}>
                            <h3 className={`mb-4 ${value.theme}`}>Leave a comment</h3>
                            <Formik values={formik}>
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" className="form-control border-0" id="name" name="name" onChange={handleChange} onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.name && touched.name ?errors.name : ''}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" className="form-control border-0" id="email" name="email" onChange={handleChange} onBlur={handleBlur}/>
                                        <p className='text-danger'>{errors.email && touched.email ?errors.email : ''}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website">Website</label>
                                        <input type="url" className="form-control border-0" id="website"  name="website" onChange={handleChange} onBlur={handleBlur}/>
                                        <p className='text-danger'>{errors.website && touched.website ?errors.website : ''}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea id="message" cols={30} rows={5} className="form-control border-0" defaultValue={""} name="message" onChange={handleChange} onBlur={handleBlur}/>
                                        <p className='text-danger'>{errors.message && touched.message ?errors.message : ''}</p>
                                    </div>
                                    <div className="form-group mb-0">
                                        <input type="submit" defaultValue="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        {/* Comment Form End */}
                    </div>
                    {/* Sidebar Start */}
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        {/* Search Form Start */}
                        <div className="mb-5 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className={`${value.theme}`} style={{ padding: 30 }}>
                                <div className="input-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Keyword" />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-primary border-primary text-white"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Search Form End */}
                        {/* Category Start */}
                        <div className="mb-5">
                            <h3 className={`mb-4 ${value.theme}`}>Categories</h3>
                            <div className={`bg-secondary ${value.theme}`} style={{ padding: 30 }}>
                                <ul className="list-inline m-0 shadow-lg p-3 mb-5 bg-body rounded">
                                    <li className={`mb-1 py-2 px-3 d-flex justify-content-between align-items-center ${value.theme}`}>
                                        <a className={`${value.theme}`} href="#"><i className="fa fa-angle-right text-primary mr-2" />Web Design</a>
                                        <span className="badge badge-secondary badge-pill">150</span>
                                    </li>
                                    <li className={`mb-1 py-2 px-3 d-flex justify-content-between align-items-center ${value.theme}`}>
                                        <a className={`${value.theme}`} href="#"><i className="fa fa-angle-right text-primary mr-2" />Web Development</a>
                                        <span className="badge badge-secondary badge-pill">131</span>
                                    </li>
                                    <li className={`mb-1 py-2 px-3 d-flex justify-content-between align-items-center ${value.theme}`}>
                                        <a className={`${value.theme}`} href="#"><i className="fa fa-angle-right text-primary mr-2" />Online Marketing</a>
                                        <span className="badge badge-secondary badge-pill">78</span>
                                    </li>
                                    <li className={`mb-1 py-2 px-3 d-flex justify-content-between align-items-center ${value.theme}`}>
                                        <a className={`${value.theme}`} href="#"><i className="fa fa-angle-right text-primary mr-2" />Keyword Research</a>
                                        <span className="badge badge-secondary badge-pill">56</span>
                                    </li>
                                    <li className={`py-2 px-3 bg-light d-flex justify-content-between align-items-center ${value.theme}`}>
                                        <a className={`${value.theme}`} href="#"><i className="fa fa-angle-right text-primary mr-2" />Email Marketing</a>
                                        <span className="badge badge-secondary badge-pill">98</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Category End */}
                        {/* Recent Post Start */}
                        <div className="mb-5">
                            <h3 className={`mb-4 ${value.theme}`}>Recent Post</h3>
                            <div className="d-flex mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className={`d-flex align-items-center text-decoration-none px-3 ${value.theme}`} style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className={`d-flex align-items-center text-decoration-none px-3 ${value.theme}`} style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className={`d-flex align-items-center text-decoration-none px-3 ${value.theme}`} style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className={`d-flex align-items-center text-decoration-none px-3 ${value.theme}`} style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className={`d-flex align-items-center text-decoration-none px-3 ${value.theme}`} style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                        </div>
                        {/* Recent Post End */}
                        {/* Image Start */}
                        <div className="mb-5">
                            <img src="img/blog-1.jpg" alt className="img-fluid" />
                        </div>
                        {/* Image End */}
                        {/* Tags Start */}
                        <div className="mb-5">
                            <h3 className={`mb-4 ${value.theme}`}>Tag Cloud</h3>
                            <div className="d-flex flex-wrap m-n1">
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>Design</a>
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>Development</a>
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>Marketing</a>
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>SEO</a>
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>Writing</a>
                                <a href className={`btn m-1 shadow-lg bg-body rounded ${value.theme}`}>Consulting</a>
                            </div>
                        </div>
                        {/* Tags End */}
                        {/* Image Start */}
                        <div className="mb-5">
                            <img src="img/blog-2.jpg" alt className="img-fluid" />
                        </div>
                        {/* Image End */}
                        {/* Plain Text Start */}
                        <div>
                            <h3 className={`mb-4 ${value.theme}`}>Plain Text</h3>
                            <div className={`text-center shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`} style={{ padding: 30 }}>
                                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                <a href className="btn btn-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                        {/* Plain Text End */}
                    </div>
                    {/* Sidebar End */}
                </div>
            </div>
            {/* Blog End */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>

    );
}

export default Blogdetail;