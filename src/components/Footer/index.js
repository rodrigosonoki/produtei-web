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
            <Spotify height="32px" />
            <Deezer height="32px" />
            <Apple height="32px" />
          </Badges>
        </Row>
        <Row>
          ENCONTRE-NOS AQUI:
          <Badges>
            <Linkedin height="24px" />
            <Instagram height="24px" />
            <Facebook height="24px" />
            <Youtube height="24px" />
          </Badges>
        </Row>
      </Content>
    </Container>
  );
}

export default Footer;
