import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  //ph from main all my holidays
  //map of ph pass it into newEvent
  //const newEvent = props.ph.map
  class newEvent {
    constructor(title, start, end, allDay) {
      this.title = "New Year's Day"; //props.ph.name
      this.start = new Date("2022-01-01"); //props.ph.date.iso
      this.end = new Date("2022-01-01"); //props.ph.date.iso
      this.allDay = true;
    }
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={newEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default MyCalendar;
