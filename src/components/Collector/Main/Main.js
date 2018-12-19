import React from "react";
import { Container } from "semantic-ui-react";
import { Flex } from "../style";
import Aside from "./Aside/Aside";
import Album from "./Album/Album";

function Main() {
  return (
    <Container>
      <Flex>
        <Aside />
        <Album />
      </Flex>
    </Container>
  );
}

export default Main;
