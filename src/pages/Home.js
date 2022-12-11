import React from "react";
import GlobalStyle from "../GlobalStyle";
import * as S from "./HomeStyle";
import { BsEnvelope } from "react-icons/bs";

const Home = () => {
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
          <h4>기본 정보</h4>
          <h3>위해성 평가란?</h3>
          <img src="/img/home.png" alt="home" style={{ width: "300px" }} />
          <p>
            위해성(risk)=유해성(hazard)X노출량(exposure) 유해성: 유해물질의
            독성, 노출량: 유해물질 접촉량
          </p>
          <button>계산하러 가기</button>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
