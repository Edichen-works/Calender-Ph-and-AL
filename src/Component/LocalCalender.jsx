import React from "react";
import { useState, useEffect, useRef } from "react";
import MyCalendar from "./MyCalender";
import Card from "./Card";

const LocalCalender = (props) => {
  const [ph, setPh] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHoliday, setSelectedHoliday] = useState({});
  const inputRef = useRef();

  const apiUrl = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_API_KEY}&country=SG&year=2022`;
  const makeApiCall = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPh(data?.response?.holidays);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, [search]);

  const findHoliday = (searchedItem) => {
    // console.log("ph", ph);
    const foundHoliday = ph.filter((item, index) => {
      return item.name.toLowerCase() === searchedItem.toLowerCase();
    });
    console.log("found Holiday", foundHoliday);
    if (foundHoliday[0]) {
      setSelectedHoliday(foundHoliday[0]);
    }
  };
  console.log(selectedHoliday);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
    console.log(inputRef.current.value);
    findHoliday(inputRef.current.value);
  };

  return (
    <div>
      <h2>Singapore</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search PHs!" />
        <button>Submit</button>
      </form>
      <MyCalendar ph={ph} setSelectedHoliday={setSelectedHoliday} />
      <Card selectedHoliday={selectedHoliday} />
    </div>
  );
};

export default LocalCalender;
