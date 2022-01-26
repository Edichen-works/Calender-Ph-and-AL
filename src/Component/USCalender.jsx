import React from "react";
import { useState, useEffect, useRef } from "react";
import USCal from "./USCal";
import Card from "./Card";

const USCalender = (props) => {
  const [search, SetSearch] = useState("");
  const input = useRef();
  const callApi = () => {
    SetSearch("");
    console.log(SetSearch);
  };
  // const y2022 = 2022;
  // const apiUrlUs = `https://calendarific.com/api/v2/holidays?&api_key=e7534eab09af32edc092e709253594d40871f471&country=US&year=${y2022}`;
  // const makeApiCall = () => {
  //   fetch(apiUrlUs)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPh(data);
  //     });
  // };

  // useEffect(() => {
  //   makeApiCall();
  // }, []);

  const handleSubmit = () => {
    console.log(input.current.value);
    SetSearch(input.current.value);
  };

  return (
    <div>
      <h1>United States PH</h1>
      <form onSubmit={handleSubmit}>
        <input ref={input} type="text" placeholder="Search PHs!" />
      </form>
      <button onClick={callApi} />
      {/* <div className="abc">{ph?.response?.holidays?.[0]?.name}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.description}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.date?.iso}</div> */}
      {/* <USCal/> */}
      <Card />
    </div>
  );
};

export default USCalender;
