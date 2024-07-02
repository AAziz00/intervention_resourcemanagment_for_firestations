function SummaryBox({ title, value, remarks, PercentageValue, iconSrc }) {
  return (
    <div className="flex flex-col min-w-40 p-1 grow ">
      <div className=" -mb-5 ml-2 z-10">
        <img src={iconSrc} alt="active" width="40" />
      </div>
      <div className="bg-white  px-2 rounded-lg py-2 ">
        <div
          className=" flex flex-col rounded-xl  items-end
      "
        >
          <p className="text-xs mt-2">{title}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <hr />
        <p className="px-2 text-xs mt-2 ">
          <span className="text-primary-red font-semibold">
            {PercentageValue ? PercentageValue : ""}
          </span>{" "}
          {remarks}
        </p>
      </div>
    </div>
  );
}

export default SummaryBox;
