function Table({ Titles, Content }) {
  return (
    <div className=" rounded-2xl mx-2">
      <table className="w-full">
        <thead className=" text-[10px] w-full uppercase bg-white font-bold h-10">
          <tr>
            {Titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        {/* <tbody className="">
          {Content.map((row) => (
            <tr
              key=""
              className="text-[10px] text-center bg-white border border-spacing-y-10"
            >
              <td className="py-3 text-wrap w-64 pl-4 text-left font-semibold"></td>

              <td className="py-3 px-4 "></td>
              <td className="py-3 px-4 "></td>

              <td className="py-3 px-4 "></td>
              <td className="py-3 px-4 "></td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default Table;
