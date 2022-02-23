import styled from "styled-components";

export const Container = styled.div`
  background: #35258a;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 1000px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 92px;
    line-height: 92px;
    color: #f26666;
  }
`;

export const FirstRow = styled.div`
  width: 100%;
  display: flex;
`;

export const SecondRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ThirdRow = styled.div`
  width: 100%;
`;
