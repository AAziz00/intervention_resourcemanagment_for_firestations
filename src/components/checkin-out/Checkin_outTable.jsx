function Checkin_outTable({ Titles, Content }) {
  return (
    <div className=" rounded-2xl mx-2">
      <table className="w-full">
        <thead className=" text-[10px] uppercase bg-white font-bold h-10">
          <tr>
            {Titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        {/* <tbody className="">
          {Content.map((row) => (
            <tr
              key={row.name}
              className="text-xs text-center bg-white border border-spacing-y-10"
            >
              <td className="py-3 px-4 text-left">{row.nature}</td>
              <td
                className={`py-3  px-4 ${row.Number > 3000 ? "text-primary-red" : "text-green-600"}`}
              >
                {row.Number}
              </td>
              <td className="py-3 px-4">{row.Minor}</td>
              <td className="py-3 px-4">{row.serious}</td>

              <td className="py-3 px-4">{row.Dead}</td>
              <td className="py-3 px-4">
                <img src={row.Action} alt="" />
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default Checkin_outTable;
