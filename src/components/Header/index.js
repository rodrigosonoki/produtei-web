import React from "react";

import ProduteiLogo from "../../assets/ProduteiLogo.js";
import Separator from "../../assets/Separator.js";
import Button from "../Button";
import ButtonMenu from "../../assets/ButtonMenu";

import {
  Container,
  Content,
  LogoContainer,
  RightContainer,
  Text,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <ProduteiLogo />
          <Separator />
          <Text>Por Ana Dias e Carol Vitorino</Text>
        </LogoContainer>
        <RightContainer>
          <Button text="Apoie o Produtei!" />
          <ButtonMenu />
        </RightContainer>
      </Content>
    </Container>
  );
}

export default Header;
