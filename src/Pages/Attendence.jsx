import AttendenceTable from "../components/Attendence/AttendenceTable";
import Calender from "../components/Reuseable/Calender";

function Attendence() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">Attendence</h2>
        <div>
          <Calender />
        </div>
      </div>
      <div className="table w-full h-full ">
        <AttendenceTable />
      </div>
    </div>
  );
}

export default Attendence;
