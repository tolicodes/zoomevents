import React from "react";
import TopContainer from "./TopContainer";
import Container from "../Container";

export default ({
  name,
  price,
  header_image,
  description,
  date_start,
  date_end,
  creator,
  rsvp_link,
  slug,
  tags,
  zoom_link
}) => {
  return (
    <Container>
      <TopContainer
        header_image={header_image}
        date_start={date_start}
        name={name}
        creator={creator}
        rsvp_link={rsvp_link}
      />
    </Container>
  );
};
