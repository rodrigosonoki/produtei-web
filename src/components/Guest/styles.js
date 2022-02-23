import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  background: #35258a;
  padding: 40px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 840px;
  height: 100%;
  background: #1f0f5a;
  border-radius: 20px;
  -webkit-box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.24);
`;

export const LeftBox = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;

  div {
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  span {
    text-transform: uppercase;
    font-family: Montserrat;
    color: #f26666;
    font-weight: 900;
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-family: Montserrat;
    color: #ee9abe;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  input {
    width: 260px;
    border: none;
    border-radius: 4px;
    height: 28px;
  }

  input:focus {
    outline: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NameInput = styled.div``;

export const MessageInput = styled.div`
  input {
    height: 200px;
    margin-top: 8px;
  }
`;
