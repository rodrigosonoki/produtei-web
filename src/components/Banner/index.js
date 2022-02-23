import React from "react";

import { Container, Content, FirstRow, SecondRow, ThirdRow } from "./styles";

function Banner() {
  return (
    <Container>
      <Content>
        <FirstRow>
          <span>A VIDA DE</span>
        </FirstRow>
        <SecondRow>
          <span>PRODUTOS</span>
        </SecondRow>
        <ThirdRow>
          <span>COMO ELA É</span>
        </ThirdRow>
      </Content>
    </Container>
  );
}

export default Banner;
