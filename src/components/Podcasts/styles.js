import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #35258a;
`;

export const Content = styled.div`
  width: 1000px;
  height: 160px;
  align-items: center;
  display: flex;
  padding: 0 80px;
`;

export const Player = styled.div``;

export const Box = styled.div`

width: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;

margin-left: 24px; 

  span {
    font-family: Montserrat;
    font-weight: 900;
    text-transform uppercase;
    font-size: 20px;
    color: #FFF;
    
  }

  p {
    margin: 12px 0;
    font-family: Montserrat;
    color: #EE9ABE;
    font-size: 12px;
    line-height: 20px;
  }

  div {
    display: flex;  
    width: 80px;
    justify-content: space-between
  }

`;
