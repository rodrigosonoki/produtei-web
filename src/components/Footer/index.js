import React from "react";

import { Badges, Container, Content, Row } from "./styles";
import Spotify from "../../assets/badges/Spotify";
import Deezer from "../../assets/badges/Deezer";
import Apple from "../../assets/badges/Apple";
import Linkedin from "../../assets/badges/Linkedin";
import Instagram from "../../assets/badges/Instagram";
import Facebook from "../../assets/badges/Facebook";
import Youtube from "../../assets/badges/Youtube";

function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          OUÇA-NOS AQUI:
          <Badges>
            <Spotify />
            <Deezer />
            <Apple />
          </Badges>
        </Row>
        <Row>
          ENCONTRE-NOS AQUI:
          <Badges>
            <Linkedin />
            <Instagram />
            <Facebook />
            <Youtube />
          </Badges>
        </Row>
      </Content>
    </Container>
  );
}

export default Footer;
