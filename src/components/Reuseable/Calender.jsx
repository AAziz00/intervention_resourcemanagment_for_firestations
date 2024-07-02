import { useState } from "react";
import Calendar, { YearView } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calender from "../../svgIcons/calender.svg";
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Calender() {
  const [Value, setValue] = useState(new Date());
  const [display, setdisplay] = useState(false);
  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <div className=" h-fit cursor-pointer w-fit flex flex-col items-end  ">
      <div className="flex gap-2">
        <p className="text-xs text-primary-red">
          {Value.getDate()} {months[Value.getMonth()]} {Value.getFullYear()}
        </p>
        <img src={calender} alt="icon" onClick={() => setdisplay(!display)} />
      </div>
      <Calendar
        value={Value}
        onChange={onChange}
        // dateFormat="dd/mm/yy"
        className={`${display ? "block" : "hidden"} mt-4 absolute z-10`}
      />
    </div>
  );
}

export default Calender;
