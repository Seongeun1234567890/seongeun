import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindId.scss";
import { createGlobalStyle } from "styled-components";

function FindId_complete() {

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const myInformation = [
        {
            id: 0, 
            name: "김홍길동", 
            schoolNumber: "2021661096"
        }
    ];

    const goToLogin = () => {
        navigate('/');
    };

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <div className="div_findIdtext">
                    <p className="findId_text">아이디 찾기</p>
                </div>

                {myInformation.map((myinfor) => (
                <div className="yourinfor">
                    <div className="yourId"><div className="yourName">{myinfor.name}</div>회원님의 아이디는</div>
                    <div className="yourSchnum"><div className="yourSchoolNum">{myinfor.schoolNumber}</div>입니다.</div>
                </div>
                ))}
                
                <div className="findIdbutton">
                    <button className="findId_next" onClick={goToLogin}>로그인 페이지 가기</button>
                </div>
            </div>
        </div>
    )
}

export default FindId_complete;