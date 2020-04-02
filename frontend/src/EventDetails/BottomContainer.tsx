import React from "react";
import styled from "styled-components";
import moment from "moment";

const DATE_FORMAT = "MMMM Do YYYY, h:mm a zz";

const Container = styled("div")`
  display: flex;
  padding: 40px 0;
  background-color: white;
  border-top: 1px solid #cacaca;
`;

const Left = styled("div")`
  flex: 1;
  padding-right: 30px;
  padding-left: 100px;
`;

const Section = styled("div")`
  margin-bottom: 20px;
`;

const SectionLabel = styled("h5")`
  font-size: 16px;
  margin: 0;
`;

const Tags = styled("div")`
  font-style: italic;
`;

const Right = styled("div")`
  width: 300px;
  padding: 0 40px;
`;

type TBottomContainerOpts = {
  price: number;
  description: string;
  date_start: number;
  date_end: number;
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
    <Left>
      <Section>
        <SectionLabel>Description</SectionLabel>
        {description}
      </Section>

      <Section>
        <SectionLabel>Tags</SectionLabel>
        <Tags>{tags.join(", ")}</Tags>
      </Section>
    </Left>
    <Right>
      <Section>
        <SectionLabel>Date and Time</SectionLabel>
        {moment.unix(date_start).format(DATE_FORMAT)} -{" "}
        {moment.unix(date_end).format(DATE_FORMAT)}
      </Section>

      <Section>
        <SectionLabel>Price</SectionLabel>${price}
      </Section>

      <Section>
        <SectionLabel>Zoom Link</SectionLabel>
        <a href={zoom_link}>Link</a>
      </Section>
    </Right>
  </Container>
);
