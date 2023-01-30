import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { createGlobalStyle } from "styled-components";

function Signup2() {

    const GlobalStyle = createGlobalStyle`
    body {
        background-color: #404041;
    }
    `;

    const goTosignup3 = () => {
        navigate('/signup3');
    };

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const [Selected, setSelected] = useState("");

    let navigate = useNavigate();
    return(
        <div className="allPage">
            <GlobalStyle />
            <div className="container">
                <p className="signup_text">회원가입</p>
                <div className="schools">
                    <span className="school_name">학교</span><br />
                    <select className="school_select" onChange={handleSelect}>
                        <option value="1">명지 전문대학교</option>
                        <option value="2">명지대학교 서울캠퍼스</option>
                        <option value="3">명지대학교 용인캠퍼스</option>
                    </select>
                </div>
                <div className="departments">
                    <span className="department_name">학과</span><br />
                    <select className="department_select" onChange={handleSelect}>
                        <option value="1">소프트웨어콘텐츠과</option>
                    </select>
                </div>
                <div className="signupbutton">
                    <button className="signup_next" onClick={goTosignup3}>다음</button>
                </div>
            </div>
        </div>
    )
}

export default Signup2;