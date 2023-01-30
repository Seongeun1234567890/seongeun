import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";

function Signup6() {

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goToMain = () => {
        navigate('/LentalList');
    };

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };

    const [submitting, setButton] = useState(true);

    function changeButton() {
        // userId.length > 0 && password.length > 0 && confirmPassword.length > 0 && email.length > 0 ? setButton(false) : setButton(true);
        password.length > 7 && confirmPassword.length > 7 ? setButton(false) : setButton(true);
    }

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>


                <div className='passwords'>
                    <span className='passwordtext'>비밀번호</span><br />
                    <input 
                    type="password" 
                    name="password_input" 
                    value={password} 
                    onChange={onChangePassword} 
                    onKeyUp={changeButton} 
                    className={passwordError && "errorInput"}
                    />
                    {passwordError && <div class="errorMesege_password">비밀번호는 8자 이상이어야 하며 문자와 숫자를 각각 하나 이상 포함해야 합니다.</div>}
                </div>

                <div className='ConfirmPasswords'>
                    <span className='ConPw_text'>비밀번호 재입력</span><br />
                    <input 
                    type="password" 
                    name="ConPw_input" 
                    value={confirmPassword} 
                    onChange={onChangeConfirmPassword} 
                    onKeyUp={changeButton} 
                    className={confirmPasswordError && "errorInput"}
                    />
                    {confirmPasswordError && <div class="errorMesege_confirmPassword">비밀번호가 일치하지 않습니다.</div>}
                </div>


                <div className='signupbutton'>
                    <button 
                        className="signup_next"
                        type="submit"
                        variant="secondary"
                        disabled={submitting} 
                        onClick={e => {
                            // if(userId.length > 4 && password.length > 7 && confirmPassword === password && email.length > 1) {
                            //     e.stopPropagation();
                            //     goTocomplete();
                            // }
                            if(password === confirmPassword) {
                                e.stopPropagation();
                                goToMain();
                            }
                        }}
                    >
                        메인 페이지 가기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup6;