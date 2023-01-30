import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function Join() {

    // const [userId, setUserId] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [CertificationNumber, setCertificationNumber] = useState("");

    // const [userIdError, setUserIdError] = useState(false);
    // const [passwordError, setPasswordError] = useState(false);
    // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [CertificationNumberError, setCertificationNumberError] = useState(false);

    // const onChangeUserId = (e) => {
    //     const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    //     if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
    //     else setUserIdError(true);
    //     setUserId(e.target.value);
    // };
    // const onChangePassword = (e) => {
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //     if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
    //     else setPasswordError(true);

    //     if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
    //     else setConfirmPasswordError(true);
    //     setPassword(e.target.value);
    // };
    // const onChangeConfirmPassword = (e) => {
    //     if (password === e.target.value) setConfirmPasswordError(false);
    //     else setConfirmPasswordError(true);
    //     setConfirmPassword(e.target.value);
    // };
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

    // const validation = () => {
    //     if(!userId) setUserIdError(true);
    //     if(!password) setPasswordError(true);
    //     if(!confirmPassword) setConfirmPasswordError(true);
    //     if(!email) setEmailError(true);

    //     if(userId && password && confirmPassword && email) return true;
    //     else return false;
    // }

    // const onSubmit = (e) => {
    //     if(validation()) return;
    //     // API Call
    // }

    const goTocomplete = () => {
        navigate('/findId_complete');
    };

    const GlobalStyle = createGlobalStyle`
      body {
        background-color: #404041;
      }
    `;

    const [submitting, setButton] = useState(true);

    function changeButton() {
        // userId.length > 0 && password.length > 0 && confirmPassword.length > 0 && email.length > 0 ? setButton(false) : setButton(true);
        email.length > 0 && CertificationNumber.length > 5 ? setButton(false) : setButton(true);
    }

    let navigate = useNavigate();
    return (
        <div className='allPage'>
            <div className='container'>
                <GlobalStyle />
                
                <div className='div_findIdtext'>
                    <p className="findId_text">아이디 찾기</p>
                </div>

                {/* <div className='Ids'>
                    <span className='Id_text'>아이디</span><br />
                    <input value={userId} onChange={onChangeUserId} onKeyUp={changeButton} />
                    {userIdError && <div class="errorMesege_ID">사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.</div>}
                </div><br />

                <div className='Passwords'>
                    <span className='Password_text'>비밀번호</span><br />
                    <input type="password" value={password} onChange={onChangePassword} onKeyUp={changeButton} />
                    {passwordError && <div class="errorMesege_password">비밀번호는 8자 이상이어야 하며 문자와 숫자를 각각 하나 이상 포함해야 합니다.</div>}
                </div><br />

                <div className='ConfirmPasswords'>
                    <span className='ConPw_text'>비밀번호 확인</span><br />
                    <input type="password" value={confirmPassword} onChange={onChangeConfirmPassword} onKeyUp={changeButton} />
                    {confirmPasswordError && <div class="errorMesege_confirmPassword">비밀번호가 일치하지 않습니다.</div>}
                </div><br /> */}

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
                </div><br />

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


                <div className='findIdbutton'>
                    <button 
                        className="findId_next"
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
                                goTocomplete();
                            }
                        }}
                    >
                        다음
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Join