import { useEffect, useState } from "react";

const API = "http://localhost:9000/employeelist";

const Titles = [
  "Name of Employee",
  "Title",
  "Department",
  "Phone",
  "Email",
  "actions",
];
function Table() {
  const [Content, setContent] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(API);
      const data = await res.json();
      return setContent(data);
    }
    fetchdata();
  }, []);

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
              key={row.name}
              className="text-[10px] text-center bg-white border border-spacing-y-10"
            >
              <td className="py-3 font-semibold px-4 text-left">{row.name}</td>
              <td className={`py-3  px-4 `}>{row.title}</td>
              <td className="py-3 px-4">{row.department}</td>
              <td className="py-3 px-4">{row.phone}</td>

              <td className="py-3 px-4">{row.email}</td>
              <td className="py-3  px-4">
                <button className="mr-2 " onClick={() => EditEmployee()}>
                  🖊
                </button>
                <button onClick={() => delteEmployee()}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
