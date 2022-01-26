import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  console.log("abc", props.ph);

  const publicHoliday = props.ph;
  const mapPublicHoliday = publicHoliday.map((day) => {
    return {
      title: day.name,
      start: new Date(day.date.iso),
      end: new Date(day.date.iso),
      allDay: true,
    };
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={mapPublicHoliday}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default MyCalendar;
