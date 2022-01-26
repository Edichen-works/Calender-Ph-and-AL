import React from "react";
import { useState, useEffect, useRef } from "react";
import USCal from "./USCal";
import UsaCard from "./UsaCard";

const USCalender = (props) => {
  const [usPH, setUsPH] = useState([]);
  const [search, setSearch] = useState("");
  const [selecetedHol, setselecetedHol] = useState({});
  const inputRef = useRef();

  const usApi = `https://calendarific.com/api/v2/holidays?&api_key=e7534eab09af32edc092e709253594d40871f471&country=US&year=y2022`;
  const makeApiCall = () => {
    fetch(usApi)
      .then((response) => response.json())
      .then((data) => {
        setUsPH(data?.response?.holidays);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, [search]);

  const findHoliday = (searchedItem) => {
    console.log("usPH", usPH);
    const foundHoliday = usPH.filter((item, index) => {
      return item.name.toLowerCase() === searchedItem.toLowerCase();
    });
    console.log("found Holiday", foundHoliday);
    if (foundHoliday[0]) {
      setselecetedHol(foundHoliday[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
    console.log(inputRef.current.value);
    findHoliday(inputRef.current.value);
  };

  return (
    <div>
      <h1>United States of America PH</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search USA PHs!" />
        <button>Submit</button>
      </form>
      {/* <USCal usPH={usPH} /> */}
      <UsaCard selecetedHol={selecetedHol} />
    </div>
  );
};

export default USCalender;
