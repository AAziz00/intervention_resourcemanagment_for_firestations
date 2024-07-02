import user from "../images/user.jfif";
import searchicon from "../svgIcons/searchicon.svg";
function NavBar() {
  return (
    <div className=" flex justify-end items-center gap-10 pr-10 py-2 bg-[#ffffff]">
      <div className="relative flex justify-end items-center ">
        <input
          type="text"
          placeholder="Search here"
          className={`rounded-full  focus:outline-none focus:ring focus:ring-offset-1 ring-[#ededed] text-sm px-4 w-60 focus:w-64 text-black  h-8 bg-[#EDEDED]`}
        />
        <img
          src={searchicon}
          alt=""
          className="absolute pointer-events-none mr-3"
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="text-xs font-bold">name</p>
        <img
          className="rounded-full border border-blue-500 "
          width="30"
          src={user}
        />
      </div>
    </div>
  );
}

export default NavBar;
