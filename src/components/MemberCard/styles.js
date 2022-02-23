import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 200px;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export const ImageWrapper = styled.div`
  border-radius: 32px;
  overflow: hidden;
  background: tomato;
  height: 32px;
  margin-right: 12px;
`;

export const TextWrapper = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-family: Montserrat;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
    margin-bottom: 4px;
  }

  p {
    font-family: Montserrat;
    color: #ee9abe;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const Text = styled.span`
  font-family: Montserrat;
  color: #ee9abe;
  font-size: 12px;
`;
