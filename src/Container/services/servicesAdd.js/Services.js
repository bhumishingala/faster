import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeContext } from '../../../contextapi/ThemeContext';
import { history } from '../../../history';
import { getCategory } from '../../../redux/action/Category_action';

function Services(props) {
    const value = useContext(themeContext);
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)
    const Click = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const ProductView = (name) => {
        history.push('/cargoServices' , {name:name})
        console.log(name);
    }

    return (
        <div>
            {/* Services Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                        <h1 className={`mb-4 ${value.theme}`}>Best Logistic Services</h1>
                    </div>
                    <div className="row justifu-content-center">
                        {
                            category.category.map((c) => {
                                return (
                                    <div className="col-lg-3 col-md-6 text-center mb-5 border shadow-lg p-4 mb-5 mt-3 ml-5 bg-body rounded">
                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                            <img src={c.Prof_img} width={90} height={90} />
                                            <h6 className="font-weight-medium m-0 text-primary ml-2">{c.name}</h6>
                                        </div>
                                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                                        <a onClick={() => {Click();ProductView(c.name)}} className="border-bottom text-decoration-none" href>Read More</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Services End */}
        </div>
    );
}

export default Services;