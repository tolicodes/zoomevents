import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
`;

const Left = styled("div")`
  flex: 1;
`;

const Right = styled("div")`
  width: 360px;
  background-color: red;
`;

type TBottomContainerOpts = {
  price: number;
  description: string;
  date_start: string;
  date_end: string;
  tags: string[];
  zoom_link: string;
};

export default ({
  price,
  description,
  date_start,
  date_end,
  tags,
  zoom_link
}: TBottomContainerOpts) => (
  <Container>
    <Left>Hi</Left>
    <Right></Right>
  </Container>
);
