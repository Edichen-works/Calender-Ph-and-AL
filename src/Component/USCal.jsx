import React from "react";
import { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const localesUSA = {
  "en-US": require("date-fns/locale/en-US"),
};

const localiser = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  localesUSA,
});
const localizer = momentLocalizer(moment);

const addEventUSA = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2022-01-18"),
    end: new Date("2022-01-18"),
  },
];

const USCal = (props) => {
  const [newEventUsa, setnewEventUsa] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEventsUsa, setallEventsUsa] = useState(addEventUSA);

  const handleAddEvent = () => {
    setallEventsUsa([...allEventsUsa, newEventUsa]);
  };

  const usaPH = props.usPH;
  const mapUSAPH = usaPH.map((day) => {
    return {
      title: day.name,
      start: new Date(day.date.iso),
      end: new Date(day.date.iso),
      allDay: true,
    };
  });

  return (
    <div>
      <h2>Add AL</h2>
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
          selected={newEventUsa.end}
          onChange={(end) => setnewEventUsa({ ...newEventUsa, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add AL
        </button>
      </div>
      <Calendar
        localizer={localiser} //localiser, localizer
        events={mapUSAPH} //allEvents, mapPublicHoliday
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default USCal;
