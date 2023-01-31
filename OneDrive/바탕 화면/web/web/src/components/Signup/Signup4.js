import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";

function Signup4() {

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goTosignup5 = () => {
        navigate('/signup5');
    };

    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [userIdError, setUserIdError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };

    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const [submitting, setButton] = useState(true);

    function changeButton() {
        // userId.length > 0 && password.length > 0 && confirmPassword.length > 0 && email.length > 0 ? setButton(false) : setButton(true);
        email.length > 0 && userId.length > 4 ? setButton(false) : setButton(true);
    }

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>

                <div className='ids'>
                    <span className='id_name'>아이디</span><br />
                    <div>
                        <input 
                            name="id_input"
                            value={userId} 
                            onChange={onChangeUserId} 
                            onKeyUp={changeButton} 
                            className={userIdError && "errorInput"}
                        />
                        <button 
                        name='id_check' 
                        type='submit'
                        onClick={e => {
                            if(userId.length === 0) {
                                alert("아이디를 입력해주세요.")
                            }
                            else if(userId.length < 5) {
                                alert("사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.")
                            }
                            else {
                                alert("사용 가능한 아이디입니다.")
                            }
                        }}
                        >
                            아이디 조회
                        </button>
                        {userIdError && <div class="errorMesege_ID">사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.</div>}
                    </div>
                </div>
                

                <div className='emails4'>
                    <span className='email_name'>이메일</span><br />
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

                <div className='signupbutton'>
                    <button 
                        className="signup_next"
                        type="submit"
                        variant="secondary"
                        disabled={submitting} 
                        onClick={e => {
                            if(email.includes('@') && userId.length > 4) {
                                e.stopPropagation();
                                goTosignup5();
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

export default Signup4;