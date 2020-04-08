import React from "react";
import styled from "styled-components";
import Category, { TCategoryProps } from "./Category";

const Container = styled("div")``;

export type TFrontPageProps = {
  categories: TCategoryProps[];
};

export default ({ categories }: TFrontPageProps) => (
  <Container>
    {categories.map(category => (
      <Category {...category} />
    ))}
  </Container>
);
