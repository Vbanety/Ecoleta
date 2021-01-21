import React from 'react';

import logoImg from '../images/logo.svg';

import '../styles/pages/login.css';

function Login() {
    return (
        <div id="login-form">

            <div className="box-form">
                <div className="content-login">
                    <div className="box-img">
                    <img src={logoImg} alt="Login" />
                    </div>
                    <form className="sendForm">
                        <legend>
                        
                        <input type="text" name="name" placeholder="Usuário"></input>
                        
                        <input type="password" name="name" placeholder="Senha"></input>
                        <input type="submit" value="Logar"></input>
                        </legend>
                    </form>
                </div>
            </div>
            
        </div>
        
    );
}

export default Login;