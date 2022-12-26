import * as S from "./HomeStyle";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contamination = () => {
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const dropdownChange = (e) => {
    console.log(e.target.value);
    let selected = e.target.value;
    selected === "---" && setOptions([]);
    selected === "지구" && setOptions(["화성", "변성", "퇴적"]);
    selected === "환경" && setOptions(["수리지질", "지하수"]);
  };
  console.log(options);
  return (
    <>
      <S.Header>
        <S.Title>증기침입 위해성 평가 프로그램</S.Title>
        <S.Qbutton>
          <BsEnvelope /> 문의
        </S.Qbutton>
      </S.Header>
      <S.Container>
        <S.Menu>
          <h3>기본 정보</h3>
          <p onClick={() => navigate("/")}>위해성 평가란?</p>
          <p>위해도 계산</p>
          <h3>Input</h3>
          <p>오염원</p>
          <p>지질매체</p>
          <p>건물특성</p>
          <p>노출특성</p>
          <h3>Output</h3>
          <p>결과 확인</p>
        </S.Menu>
        <S.Content>
          <p>오염원 체크</p>
          <label htmlFor="group">선택 1</label>
          <select id="group" onChange={dropdownChange}>
            <option>---</option>
            <option>지구</option>
            <option>환경</option>
          </select>
          <label htmlFor="member">선택 2</label>
          <select id="member">
            {options.map((o) => (
              <option>{o}</option>
            ))}
          </select>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Contamination;
