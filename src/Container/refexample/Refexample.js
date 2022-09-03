import React, { useContext, useRef } from 'react';
import { themeContext } from '../../contextapi/ThemeContext';

function Refexample(props) {
    const value = useContext(themeContext)
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = () => {
        console.log(nameRef.current.value, emailRef.current.value);

        nameRef.current.style.backgroundColor = 'red';
        emailRef.current.focus();
    }
    
    return (
        <div class={`${value.theme}`}>
            <input ref={nameRef} type="text" placeholder='Please Enter Your Name' name='name' />
            <input ref={emailRef} type="text" placeholder='Please Enter Your Email' name='email' />
            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    );
}

export default Refexample;