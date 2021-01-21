import React from 'react';

import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

import logoLogin from '../images/HappyWeb/login-happy.png';
import '../styles/pages/enter.css';
import '../pages/InsertPass'
import '../styles/global.css';


function Login1() {
    return (
        <div className="page-login">
            <main className="main-icon">
            
                <img src={logoLogin} alt="Login" />
            
            </main>
            <aside>
                <div className="divHeader">
                <Link to="/" className="enter-app">
                    <div className="box-diraction">
                        <FiArrowLeft size={32} color="#15C3D6" />
                    </div>
                </Link>
                </div>

                <form>
                    <legend>Fazer Login</legend>
                    <label>E-mail</label>
                    <input type="text" name="email"></input>
                    <br /><br />
                    <label>Senha</label>
                    <input type="password" name="pass"></input>
                    <div className="box-check-pass">
                    <input type="checkbox"></input>
                        <div className="label-box">
                        <label>Lembre-se</label>
                        <label><a href="/InsertPass">Esqueci minha senha</a></label>
                        </div>
                    </div>
                    <input type="submit" value="Entrar"></input>
                </form>
            </aside>
        </div>
    );
}

export default Login1;