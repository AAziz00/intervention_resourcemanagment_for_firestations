import Calender from "../components/Reuseable/Calender";
import TrainingTable from "../components/Training/TrainingTable";

const Titles = ["Course Name", "No of Course", "Duration", "jun", "july"];
const Content = [
  {
    Course: "Station Fire Officers Cource",
    Duration: "6 Weeks",
    Number: "03",
    Jun: "",
    july: "12",
  },
  {
    Course: "Fire Prevention Officers Course",
    Duration: "4 Weeks",
    Number: "03",
    Jun: "6_26",
    july: "9",
  },
  {
    Course: "Fire Safety Management",
    Duration: "2 Weeks",
    Number: "05",
    Jun: "29",
    july: "12_24",
  },
  {
    Course:
      "Fire Prevention & Safety Officers Course (For Educational Institutions)",
    Duration: "2 Weeks",
    Number: "04",
    Jun: "",
    july: "26",
  },
  ,
  {
    Course: "Fire Prevention & Safety Officers Course (For Industries) ",
    Duration: "2 Weeks",
    Number: "04",
    Jun: "",
    july: "",
  },
  {
    Course: "Fire Prevention & Safety Officers Course (For Oil Installations)",
    Duration: "2 Weeks",
    Number: "05",
    Jun: "",
    july: "",
  },
  {
    Course: "Fire Prevention & Safety Officers Course (General)",
    Duration: "2 Weeks",
    Number: "03",
    Jun: "",
    july: "",
  },
  {
    Course: "Fire Prevention & Safety Officers Course(For Ladies)",
    Duration: "2 Weeks",
    Number: "",
    Jun: "",
    july: "",
  },
  {
    Course: "World Civil Defence Day",
    Duration: "1 Day",
    Number: "03",
    Jun: "",
    july: "",
  },
];

function Training() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">Training </h2>
      </div>
      <div className="table w-full h-full ">
        <TrainingTable Titles={Titles} Content={Content} />
      </div>
    </div>
  );
}

export default Training;
