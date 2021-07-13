import React from "react";

export default function Weather() {
  const weatherInfo = [
    {
      id: 1,
      weekDey: "Monday",
      imgURL: "./img/01.svg",
      temp: "36C",
    },
    {
      id: 2,
      weekDey: "Tuesday",
      imgURL: "./img/05.svg",
      temp: "32C",
    },
    {
      id: 3,
      weekDey: "Wednesday",
      imgURL: "./img/09.svg",
      temp: "35C",
    },
    {
      id: 4,
      weekDey: "Thursday",
      imgURL: "./img/17.svg",
      temp: "45C",
    },
    {
      id: 5,
      weekDey: "Friday",
      imgURL: "./img/09.svg",
      temp: "36C",
    },
    {
      id: 6,
      weekDey: "Saturday",
      imgURL: "./img/17.svg",
      temp: "37C",
    },
    {
      id: 7,
      weekDey: "Sunday",
      imgURL: "img/17.svg",
      temp: "39C",
    },
  ];
  const weather = weatherInfo.map((el) => (
    <div>
      <h2>
        {el.weekDey}
      </h2>
      <img src={el.imgURL} alt="" />
      <p>
        {el.temp}
      </p>
    </div>
  ));
  return <div className="flex">{weather}</div>;
}
