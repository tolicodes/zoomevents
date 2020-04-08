import React from "react";
import styled from "styled-components";

import Event, { TEventProps } from "./Event";

const Container = styled("div")``;

const CategoryName = styled("h2")``;

const Events = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export type TCategoryProps = {
  name: string;
  events: TEventProps[];
};

export default ({ events, name }: TCategoryProps) => (
  <Container>
    <CategoryName>{name}</CategoryName>
    <Events>
      {events.map(event => (
        <Event {...event} />
      ))}
    </Events>
  </Container>
);
