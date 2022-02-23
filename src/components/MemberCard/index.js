import React from "react";
import Image from "next/image";

import {
  Container,
  Information,
  Text,
  ImageWrapper,
  TextWrapper,
} from "./styles";

import image from "../../assets/32x32.jpeg";

function Team(props) {
  return (
    <Container>
      <Information>
        <ImageWrapper>
          <Image src={image} height={40} width={40} />
        </ImageWrapper>
        <TextWrapper>
          <span>{props.name}</span>
          <p>{props.position}</p>
        </TextWrapper>
      </Information>
      <Text>{props.description}</Text>
    </Container>
  );
}

export default Team;
