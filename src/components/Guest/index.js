import React from "react";

import {
  Container,
  Content,
  LeftBox,
  RightBox,
  NameInput,
  MessageInput,
} from "./styles";

function Guest() {
  return (
    <Container>
      <Content>
        <LeftBox>
          <div>
            <span>
              Você pode
              <br />
              sugerir um tema
              <br />
              ou um convidado!
            </span>
            <p>
              Tem algum tema que gostaria de ver aqui no Produtei ou quer
              sugerir uma pessoa bem legal para participar de um episódio com a
              gente? É só mandar!
            </p>
          </div>
        </LeftBox>
        <RightBox>
          <div>
            <NameInput>
              <input placeholder=""></input>
            </NameInput>
            <MessageInput>
              <input placeholder=""></input>
            </MessageInput>
          </div>
        </RightBox>
      </Content>
    </Container>
  );
}

export default Guest;
