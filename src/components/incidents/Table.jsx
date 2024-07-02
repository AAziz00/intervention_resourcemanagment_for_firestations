function Table({ Titles, Content }) {
  return (
    <div className=" rounded-2xl mx-2">
      <table className="w-full">
        <thead className=" text-sm  bg-white font-semibold h-10">
          <tr>
            {Titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {Content.map((row) => (
            <tr
              key={Math.floor(Math.random() * 12133)}
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;
