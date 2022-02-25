import styled from "styled-components";

export const Container = styled.div`
  background: #35258a;
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 960px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Heading = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: MontSerrat;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 32px;
`;
