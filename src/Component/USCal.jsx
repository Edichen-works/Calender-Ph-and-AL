import React, { useState, useEffect } from "react";
import { momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

// const localesUSA = {
//   "en-US": require("date-fns/locale/en-US"),
// };

// const localiser = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   localesUSA,
// });
const localizer = momentLocalizer(moment);

// const addEventUSA = [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date("2022-01-18"),
//     end: new Date("2022-01-18"),
//   },
// ];

const USCal = (props) => {
  const [newEventUsa, setnewEventUsa] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEventsUsa, setAllEventsUsa] = useState([]);
  const [cardDetails, setCardDetails] = useState("");

  useEffect(() => {
    const publicHolidayUsa = props.usPH;
    const mapPublicHolidayUsa = publicHolidayUsa.map((day) => {
      return {
        title: day.name,
        start: new Date(day.date.iso),
        end: new Date(day.date.iso),
        allday: true,
      };
    });
    setAllEventsUsa(mapPublicHolidayUsa);
  }, [props.usPH]);

  const handleAddEvent = () => {
    setAllEventsUsa([...allEventsUsa, newEventUsa]);
  };

  const handleAddCard = (event) => {
    const eventName = event.title;
    const foundHoliday = props.usPH.filter((element, index) => {
      return element.name.toLowerCase() === eventName.toLowerCase();
    });
    console.log("found Holiday", foundHoliday);
    if (foundHoliday[0]) {
      props.setselecetedHol(foundHoliday[0]);
    }
  };

  return (
    <div>
      <h2>Add USA AL</h2>
      <div>
        <input
          type="text"
          placeholder="Add AL"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEventUsa.title}
          onChange={(e) =>
            setnewEventUsa({ ...newEventUsa, title: e.target.value })
          }
        />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEventUsa.start}
          onChange={(start) => setnewEventUsa({ ...newEventUsa, start })}
        />
        <ReactDatePicker
          placeholderText="End Date"
          style={{ marginRight: "10px" }}
          selected={newEventUsa.end}
          onChange={(end) => setnewEventUsa({ ...newEventUsa, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Submit
        </button>
      </div>

      <Calendar
        localizer={localizer} //localiser(date-fns), localizer(moment)
        events={allEventsUsa} //allEvents, mapPublicHoliday
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        views={["month", "week", "agenda"]}
        onSelectEvent={(event) => handleAddCard(event)}
        // onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default USCal;
