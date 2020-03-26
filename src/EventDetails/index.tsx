import React from "react";
import TopContainer from "./TopContainer";
import Container from "../Container";

type TEventDetailsOpts = {
  name: string;
  price: number;
  header_image: string;
  description: string;
  date_start: number;
  date_end: number;
  creator: string;
  rsvp_link: string;
  slug: string;
  tags: string[];
  zoom_link: string;
};

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
}: TEventDetailsOpts) => {
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
