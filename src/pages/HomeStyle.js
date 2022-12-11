import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
`;
export const Menu = styled.div`
  position: relative;
  left: 0;

  width: 20vw;
  height: 100vh;
  background-color: lightgray;
`;

export const Content = styled.div`
  position: relative;
  width: 70%;
  padding: 20px 3vw;
`;

export const Qbutton = styled.button`
  width: 10%;
  height: 10%;
`;
