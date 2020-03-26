import React from "react";
import styled from "styled-components";
import moment from "moment";

const TopContainer = styled("div")`
  min-height: 360px;
  display: flex;
`;

const HeaderImage = styled("img")`
  max-width: 720px;
`;

const BasicDetails = styled("div")`
  background-color: #fafafa;
  padding: 40px;

  display: flex;
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BasicDetailsTop = styled("div")`
  width: 100%;
`;

const DayOfTheWeek = styled("div")``;

const Date = styled("div")``;

const EventName = styled("h2")`
  font-size: 20px;
`;

const Creator = styled("div")`
  color: #6e7283;
`;

const RSVPLink = styled("a")`
  background-color: #3898ec;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 16px;
`;

type TTopContainerOpts = {
  header_image: string;
  date_start: number;
  name: string;
  creator: string;
  rsvp_link: string;
};

export default ({
  header_image,
  date_start,
  name,
  creator,
  rsvp_link
}: TTopContainerOpts) => (
  <TopContainer>
    <HeaderImage src={header_image} />
    <BasicDetails>
      <BasicDetailsTop>
        <DayOfTheWeek>{moment.unix(date_start).format("dddd")}</DayOfTheWeek>
        <Date>{moment.unix(date_start).format("MMMM DD, YYYY")}</Date>
        <EventName>{name}</EventName>
        <Creator>by {creator}</Creator>
      </BasicDetailsTop>

      <RSVPLink href={rsvp_link}>RSVP</RSVPLink>
    </BasicDetails>
  </TopContainer>
);
