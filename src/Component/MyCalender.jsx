import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState, setState } from "react";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localiser = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const localizer = momentLocalizer(moment);

const addEvent = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2022-01-18"),
    end: new Date("2022-01-18"),
  },
];

const MyCalendar = (props) => {
  const publicHoliday = props.ph;
  const mapPublicHoliday = publicHoliday.map((day) => {
    return {
      title: day.name,
      start: new Date(day.date.iso),
      end: new Date(day.date.iso),
      allDay: true,
    };
  });

  const [newEvent, setnewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setallEvent] = useState(mapPublicHoliday); //addEvent

  const handleAddEvent = () => {
    setallEvent([...allEvents, newEvent]);
  };

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New AL");
    console.log(title);
    // if (title)
    // this.setState({
    //   events: [
    //     ...this.state.events,
    //     {
    //       start,
    //       end,
    //       title,
    //     },
    //   ],
    // })
  };

  // const publicHoliday = props.ph;
  // const mapPublicHoliday = publicHoliday.map((day) => {
  //   return {
  //     title: day.name,
  //     start: new Date(day.date.iso),
  //     end: new Date(day.date.iso),
  //     allDay: true,
  //   };
  // });

  return (
    <div>
      <h2>Add AL</h2>
      <div>
        <input
          type="text"
          placeholder="Add AL"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setnewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setnewEvent({ ...newEvent, start })}
        />
        <ReactDatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setnewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add AL
        </button>
      </div>
      <Calendar
        localizer={localiser} //localiser(date-fns), localizer(moment)
        events={allEvents} //allEvents, mapPublicHoliday
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        views={["month", "week", "agenda"]}
        onSelectEvent={(event) => alert(event.title)}
        // onSelectSlot={handleSelect}
      />
    </div>
  );
};
export default MyCalendar;
