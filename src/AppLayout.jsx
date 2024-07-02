import { Outlet } from "react-router-dom";

import NavBar from "./Pages/NavBar";
import SideBar from "./Pages/SideBar";

function AppLayout() {
  return (
    <>
      <div className="flex bg-[#EEF4F6] w-screen h-screen flex-grow">
        <div className=" w-[20%]">
          <SideBar />
        </div>
        <div className=" w-[80%]">
          <div>
            <NavBar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
