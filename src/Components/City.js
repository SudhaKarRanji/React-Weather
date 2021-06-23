import styled from "styled-components";
import React from "react";

const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border:none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button{
      background-color: black;
      font-size: 14px;
      padding: 0 10px;
      color: white;
      border:none;
      outline: none;
      cursor: pointer;
      font-family: Montserrat;
      font-weight: bold;
  }
`;
const ChooseCity=styled.span`
    color: black;
    margin: 10px auto;
    font-size: 18px;
    font-weight: bold;
`;
const WelcomeLogo=styled.img`
    width: 140px;
    height:140px;
    margin: 40px auto;
`;

const City = (props) => {
  const { updateCity, fetchcity } = props;
  return (
    <>
      <WelcomeLogo src={"./icons/perfect-day.svg"} />
      <ChooseCity>Find Weather for your city</ChooseCity>
      <Search onSubmit={fetchcity}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Your City"
        />
        <button type={"submit"}>Search</button>
      </Search>
    </>
  );
};

export default City;
