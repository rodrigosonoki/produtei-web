import styled from "styled-components";

export const Container = styled.div`
  background: #35258a;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 680px) {
    height: 200px;
  }
`;

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
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

  @media only screen and (max-width: 784px) {
    span {
      font-size: 48px;
      line-height: 48px;
    }
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

  @media only screen and (max-width: 784px) {
    justify-content: flex-start;
  }
`;

export const ThirdRow = styled.div`
  width: 100%;
`;
