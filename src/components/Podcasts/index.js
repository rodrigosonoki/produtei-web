import React from "react";

import { Container, Content, Player, Box } from "./styles";

import Spotify from "../../assets/badges/Spotify";
import Deezer from "../../assets/badges/Deezer";
import Apple from "../../assets/badges/Apple";

function Podcasts() {
  return (
    <Container>
      <Content>
        <Player>
          <iframe
            style={{ borderRadius: "8px" }}
            src="https://open.spotify.com/embed/episode/2krwThGGGuXfq47pp38DZS?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Player>
        <Box>
          <span>Habilidades de produto</span>
          <p>
            Bia decide confrontar um acontecimento do passado e começa a
            questionar o que é real e o que é falso dentro da nossa cabeça.
          </p>
          <div>
            <Spotify height="24px" />
            <Deezer height="24px" />
            <Apple height="24px" />
          </div>
        </Box>
      </Content>
    </Container>
  );
}

export default Podcasts;
