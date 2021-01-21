import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import logoLogin from '../images/HappyWeb/login-happy.png';
import eyeIcon from '../images/eye.png';

import '../styles/pages/InsertPass.css';
import '../styles/global.css';


const eye = <FontAwesomeIcon icon={faEye} />;

function RecoverPass() {

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShownTwo, setPasswordShownTwo] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

      const togglePasswordVisiblityTwo = () => {
        
        setPasswordShownTwo(passwordShownTwo ? false : true);
      };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
    console.log(data);
  };

    return (
        <div className="page-login">
            <main className="main-icon">
                <img src={logoLogin} alt="Login" />
            </main>
            
            <aside>
                <form>
                    <fieldset>
                        <legend>Redefinição de senha</legend>

                        <p>Escolha uma nova senha para vcê acessar o dashboard do Happy</p>

                        <label htmlFor="newPass">Nova senha</label>
                        <div className="testing">
                            <input
                                placeholder="Insert password"
                                name="password1"
                                type={passwordShown ? "text" : "password"}
                                ref={register({ required: "This is required." })}
                            // value={pass1}
                            />
                            <i onClick={togglePasswordVisiblity}><img src={eyeIcon} /></i>
                        </div>
                        <label>Repetir senha</label>
                        <div className="testing">
                            <input
                                placeholder="Repeat password"
                                name="password2"
                                type={passwordShownTwo ? "text" : "password"}
                                ref={register({ required: "This is required." })}
                            // value={pass2}
                            />
                            <i onClick={togglePasswordVisiblityTwo}><img src={eyeIcon} /></i>
                        </div>
                        <div className="btn-enter">
                            <input type="submit" value="Entrar" onClick={handleSubmit(onSubmit)}></input>
                        </div>
                    </fieldset>
                </form>
            </aside>
        </div>
    );
}

export default RecoverPass;