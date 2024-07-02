import SummaryBox from "./SummaryBox";
import ActiveEmp from "../../svgIcons/ActiveEmp.svg";
import Attendence from "../../svgIcons/Attendance.svg";
import TotalTask from "../../svgIcons/TotalTask.svg";
import TotalEmp from "../../svgIcons/TotalEmp.svg";

function DashBoard1stRow() {
  return (
    <div className="bg-[#EEF4F6] ">
      <div className="flex justify-center  ">
        <SummaryBox
          title="Active Employee"
          value="1081"
          PercentageValue="+55%"
          remarks="than last week"
          iconSrc={ActiveEmp}
        />
        <SummaryBox
          title="Total Employee"
          value="2300"
          PercentageValue="+3%"
          remarks="than last week"
          iconSrc={TotalEmp}
        />
        <SummaryBox
          title="total Task"
          value="34"
          PercentageValue="+1%"
          remarks="than yesterday"
          iconSrc={TotalTask}
        />
        <SummaryBox
          title="Attendence"
          value="+91"
          remarks="Just updated"
          iconSrc={Attendence}
        />
      </div>
    </div>
  );
}

export default DashBoard1stRow;
