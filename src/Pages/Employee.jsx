import React from "react";
import EmployeeTable from "../components/employee/EmployeeTable";

function Employee() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">Employees </h2>
        <button className="bg-primary-red text-xs text-white rounded-3xl px-3 py-2 hover:text-sm hover:shadow-lg hover:shadow-primary-red">
          <span className="text-sm">+</span> Add New
        </button>
      </div>
      <div>
        <EmployeeTable />
      </div>
    </div>
  );
}

export default Employee;
