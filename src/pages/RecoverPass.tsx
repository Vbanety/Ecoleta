import React from 'react';

import { FiArrowLeft } from "react-icons/fi";

import logoLogin from '../images/HappyWeb/login-happy.png';
import '../styles/pages/recoverPass.css';
import '../styles/global.css';

function RecoverPass() {
    return (
        <div className="page-login">
            <main className="main-icon">
                <img src={logoLogin} alt="Login" />
            </main>
            <aside>
                <div className="divHeader">
                    <div className="box-diraction">
                        <FiArrowLeft size={32} color="#15C3D6" />
                    </div>
                </div>

                <form>
                    <legend>Esqueci a senha</legend>
                    <br/>
                    <label>sua redefinição de senha será enviada para o e-mail cadastrado</label> 
                    <br/><br/>
                    <label>E-mail</label>
                    <input type="text" name="email"></input>
                    <br/><br/>
                    <input type="submit" value="Entrar"></input>
                    <div className="imagesIcon">

                    </div>
                </form>
            </aside>
        </div>
    );
}

export default RecoverPass;