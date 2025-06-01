import React, { useState } from 'react';
import singInValidation from '../scripts/dataService';

function LoginForm({ onLogin }) {
    const [isHiddenSingIn, setIsHiddenSingIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = singInValidation(document.querySelector('[data-login]').value, document.querySelector('[data-password]').value); // Получаем результат

        onLogin(isValid, document.querySelector('[data-login]').value); // Передаем результат в App.js через onLogin
    };

    const ToggleComponent = (event) => {
        event.preventDefault() 
        setIsHiddenSingIn(!isHiddenSingIn)   
    } 

    return (
        <div>
            <form id="singinForm" method="post" data-js-singin
                onSubmit={handleSubmit} style={{ display: isHiddenSingIn ? 'none' : 'flex' }}>
                <p className="field">
                    <label className="field__label" htmlFor="login">Username or email address</label>
                    <input
                    className="field__control" 
                    id="login" 
                    name="login" 
                    minLength="2"
                    maxLength="16"
                    aria-errormessage="login-errors"
                    data-login
                    required/>

                    <span className="field__errors" id="login-errors" data-js-singin-field-errors></span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="password">Password</label>
                    <input 
                    className="field__control" 
                    id="password" 
                    name="password" 
                    type="password" 
                    minLength="4"
                    maxLength="16"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}"
                    title="Пароль должен содержать хотя бы 1 заглавную и 1 строчную букву, a также хотя бы 1 цифру."
                    aria-errormessage="password-errors"
                    data-password
                    required/>

                    <span className="field__errors" id="password-errors" data-js-singin-field-errors></span>
                </p>

                <button className="singin_button" type="submit" >Sing-in</button>
            </form>
            
            <form className="singup_form" 
                id="regForm"  
                method="post" 
                onSubmit={event => ToggleComponent(event)}
                style={{ display: isHiddenSingIn ? 'none' : 'flex' }}>
                <p4>No account?</p4>
                <button className="singup_button" type="submit">Sing-up</button>
            </form>

            <form id="singUpForm" method="post" data-js-singup
                onSubmit={event => ToggleComponent(event)}
                style={{ display: isHiddenSingIn ? 'flex' : 'none' }}>
                <p className="field">
                    <label className="field__label" htmlFor="login">Username or email address</label>
                    <input
                    className="field__control" 
                    id="login" 
                    name="login" 
                    minLength="2"
                    maxLength="16"
                    aria-errormessage="login-errors"
                    required/>

                    <span className="field__errors" id="login-errors" data-js-singin-field-errors></span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="password">Password</label>
                    <input 
                    className="field__control" 
                    id="password" 
                    name="password" 
                    type="password" 
                    minLength="4"
                    maxLength="16"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}"
                    title="Пароль должен содержать хотя бы 1 заглавную и 1 строчную букву, a также хотя бы 1 цифру."
                    aria-errormessage="password-errors"
                    required/>

                    <span className="field__errors" id="password-errors" data-js-singin-field-errors></span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="password">Repeat password</label>
                    <input 
                    className="field__control" 
                    id="password" 
                    name="password" 
                    type="password" 
                    minLength="4"
                    maxLength="16"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}"
                    title="Пароль должен содержать хотя бы 1 заглавную и 1 строчную букву, a также хотя бы 1 цифру."
                    aria-errormessage="password-errors"
                    required/>

                    <span className="field__errors" id="password-errors" data-js-singin-field-errors></span>
                </p>

                <button className="singin_button" type="submit">Sing-Up</button>
            </form>   
            <button onClick={event => ToggleComponent(event)} 
                style={{ display: isHiddenSingIn ? 'flex' : 'none' }}>
                    Назад
            </button>
        </div>
    );
}

export default LoginForm;