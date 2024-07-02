function Table({ Titles, Content }) {
  return (
    <div className=" rounded-2xl mx-2">
      <table className="w-full">
        <thead className=" text-[10px] w-full bg-white font-bold h-10">
          <tr>
            {Titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {Content.map((row) => (
            <tr
              key={row.Course}
              className="text-[10px] text-center bg-white border border-spacing-y-10"
            >
              <td className="py-3 text-wrap w-64 pl-4 text-left font-semibold">
                {row.Course}
              </td>

              <td className="py-3 px-4 ">
                {row.Duration === "" ? "---" : row.Duration}
              </td>
              <td className="py-3 px-4 ">
                {row.Number === "" ? "---" : row.Number}
              </td>

              <td className="py-3 px-4 ">{row.Jun === "" ? "---" : row.Jun}</td>
              <td className="py-3 px-4 ">
                {row.july === "" ? "---" : row.july}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
