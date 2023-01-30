import React from "react";
import { useNavigate } from "react-router-dom";
import './Management_Detailed.scss';
import image from './image/Frame 56.svg';

function Management_Detailed() {

    const goToRepairRequest = () => {
        navigate('/repairRequest');
    };

    const data2 = [
        {
            id: 0, 
            name: "스마트패드", 
            ing: "대여 가능", 
            code: 9115, 
            number: 2017021402226,
            money: "교비(등록금)", 
            date2: "2017년 2월 14일", 
            padname: "LG G패드 3 8.0 Wi-Fi 32G",
            dday: "TODAY"
        }
    ];

    let navigate = useNavigate();
    return(
        <div className="div">
            <div className="div_title"></div>
            <div className="management_teblet">
                <img className='management_tebletImg' src={image} alt="" />
                {data2.map((data2) => (
                    <div className="management_texts">
                        <div className="management_smartpad"><span className="man_name">{data2.name}</span><span className="man_ing">{data2.ing}</span></div>
                        <div className="management_code">품목 코드:<span className="man_code">{data2.code}</span></div>
                        <div className="management_number">자산 번호:<span className="man_number">{data2.number}</span></div>
                        <div className="management_money">구입 구분:<span className="man_money">{data2.money}</span></div>
                        <div className="management_date2">구입 일자:<span className="man_date2">{data2.date2}</span></div>
                        <div className="management_padname">물품 규격:<span className="man_padname">{data2.padname}</span></div>
                    </div>
                ))}
            </div>
            {data2.map((data2) => (
                <div className="management_dday">
                    <span className="man_dday">{data2.dday}</span>
                </div>
            ))}
            <div className="management_button">
                <button className="list_extension">대여 기간 연장</button>
            </div>
        </div>
    );
}

export default Management_Detailed;