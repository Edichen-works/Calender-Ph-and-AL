import React from "react";
import { useState, useEffect } from "react";
import MyCalendar from "./MyCalender";

const LocalCalender = (props) => {
//   const [data, setData] = useState(data);
  //   const [person, setPerson]= useState(data);
//   const [ph, setPh] = useState({});
//   const apiUrl = `https://calendarific.com/api/v2/holidays?&api_key=e7534eab09af32edc092e709253594d40871f471&country=SG&year=2022`;
//   const makeApiCall = () => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setPh(data);
//       });
//   };

//   useEffect(() => {
//     makeApiCall();
//   }, []);

//   const holiday = [

// ];

  return (
    <div>
      <h2>Singapore</h2>
      {/* <div className="abc">{ph?.response?.holidays?.[0]?.name}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.description}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.date?.iso}</div> */}
      <MyCalendar/>
    </div>
  );
};

export default LocalCalender;

