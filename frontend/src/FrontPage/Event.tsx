import React from "react";
import styled from "styled-components";
import moment from "moment";

const DATE_FORMAT = "MMMM Do YYYY, h:mm a zz";

const Container = styled("div")`
  width: 260px;
  height: 350px;

  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CoverImage = styled("img")`
  width: 100%;
`;

const Bottom = styled("div")`
  box-shadow: 1px 1px 1px 1px #e6e6e6;
  background: #f7f7f7;

  padding: 15px 20px;

  position: relative;
  flex: 1;
`;

const Date = styled("div")`
  color: #f14221;
  font-size: 13px;
`;

const EventName = styled("div")`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const Price = styled("div")`
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 3px 10px;
  border-radius: 20px;
  background-color: #b8b8b8;
  color: white;
  font-size: 12px;
`;

export type TEventProps = {
  header_image: string;
  date_start: number;
  name: string;
  price: number;
};

export const formatPrice = (price: number) => {
  if (price === 0) return "Free";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(price);
};

export default ({ header_image, date_start, name, price }: TEventProps) => (
  <Container>
    <CoverImage src={header_image} />

    <Bottom>
      <Date>{moment.unix(date_start).format(DATE_FORMAT)}</Date>
      <EventName>{name}</EventName>

      <Price>{formatPrice(price)}</Price>
    </Bottom>
  </Container>
);
