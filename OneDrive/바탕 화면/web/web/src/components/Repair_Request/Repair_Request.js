import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from './image/Frame 56.svg';
import './Repair_Request.scss';

import logo_image from './image/Frame 253.svg';
import logo_text from './image/TOOL.svg';

function Repair_Request() {

  const goToLogin = () => {
      navigate('/');
    };
  
  const goToMyLental = () => {
      navigate('/mylental');
  };
  
  const goToEditInfor = () => {
      navigate('/editInfor');
  };

  const goToMain_Lental = () => {
      navigate('/lentalList');
  }

  const data2 = [
      {id: 0, date: 'D-1', name: '스마트패드', code: '9115'},
      {id: 1, date: 'D-7', name: '스마트패드', code: '9115'},
      {id: 2, date: 'D-7', name: '스마트패드', code: '9115'},
      {id: 3, date: 'D-14', name: '스마트패드', code: '9115'},
      {id: 4, date: 'D-14', name: '스마트패드', code: '9115'},
  ];
  
  const data3 = [
      {id: 0, schoolNumber: '2021661096', studentName: '홍길동'}
  ];

  const data4 = [
      {id: 0, name: '스마트패드', state: '대여중', code: '9115', number: '2017021402226', division: '교비(등록금)', date: '2017년 2월 14일', standard: 'LG G패드 38.0 Wi-Fi 32G'}
      // {id: 1, name: '스마트패드', state: '반납', code: '9115', number: '2017021402226', division: '교비(등록금)', date: '2017년 2월 14일', standard: 'LG G패드 38.0 Wi-Fi 32G'}
  ];

  const data5 = [
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

  const [search, setSearch] = useState("");
  const [repairRequest, setrepairRequest] = useState("");
    
  const searchonChange = (e) => {
    setSearch(e.target.value)
  }

  const onChange = useCallback(e=>{
    setrepairRequest(e.target.value);
  },[])


  let navigate = useNavigate();
  return (
    <div className="web">
      <div className="web_flex">
        <div className="navigation">
          <div className="logo">
            <img className='logoImage' src={logo_image} alt="" />
            <img className='logoText' src={logo_text} alt="" />
          </div>
          <div className="miniInformation">
            {data3.map((data3) => (
              <div className="mini_student">
                {data3.schoolNumber} &nbsp;&nbsp;&nbsp;학번 &nbsp;
                {data3.studentName} &nbsp;&nbsp;&nbsp;님
              </div>
            ))}
            <button id="logout" onClick={goToLogin}>로그아웃</button>
            <button id="n_list" onClick={goToMain_Lental}>대여 목록 보기</button>
            <button id="n_myList" onClick={goToMyLental}>대여 내역</button>
          </div>
        </div>

        <div className="all">
          <div className="all_infor">
            <div className="information">
              <div className="student">
                {data3.map((data3) => (
                  <div className="studentText">
                    {data3.schoolNumber} 학번 <br /><br />
                    {data3.studentName} 님 <br /><br />
                    학부생 사용자
                  </div>
                ))}
              </div>

              <button id="list" onClick={goToMain_Lental}>대여 목록</button> <br />
              <button id="myList" onClick={goToMyLental}>내 대여 내역</button> <br />
              <button id="rename" onClick={goToEditInfor}>회원 정보 수정</button>
            </div>

            <div className="borrow">
              <span className="myListText">내 대여목록</span> <br />
              {data2.map((data2) => (
                <div className="d-day">
                  {data2.date} <br />
                  {data2.name} <br />
                  <span>품목코드 :</span> {data2.code}
                </div>
              ))}
            </div>
          </div>

          <div className="r_web">
            <input id="search" type="text" value={search} placeholder='검색어를 입력하세요' onChange={searchonChange} />

            <div className="repair_title">기자재 수리 요청</div>

            <div className="repair_teblet">
                <img className='repair_tebletImg' src={image} alt="" />
                {data5.map((data5) => (
                    <div className="repair_texts">
                        <div className="repair_smartpad"><span className="rep_name">{data5.name}</span><span className="rep_ing">{data5.ing}</span></div>
                        <div className="repair_code">품목 코드:<span className="rep_code">{data5.code}</span></div>
                        <div className="repair_number">자산 번호:<span className="rep_number">{data5.number}</span></div>
                        <div className="repair_money">구입 구분:<span className="rep_money">{data5.money}</span></div>
                        <div className="repair_date2">구입 일자:<span className="rep_date2">{data5.date2}</span></div>
                        <div className="repair_padname">물품 규격:<span className="rep_padname">{data5.padname}</span></div>
                    </div>
                ))}
            </div>

            <input id="input_repair" type="text" value={repairRequest} placeholder='건의 내용을 작성해주세요.' onChange={onChange} />

            <button className="button_repair">기자재 수리 요청</button>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Repair_Request;