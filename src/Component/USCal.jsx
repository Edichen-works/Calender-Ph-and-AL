import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const localizer = momentLocalizer(moment);

const USCal = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        //   events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default USCal;
