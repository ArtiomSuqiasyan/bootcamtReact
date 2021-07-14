import React from "react";
import img1 from "./img/01.svg";
import img2 from "./img/05.svg";
import img3 from "./img/17.svg";
import img4 from "./img/09.svg";

export default function Weather() {
  const weatherInfo = [
    {
      id: 1,
      weekDey: "Monday",
      imgURL: img1,
      temp: "36C",
    },
    {
      id: 2,
      weekDey: "Tuesday",
      imgURL: img1,
      temp: "32C",
    },
    {
      id: 3,
      weekDey: "Wednesday",
      imgURL: img2,
      temp: "35C",
    },
    {
      id: 4,
      weekDey: "Thursday",
      imgURL: img2,
      temp: "45C",
    },
    {
      id: 5,
      weekDey: "Friday",
      imgURL:img3,
      temp: "36C",
    },
    {
      id: 6,
      weekDey: "Saturday",
      imgURL: img4,
      temp: "37C",
    },
    {
      id: 7,
      weekDey: "Sunday",
      imgURL: img3,
      temp: "39C",
    },
  ];
  const weather = weatherInfo.map((el) => (
    <div>
      <h2>
        {el.weekDey}
      </h2>
      <img src={el.imgURL} alt="WeatherPhoto" />
      <p>
        {el.temp}
      </p>
    </div>
  ));
  return <div className="flex">{weather}</div>;
}
