import React from "react";
import { useState, useEffect, useRef } from "react";
import USCal from "./USCal";
import UsaCard from "./UsaCard";

const USCalender = (props) => {
  const [usPH, setUsPH] = useState([]);
  const [search, setSearch] = useState("");
  const [selecetedHol, setselecetedHol] = useState({});
  const inputRef = useRef();

  const usApi = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_API_KEY}&country=US&year=y2022`;
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
      <h2>United States Holidays</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search USA PHs!" />
        <button>Submit</button>
      </form>
      <USCal usPH={usPH} setselecetedHol={setselecetedHol} />
      <UsaCard selecetedHol={selecetedHol} />
    </div>
  );
};

export default USCalender;
