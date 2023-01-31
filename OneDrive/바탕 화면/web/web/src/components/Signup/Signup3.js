import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

function Signup3() {




    

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userStudentNumber, setUserStudentNumber] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [departmentId, setDepartmentId] = useState("");

    axios
        .post('http://120.142.105.189:5080/user/signUp', {
            user_id: userId,
            user_pw: userPw,
            user_email: userEmail,
            user_student_number: userStudentNumber,
            user_name: userName,
            user_phone_number: userPhoneNumber,
            department_id: departmentId
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });












    const [userNameError, setUserNameError] = useState(false);
    const [userPhoneNumberError, setUserPhoneNumberError] = useState(false);

    const onChangeUserName = (e) => {
        const userNameRegex = /^[가-힣]{2,}$/;
        if ((!e.target.value || (userNameRegex.test(e.target.value)))) setUserNameError(false);
        else setUserNameError(true);
        setUserName(e.target.value);
    };

    const onChangeUserPhoneNumber = (e) => {
        const userPhoneNumberRegex = /^01([0\1\6\7\8\9])([0-9]{3,4})([0-9]{4})$/;
        if ((!e.target.value || (userPhoneNumberRegex.test(e.target.value)))) setUserPhoneNumberError(false);
        else setUserPhoneNumberError(true);
        setUserPhoneNumber(e.target.value);
    };

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goTosignup4 = () => {
        navigate('/signup4');
    };

    const [submitting, setButton] = useState(true);

    function changeButton() {
        userName.length > 0 && userPhoneNumber.length > 9 ? setButton(false) : setButton(true);
    }

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>

                <div className='names'>
                    <span className='name'>이름</span><br />
                    <input 
                    name="name" 
                    value={userName}
                    autoComplete="off"
                    onChange={onChangeUserName}
                    onKeyUp={changeButton} 
                    className={userNameError && "errorInput"}
                    />
                    {userNameError && <div class="errorMesege_name">올바른 이름 형식을 입력하십시오.</div>}
                </div>

                <div className='phoneNumbers'>
                    <span className='phoneNumber'>전화번호</span><br />
                    <input 
                    name="phoneNumber" 
                    value={userPhoneNumber}
                    autoComplete="off" 
                    onChange={onChangeUserPhoneNumber} 
                    onKeyUp={changeButton} 
                    className={userPhoneNumberError && "errorInput"}
                    />
                    {userPhoneNumberError && <div class="errorMesege_phoneNumber">-를 제외한 올바른 전화번호 형식을 입력하십시오.</div>}
                </div>

                <div className='signupbutton'>
                    <button 
                        className="signup_next"
                        type="submit"
                        variant="secondary"
                        disabled={submitting} 
                        onClick={e => {
                            if(userName.length > 2 && userPhoneNumber.length > 6) {
                                e.stopPropagation();
                                goTosignup4();
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

export default Signup3;