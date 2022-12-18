import React from "react";
import * as S from "./HomeStyle";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CopyPaste from "./CopyPaste";

const Excel = () => {
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const constructTableFromPasetedInput = (input) => {
    setData(input.target.value);
  };

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
          <p>위해성 평가란?</p>
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
          <h4>엑셀에서 데이터를 붙여넣으세요.</h4>
          <textarea
            id="myDemoTextArea"
            onChange={constructTableFromPasetedInput}
            value={data}
          ></textarea>
          <CopyPaste data={data} />
        </S.Content>
      </S.Container>
    </>
  );
};

export default Excel;
