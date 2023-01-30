import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";

function Signup5() {

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goTosignup6 = () => {
        navigate('/signup6');
    };

    const [email, setEmail] = useState("");
    const [CertificationNumber, setCertificationNumber] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [CertificationNumberError, setCertificationNumberError] = useState(false);

    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };
    const onChangeCertificationNumber = (e) => {
        const CertificationNumberRegex = /^[0-9+]{5,}$/;
        if (!e.target.value || CertificationNumberRegex.test(e.target.value)) setCertificationNumberError(false);
        else setCertificationNumberError(true);
        setCertificationNumber(e.target.value);
    };

    const [submitting, setButton] = useState(true);

    function changeButton() {
        // userId.length > 0 && password.length > 0 && confirmPassword.length > 0 && email.length > 0 ? setButton(false) : setButton(true);
        email.length > 0 && CertificationNumber.length > 5 ? setButton(false) : setButton(true);
    }

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>


                <div className='Emails'>
                    <span className='Email_text'>이메일</span><br />
                    <input 
                    name="email1" 
                    value={email}
                    autoComplete="off" 
                    onChange={onChangeEmail} 
                    onKeyUp={changeButton} 
                    className={emailError && "errorInput"}
                    />
                    {emailError && <div class="errorMesege_email">유효한 이메일 형식을 입력하십시오.</div>}
                </div>

                <div className="Certifications">
                    <span className="certificationNumbertext">인증번호</span><br />
                    <input 
                    type="text" 
                    name="CertificationNumber" 
                    value={CertificationNumber} 
                    autoComplete="off" 
                    onChange={onChangeCertificationNumber} 
                    onKeyUp={changeButton}
                    className={CertificationNumberError && "errorInput"}
                    />
                    {CertificationNumberError && <div class="errorMesege_CertificationNumber">올바른 인증번호를 입력하십시오.</div>}
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
                            if(email.includes('@') && CertificationNumber.length > 5) {
                                e.stopPropagation();
                                goTosignup6();
                            }
                        }}
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup5;