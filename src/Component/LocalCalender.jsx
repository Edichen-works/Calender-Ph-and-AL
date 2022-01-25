import React from "react";
import { useState, useEffect, useRef } from "react";
import MyCalendar from "./MyCalender";
import Card from "./Card";

const LocalCalender = (props) => {
  const [ph, setPh] = useState([]);
  //   const [phArr, setPhArr] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHoliday, setSelectedHoliday] = useState({});
  const inputRef = useRef();

  //   const searchHol = () => {
  //     SetSearch("");
  //     console.log(search);
  //   };
  //   const apiUrl = data;
  // const apiUrl = `https://calendarific.com/api/v2/${search}?&api_key=e7534eab09af32edc092e709253594d40871f471&country=SG&year=2022`;
  const apiUrl = `https://calendarific.com/api/v2/holidays?&api_key=e7534eab09af32edc092e709253594d40871f471&country=SG&year=2022`;
  const makeApiCall = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPh(data?.response?.holidays);
        // console.log(data?.response?.holidays);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, [search]);

  const findHoliday = (searchedItem) => {
    console.log("ph", ph);
    const foundHoliday = ph.filter((item, index) => {
      return item.name.toLowerCase() === searchedItem.toLowerCase();
    });
    console.log("found Holiday", foundHoliday);
    if (foundHoliday[0]) {
      setSelectedHoliday(foundHoliday[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
    console.log(inputRef.current.value);
    findHoliday(inputRef.current.value);
    // console.log("hello");
  };
  //   console.log(ph);

  //   useEffect(() => {
  //     console.log("selected Holiday", selectedHoliday);
  //     console.log("search", search);
  //   }, [search]);

  //   const cards = selectedHoliday.map((item, index) => {
  //     return (
  //       <Card
  //         name={item.name}
  //         description={item.description}
  //         date={item.date.iso}
  //         key={index}
  //       />
  //     );
  //   });

  return (
    <div>
      <h2>Singapore</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search PHs!" />
        <button>Submit</button>
      </form>
      {/* <div className="abc">{ph?.response?.holidays?.[0]?.name}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.description}</div>
      <div className="abc">{ph?.response?.holidays?.[0]?.date?.iso}</div> */}
      {/* <p>{holidayNames}</p> */}
      {/* <MyCalendar /> */}
      <Card selectedHoliday={selectedHoliday} />
    </div>
  );
};

export default LocalCalender;
