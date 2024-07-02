import Calender from "../components/Reuseable/Calender";
import Table from "../components/incidents/Table";
import action from "../svgIcons/action.svg";

const Titles = [
  "Nature of emergencies",
  "number",
  "Minor",
  "serious",
  "Dead",
  "Actions",
];

const Content = [
  {
    nature: "fire",
    Number: 3223,
    Minor: 1016,
    serious: 1943,
    Dead: 112,
    Action: action,
  },
  {
    nature: "fire",
    Number: 1546,
    Minor: 1016,
    serious: 1943,
    Dead: 112,
    Action: action,
  },
  {
    nature: "fire",
    Number: 2223,
    Minor: 1016,
    serious: 1943,
    Dead: 112,
    Action: action,
  },
  {
    nature: "fire",
    Number: 3223,
    Minor: 1016,
    serious: 1943,
    Dead: 112,
    Action: action,
  },
];

function Incidents() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">incident / Emegency </h2>
        <div>
          <Calender />
        </div>
      </div>
      <div className="table w-full h-full ">
        <Table Titles={Titles} Content={Content} />
      </div>
    </div>
  );
}

export default Incidents;
