import Checkin_outTable from "../components/checkin-out/Checkin_outTable";
const Titles = [
  "Vehicle No",
  "check out",
  "check in",
  "inventory Items",
  "Break times",
  "Extra Hrs",
  "status",
  "Actions",
];
function Checkin_out() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">Check In/Out</h2>
      </div>
      <div className="table w-full h-full ">
        <Checkin_outTable Titles={Titles} />
      </div>
    </div>
  );
}

export default Checkin_out;
