import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState, setState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
// import moment from "moment";
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
// const localizer = momentLocalizer(moment);

// const addEvent = [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date("2022-01-18"),
//     end: new Date("2022-01-18"),
//   },
// ];

const MyCalendar = (props) => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]); //addEvent
  const [cardDetails, setCardDetails] = useState("");

  useEffect(() => {
    const publicHoliday = props.ph;
    const mapPublicHoliday = publicHoliday.map((day) => {
      return {
        title: day.name,
        start: new Date(day.date.iso),
        end: new Date(day.date.iso),
        allDay: true,
      };
    });
    setAllEvents(mapPublicHoliday);
  }, [props.ph]);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const handleAddCard = (event) => {
    const eventName = event.title;
    const foundHoliday = props.ph.filter((element, index) => {
      return element.name.toLowerCase() === eventName.toLowerCase();
    });
    console.log("found Holiday", foundHoliday);
    if (foundHoliday[0]) {
      props.setSelectedHoliday(foundHoliday[0]);
    }
  };

  // const handleSelect = ({ start, end }) => {
  //   const title = window.prompt("New AL");
  //   console.log(title);
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
  // };

  return (
    <div>
      <h3>Add AL</h3>
      <div>
        <input
          type="text"
          placeholder="Add AL"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <ReactDatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add AL
        </button>
        <br />
      </div>
      <Calendar
        localizer={localiser} //localiser(date-fns), localizer(moment)
        events={allEvents} //allEvents, mapPublicHoliday
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        views={["month", "week", "agenda"]}
        onSelectEvent={(event) => handleAddCard(event)} //(event) => alert(event.title)
        // onSelectSlot={handleSelect}
      />
    </div>
  );
};
export default MyCalendar;
