import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

import studentImg from './image/Frame 17.svg';
import managerImg from './image/Frame 18.svg';
import enterpriseImg from './image/Frame 20.svg';
// import studentImg_hover from './image/Frame 21.svg';
// import managerImg_hover from './image/Frame 22.svg';
// import enterpriseImg_hover from './image/Frame 23.svg';

function Signup() {

    // const [userId, setUserId] = useState("");
    // const [userPw, setUserPw] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userStudentNumber, setUserStudentNumber] = useState("");
    // const [userName, setUserName] = useState("");
    // const [userPhoneNumber, setUserPhoneNumber] = useState("");
    // const [departmentId, setDepartmentId] = useState("");

    // axios
    //     .post('http://120.142.105.189:5080/user/signUp', {
    //         user_id: userId,
    //         user_pw: userPw,
    //         user_email: userEmail,
    //         user_student_number: userStudentNumber,
    //         user_name: userName,
    //         user_phone_number: userPhoneNumber,
    //         department_id: departmentId
    //     })
    //     .then(response => {
    //         // Handle success.
    //         console.log('Well done!');
    //         console.log('User profile', response.data.user);
    //         console.log('User token', response.data.jwt);
    //     })
    //     .catch(error => {
    //         // Handle error.
    //         console.log('An error occurred:', error.response);
    //     });

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goTosignup2 = () => {
        navigate('/signup2');
    };

    // const [submitting, setButton] = useState(true);

    // function changeButton() {
    //     st === true ? setButton(false) : setButton(true);
    // }

    //

    // const [student, setStudent] = useState(studentImg);
    // const [manager, setManager] = useState(managerImg);
    // const [enterprise, setEnterprise] = useState(enterpriseImg);

    // const change_student = () => {
    //     let value = student;

    //     if (value === studentImg) {
    //     setStudent(studentImg_hover);
    //     } else {
    //     setStudent(studentImg);
    //     }
    // };

    // const change_manager = () => {
    //     let value = manager;

    //     if (value === managerImg) {
    //     setManager(managerImg_hover);
    //     } else {
    //     setManager(managerImg);
    //     }
    // };

    // const change_enterprise = () => {
    //     let value = enterprise;

    //     if (value === enterpriseImg) {
    //     setEnterprise(enterpriseImg_hover);
    //     } else {
    //     setEnterprise(enterpriseImg);
    //     }
    // };

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>


                <div className="signup_images">
                    {/* <button id="student_button" onClick={change_student}>
                        <img src={student} alt="" />
                    </button>

                    <button id="manager_button" onClick={change_manager}>
                        <img src={manager} alt="" />
                    </button>

                    <button id="enterprise_button" onClick={change_enterprise}>
                        <img src={enterprise} alt="" />
                    </button> */}

                    <input className="student_radio" type="radio" id="student" name="division" />
                    <label htmlFor="student">
                        <img src={studentImg} alt="" />
                    </label>

                    <input className="manager_radio" type="radio" id="manager" name="division" />
                    <label htmlFor="manager">
                        <img src={managerImg} alt="" />
                    </label>

                    <input className="enterprise_radio" type="radio" id="enterprise" name="division" />
                    <label htmlFor="enterprise">
                        <img src={enterpriseImg} alt="" />
                    </label>

                </div>


                <div className="signupbutton">
                    <button className="signup_next" onClick={goTosignup2}>다음</button>
                </div>

            </div>
        </div>
    )
}

export default Signup;