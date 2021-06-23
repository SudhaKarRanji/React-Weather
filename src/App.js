import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";

import Citydata from "./Components/City";
import Weatherinfo from "./Components/WeatherInfo";

export const WeatherIcons = {
  "01d": "./icons/sunny.svg",
  "01n": "./icons/night.svg",
  "02d": "./icons/day.svg",
  "02n": "./icons/cloudy-night.svg",
  "03d": "./icons/cloudy.svg",
  "03n": "./icons/cloudy.svg",
  "04d": "./icons/perfect-day.svg",
  "04n": "./icons/cloudy-night.svg",
  "09d": "./icons/rain.svg",
  "09n": "./icons/rain-night.svg",
  "10d": "./icons/rain.svg",
  "10n": "./icons/rain-night.svg",
  "11d": "./icons/storm.svg",
  "11n": "./icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 30px 10px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
// const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
// `;
function App(){
const [City,updateCity]=useState();
const [weather,updateweather]=useState();
const fetchcity = async(e) => {
  e.preventDefault();
  const response = await axios.get(
    
    `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
  );
   updateweather(response.data);
};
return(
  <Container>
    <AppLabel>Weather Man</AppLabel>
    {City && weather ?(
      <Weatherinfo weather={weather} City={City}/>
    ):(
      <Citydata updateCity={updateCity} fetchcity={fetchcity}/>
    )
    }

  </Container>
);
}
export default App;