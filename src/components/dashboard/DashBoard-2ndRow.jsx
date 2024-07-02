import SummaryBox2 from "./SummaryBox2";
import incidents from "../../svgIcons/incidents.svg";
import Humanresources from "../../svgIcons/Humanresources.svg";
import ReportsonIncidents from "../../svgIcons/ReportsonIncidents.svg";
import accountingandfinance from "../../svgIcons/accountingandfinance.svg";

function DashBoard2ndRow() {
  return (
    <div className="flex justify-evenly  ">
      <SummaryBox2
        title="incidents/emergency Events"
        iconSrc={incidents}
        value={245}
        description="total"
        updated={2}
      />
      <SummaryBox2
        title="Reporting on incidents/Emergencies"
        iconSrc={ReportsonIncidents}
        value={245}
        description="Total Employee"
        updated={2}
      />
      <SummaryBox2
        title="Accounting and finance"
        iconSrc={accountingandfinance}
        value={245}
        description="Total employee"
        updated={2}
      />
      <SummaryBox2
        title="Human Resources"
        iconSrc={Humanresources}
        value={245}
        description="Total Employee"
        updated={2}
      />
      <SummaryBox2
        title="Training plans"
        iconSrc={incidents}
        value={245}
        description="Total Employee"
        updated={2}
      />
    </div>
  );
}

export default DashBoard2ndRow;
