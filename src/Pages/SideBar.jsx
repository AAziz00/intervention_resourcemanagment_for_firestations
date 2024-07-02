import Links from "../components/sidebar/Links";
import Logo from "../svgIcons/Company Logo.png";
import dashboard from "../svgIcons/sidebar/dashboard.svg";
import services from "../svgIcons/sidebar/services.svg";
import attendence from "../svgIcons/sidebar/attendence.svg";
import checkin from "../svgIcons/sidebar/checkin.svg";
import Events from "../svgIcons/sidebar/Events.svg";
import incident from "../svgIcons/sidebar/incident.svg";
import inventory from "../svgIcons/sidebar/inventory.svg";
import resource from "../svgIcons/sidebar/resource.svg";
import training from "../svgIcons/sidebar/training.svg";
import User from "../svgIcons/sidebar/User.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ListItems = [
  { name: "Dashboard", icon: dashboard, link: "dashboard" },
  {
    name: "Services",
    icon: services,
    link: "services",
  },
  {
    name: "incident / Emergency",
    icon: incident,
    link: "incidents",
  },
  {
    name: "Employee",
    icon: User,
    link: "employee",
  },
  {
    name: "Attendence",
    icon: attendence,
    link: "attendence",
  },
  {
    name: "Training",
    icon: training,
    link: "training",
  },
  {
    name: "Resource Managment",
    icon: resource,
    link: "resourcemanagment",
  },
  {
    name: "Events",
    icon: Events,
    link: "events",
  },
  {
    name: "inventory",
    icon: inventory,
    link: "inventory",
  },
  {
    name: "Check in/out",
    icon: checkin,
    link: "checkin_out",
  },
];

function SideBar() {
  const [active, setactive] = useState("Dashboard");
  return (
    <div className=" bg-white pt-2 h-screen">
      <div className="flex gap-2 pl-3 items-center justify-start">
        <img src={Logo} alt="logo" className="logo" width="45" />
        <h1 className="font-semibold text-sm">Company Name</h1>
      </div>
      <ul className="flex flex-col   py-10 justify-center items-center">
        {ListItems.map((item) => (
          <li
            onClick={() => {
              setactive(item.link);
            }}
            key={item.name}
            className={`w-full rounded-full ${active === item.link ? "bg-primary-red font-semibold text-white" : ""}`}
          >
            <Link to={item.link}>
              <Links name={item.name} icon={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
