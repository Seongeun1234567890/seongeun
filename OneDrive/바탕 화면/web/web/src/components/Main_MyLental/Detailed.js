import React from "react";
import { useNavigate } from "react-router-dom";
import './Detailed.scss';
import image from './image/Frame 56.svg';

function Detailed() {

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
            date1: "2022 / 12 / 05", 
            money: "교비(등록금)", 
            date2: "2017년 2월 14일", 
            padname: "LG G패드 3 8.0 Wi-Fi 32G"
        }
    ];

    let navigate = useNavigate();
    return(
        <div className="div">
            <div className="div_title"></div>
            <div className="teblet">
                <img className='tebletImg' src={image} alt="" />
                {data2.map((data2) => (
                    <div className="text">
                        <div className="smartpad">{data2.name}<span className="ing">{data2.ing}</span></div>
                        <div className="div_code">품목 코드:<span className="code">{data2.code}</span></div>
                        <div className="div_number">자산 번호:<span className="number">{data2.number}</span></div>
                        <div className="div_date1">변동 일자:<span className="date1">{data2.date1}</span></div>
                        <div className="div_money">구입 구분:<span className="money">{data2.money}</span></div>
                        <div className="div_date2">구입 일자:<span className="date2">{data2.date2}</span></div>
                        <div className="div_padname">물품 규격:<span className="padname">{data2.padname}</span></div>
                    </div>
                ))}
            </div>
            <button className="fixHelp" onClick={goToRepairRequest}>기자재 수리 요청</button>
        </div>
    );
}

export default Detailed;