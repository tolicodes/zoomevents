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

export default ({
  price,
  description,
  date_start,
  date_end,
  tags,
  zoom_link
}) => (
  <Container>
    <Left>Hi</Left>
    <Right></Right>
  </Container>
);
