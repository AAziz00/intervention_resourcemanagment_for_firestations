import ring from "../../svgIcons/ring.svg";

function SummaryBox({ title, value, description, Value, link }) {
  return (
    <div className="flex flex-col min-w-40 p-1 grow ">
      <div className=" -mb-5 ml-2 z-10">
        <img src={ring} alt="active" width="40" />
      </div>
      <div className="bg-white  px-2 rounded-lg py-2 ">
        <div
          className=" flex flex-col rounded-xl  items-end
      "
        >
          <h3 className="text-xs text-wrap font-bold mt-2 ">{title}</h3>
        </div>
        <p className=" text-sm font-light text-wrap mr-10 mt-5 mb-3">
          <span className="">{description}</span>
          <a href={link} className="text-xs font-semibold">
            read more
          </a>
        </p>
        <hr />
        <p className="px-2 text-md font-bold mt-2 flex justify-end ">{value}</p>
      </div>
    </div>
  );
}

export default SummaryBox;
