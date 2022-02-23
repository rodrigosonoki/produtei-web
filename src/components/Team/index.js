import React from "react";

import { Container, Content, Row } from "./styles";
import MemberCard from "../MemberCard";

import teamMembers from "../../assets/data/teamMembers";

function Team() {
  return (
    <Container>
      <Content>
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
