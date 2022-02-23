import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  height: 48px;
  border-style: solid none;
  border-color: #ee9abe;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #ee9abe;
  overflow: hidden;
  margin: 0;
  background: #35258a;

  span {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 100%;
    will-change: transform;
    animation: ${rotate} 15s linear infinite;
  }
`;
