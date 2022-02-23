import React from "react";

import { Container, Content, Row, Heading } from "./styles";
import MemberCard from "../MemberCard";

import teamMembers from "../../assets/data/teamMembers";

function Team() {
  return (
    <Container>
      <Content>
        <Heading>
          <div style={{ color: "#FFF" }}>#TIME</div>
          <div style={{ color: "#F26666" }}>PRODUTEI</div>
        </Heading>
        <Row>
          <MemberCard
            name={teamMembers[0].name}
            position={teamMembers[0].position}
            description={teamMembers[0].description}
          />
          <MemberCard
            name={teamMembers[0].name}
            position={teamMembers[0].position}
            description={teamMembers[0].description}
          />
        </Row>
        <Row>
          <MemberCard
            name={teamMembers[0].name}
            position={teamMembers[0].position}
            description={teamMembers[0].description}
          />
          <MemberCard
            name={teamMembers[0].name}
            position={teamMembers[0].position}
            description={teamMembers[0].description}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default Team;
