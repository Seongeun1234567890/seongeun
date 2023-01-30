import React from "react";
import { useNavigate } from "react-router-dom";
import './Tendious_Detailed.scss';
import image from './image/Frame 56.svg';

function Tendious_Detailed() {

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
            padname: "LG G패드 3 8.0 Wi-Fi 32G"
        }
    ];

    let navigate = useNavigate();
    return(
        <div className="tendious_detailed">
            <div className="tendious_teblet">
                <span>11/16</span>
                <img className='tendious_tebletImg' src={image} alt="" />
                {data2.map((data2) => (
                    <div className="tendious_texts">
                        <div className="tendious_smartpad"><span className="ten_name">{data2.name}</span><span className="ten_ing">{data2.ing}</span></div>
                        <div className="tendious_code">품목 코드:<span className="ten_code">{data2.code}</span></div>
                        <div className="tendious_number">자산 번호:<span className="ten_number">{data2.number}</span></div>
                        <div className="tendious_money">구입 구분:<span className="ten_money">{data2.money}</span></div>
                        <div className="tendious_date2">구입 일자:<span className="ten_date2">{data2.date2}</span></div>
                        <div className="tendious_padname">물품 규격:<span className="ten_padname">{data2.padname}</span></div>
                    </div>
                ))}
                <div className="tendious_tendious">
                    <span>건의 내용:</span>
                    <div>터치가 안돼요.</div>
                </div>
                <button className="tendious_fixhelp" onClick={goToRepairRequest}>기자재 수리 요청</button>
            </div>
        </div>
    );
}

export default Tendious_Detailed;