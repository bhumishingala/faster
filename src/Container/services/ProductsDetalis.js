import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { themeContext } from '../../contextapi/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementACtion } from '../../redux/action/Counter_action';
import { history } from '../../history';

function ProductsDetalis(props) {
    const dispatch = useDispatch();
    const c = useSelector(state => state.counter);
    const category = useSelector(state => state.category);
    const products = useSelector(state => state.products);
    const value = useContext(themeContext);
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const increment = () => {
        dispatch(incrementACtion())
    }

    const decrement = () => {
        dispatch(decrementAction())
    }

    let schema = yup.object().shape({
        fname: yup.string().required("Please Enter First Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        phone: yup.string().required("Please Enter Mobile Number"),
    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            email: '',
            phone: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
        enableReinitialize: true
    });

    const OrderNow = (orderFilter) => {
        history.push('/orderNow' , {orderFilter : orderFilter})
        console.log(orderFilter);
    }

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

    let productsFilter = products.Products.filter((p) => p.name === props.location.state.Prodetalis.name)
    console.log(productsFilter);
    console.log(props.location.state.Prodetalis.name, props.location.state.Prodetalis.category);

    return (
        <div>
            {/* Product Detail Start */}
            <div className={`product-detail py-5 ${value.theme}`}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="product-detail-top">
                                {
                                    category.category.map((cd) => {
                                        if(cd.name === props.location.state.Prodetalis.category){
                                            return (
                                                <div className="row align-items-center col-12">
                                                    <div className="col-md-5 ml-5 margin1">
                                                        <div className="product-slider-single normal-slider">
                                                            <img src={cd.Prof_img} width={580} height={350} alt="Product Image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 margin1 pl-3">
                                                        <div className="product-content">
                                                            <div className="title"><h2 className={`${value.theme}`}>{cd.name}</h2></div>
                                                            <div className="ratting">
                                                                <i className="fa fa-star text-primary" />
                                                                <i className="fa fa-star text-primary" />
                                                                <i className="fa fa-star text-primary" />
                                                                <i className="fa fa-star text-primary" />
                                                                <i className="fa fa-star text-primary" />
                                                            </div>
                                                            <div className="price">
                                                                <h4 className={`mt-3 ${value.theme}`}>Price:</h4>
                                                                <p className='text-primary'>$99 <span>$149</span></p>
                                                            </div>
                                                            <div className="quantity mt-3">
                                                                <h4 class={`${value.theme}`}>Quantity:</h4>
                                                                <div class="input-group quantity mx-auto">
                                                                    <div class="input-group-btn">
                                                                        <button class="btn btn-sm btn-primary btn-minus" onClick={() => decrement()}>
                                                                            <i class="fa fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                    <input type="text" class="form-control-sm bg-secondary border-0 text-center" value={c.counter} />
                                                                    <div class="input-group-btn">
                                                                        <button class="btn btn-sm btn-primary btn-plus" onClick={() => increment()}>
                                                                            <i class="fa fa-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className="row product-detail-bottom py-5">
                                <div className="col-lg-12">
                                    <ul className="nav nav-pills nav-justified">
                                        <li className={`nav-item `}>
                                            <a className="nav-link active mb-5 border" data-toggle="pill" href="#description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link border" data-toggle="pill" href="#specification">Specification</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link border" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="description" className="container tab-pane active">
                                            <h4 className='text-primary'>Product description</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque. Suspendisse sit amet neque neque. Praesent suscipit et magna eu iaculis. Donec arcu libero, commodo ac est a, malesuada finibus dolor. Aenean in ex eu velit semper fermentum. In leo dui, aliquet sit amet eleifend sit amet, varius in turpis. Maecenas fermentum ut ligula at consectetur. Nullam et tortor leo.
                                            </p>
                                        </div>
                                        <div id="specification" className="container tab-pane fade">
                                            <h4 className='text-primary'>Product specification</h4>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                        <div id="reviews" className="container tab-pane fade">
                                            <div className="reviews-submitted">
                                                <div className="reviewer text-primary">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                                <div className="ratting">
                                                    <i className="fa fa-star m-1" />
                                                    <i className="fa fa-star m-1" />
                                                    <i className="fa fa-star m-1" />
                                                    <i className="fa fa-star m-1" />
                                                    <i className="fa fa-star m-1" />
                                                </div>
                                                <p className='mb-2 mt-3'>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                                </p>
                                            </div>
                                            <div className="reviews-submit">
                                                <h4 className='text-primary mt-3'>Give your Review:</h4>
                                                <div className="ratting mb-3">
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                </div>
                                                <div className={`p-30 mb-5 shadow-lg p-3 mb-5 bg-body rounded ${value.theme}`}>
                                                    <Formik values={formik}>
                                                        <Form onSubmit={handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-md-6 form-group">
                                                                    <label class={`${value.theme}`}>First Name</label>
                                                                    <input className="form-control" type="text" placeholder="John" name="fname" onChange={handleChange} onBlur={handleBlur} />
                                                                    {errors.fname && touched.fname ? <p>{errors.fname}</p> : ''}
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
                                                            </div>
                                                            <button type='submit' className='btn btn-primary'>Submit</button>
                                                        </Form>
                                                    </Formik>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="section-header mb-5">
                                    <h1 class={`${value.theme}`}>Related Products</h1>
                                </div>
                                <div className="row align-items-center product-slider product-slider-3">
                                    {
                                        productsFilter.map((pv) => {
                                            if (pv.category === props.location.state.Prodetalis.category) {
                                                return (
                                                    <div className="col-lg-4 mb-5">
                                                        <div>
                                                            <div className="product-title">
                                                                <span className='d-block text-center mb-3'>{pv.category}</span>
                                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>{pv.name}</h5>
                                                                <div className="ratting text-center mt-3">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <img className="air1 color" src={pv.Prof_img} alt />
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center py-4">
                                                                <div className="product-action p-1 mb-2">
                                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                                </div>
                                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                                <a href onClick={() => {Click();OrderNow(pv)}} className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    {/* <div className="col-lg-4 mb-5">
                                        <div>
                                            <div className="product-title">
                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>Door-to-Door Services</h5>
                                                <div className="ratting text-center mt-3">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="text-center box2 mt-3">
                                                <img className="air1 color" src="img/air1.png" alt />
                                            </div>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <div className="product-action p-1 mb-2">
                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                </div>
                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-4 mb-5">
                                        <div>
                                            <div className="product-title">
                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>FULL CONTAINER LOAD (FCL)</h5>
                                                <div className="ratting text-center mt-3">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="text-center box2 mt-3">
                                                <img className="air1 color" src="img/air2.png" alt />
                                            </div>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <div className="product-action p-1 mb-2">
                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                </div>
                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-4 mb-5">
                                        <div>
                                            <div className="product-title">
                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>OUT OF GAUGE (OOG) FLAT RACKS</h5>
                                                <div className="ratting text-center mt-3">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="text-center box2 mt-3">
                                                <img className="air1 color" src="img/air3.png" alt />
                                            </div>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <div className="product-action p-1 mb-2">
                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                </div>
                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-4">
                                        <div>
                                            <div className="product-title">
                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>PROJECT CARGO ON-SITE DELIVERIES</h5>
                                                <div className="ratting text-center mt-3">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="text-center box2 mt-3">
                                                <img className="air1 color" src="img/air5.png" alt />
                                            </div>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <div className="product-action p-1 mb-2">
                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                </div>
                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-4">
                                        <div>
                                            <div className="product-title">
                                                <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>CUSTOMS PROCESSING FORMALITIES</h5>
                                                <div className="ratting text-center mt-3">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="text-center box2 mt-3">
                                                <img className="air1 color" src="img/air6.png" alt />
                                            </div>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <div className="product-action p-1 mb-2">
                                                    <a href="#" className="m-2"><i className="fa fa-cart-plus" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="m-2"><i className="fa fa-search" /></a>
                                                </div>
                                                <h3 class={`${value.theme}`}><span>$</span>99</h3>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* Side Bar Start */}
                        {/* <div className="col-lg-4 sidebar">
                            <div className="sidebar-widget category">
                                <h2 className={`title text-primary`}>Category</h2>
                                <nav className="navbar">
                                    <ul className="navbar-nav shadow-lg p-5 bg-body rounded">
                                        <li className="nav-item">
                                            <NavLink to="/cargoServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x text-primary fa-plane pr-3" />Air &amp; Freight</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/cargoServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-ship text-primary pr-3" />Ocean &amp; Freight</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/cargoServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-truck text-primary pr-3" />Land &amp; Transport</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/cargoServices" onClick={() => Click()} className="nav-link text-white" href="#"><i className="fa fa-2x fa-store text-primary pr-3" />Cargo &amp; Storage</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="sidebar-widget widget-slider">
                                <div className="sidebar-slider normal-slider">
                                    <div className="col-md-12 mb-5 shadow-lg p-5 bg-body rounded">
                                        <div>
                                            <div className="text-center box3 mb-4">
                                                <img className="air1 color" src="img/air1.png" alt />
                                            </div>
                                            <h5 className={`text-center text-primary text-uppercase font-weight-bold`}>Door-to-Door Services</h5>
                                            <div className="d-flex flex-column align-items-center py-4">
                                                <p>We can deliver your goods straight to your doorstep with utmost care through our vast network of agents and couriers around the world.</p>
                                                <NavLink href to="/orderNow" className="btn btn-primary py-2 px-4 my-2">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* Side Bar End */}
                    </div>
                </div>
            </div>
            {/* Product Detail End */}

        </div>
    );
}

export default ProductsDetalis;