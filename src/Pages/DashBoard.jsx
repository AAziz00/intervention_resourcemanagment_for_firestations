import DashBoard1stRow from "../components/dashboard/DashBoard-1stRow";
import DashBoard2ndRow from "../components/dashboard/DashBoard-2ndRow";
import AttendenceTable from "../components/Attendence/AttendenceTable";

function DashBoard() {
  return (
    <div className="bg-[#EEF4F6] ml-0 flex flex-col gap-2">
      <DashBoard1stRow />
      <DashBoard2ndRow />
      <AttendenceTable />
    </div>
  );
}

export default DashBoard;
