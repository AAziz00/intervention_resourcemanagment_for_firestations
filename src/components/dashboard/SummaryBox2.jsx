import clockoutline from "../../svgIcons/clockoutline.svg";

function SummaryBox2({ title, iconSrc, value, updated, description }) {
  return (
    <div className="flex flex-col pl-2 min-w-40 h-60 p-1 mx-2 grow rounded-lg bg-white">
      <div className="flex flex-col justify-end gap-2 h-[70%]">
        <img src={iconSrc} alt="icon" width="55" className="mt-6" />
        <p className="text-sm font-bold mb-2 mt-6 text-wrap w-40">{title}</p>
      </div>
      <hr />
      <div className="h-[30%] mt-2">
        <p className="text-sm font-semibold mb-2">
          {description}:{value}
        </p>

        <p className="flex text-xs  ">
          <img src={clockoutline} />
          <span className="ml-1"> updated {updated} days ago</span>
        </p>
      </div>
    </div>
  );
}

export default SummaryBox2;
