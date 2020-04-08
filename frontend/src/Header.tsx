import React from "react";
import styled from "styled-components";

import { Search } from "semantic-ui-react";
import { FaSearch } from "react-icons/fa";

import Button from "./common/Button";

const Container = styled("div")`
  height: 100px;
  background-color: white;
  padding: 0 50px;

  display: flex;
  align-items: center;
`;

const LogoText = styled("div")`
  color: #f14221;
  font-weight: bold;
  font-size: 26px;

  font-family: "Noto Sans TC", sans-serif;

  margin-right: 30px;
`;

const SearchWrapper = styled("div")`
  position: relative;

  input {
    width: 500px;
    padding: 8px 12px;
    font-size: 14px;
    padding-left: 55px;
    border: 1px solid transparent;
    background-color: #f5f6f6;
    margin-right: 20px;
  }

  .results {
    display: none;
  }

  /* .results.visible {
    display: block;
  } */
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;

  top: 10px;
  left: 20px;
`;

const ButtonContainer = styled("div")`
  flex: 1;
  display: flex;

  justify-content: flex-end;
`;

const results = [
  {
    title: "Test",
    description: "Testing"
  }
];

export default () => (
  <Container>
    <LogoText>ZoomEvents</LogoText>

    <SearchWrapper>
      <SearchIcon />
      <Search placeholder="Search events" loading={false} results={results} />
    </SearchWrapper>

    <ButtonContainer>
      <Button>List an Event</Button>
    </ButtonContainer>
  </Container>
);
