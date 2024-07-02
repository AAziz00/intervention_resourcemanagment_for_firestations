function SearchInventory() {
  return (
    <div className=" bg-white m-2 py-3 text-sm rounded-md items-center  px-4">
      <p className="py-2 pl-8 font-bold">Search Branch</p>
      <div className="flex p-2 justify-evenly items-center text-[10px]">
        <input
          type="text"
          placeholder="Branch Name"
          className="border-0 border-b-2 outline-none"
        />
        <input
          type="text"
          placeholder="Location"
          className="border-0 border-b-2 outline-none"
        />
        <input
          type="text"
          placeholder="Location"
          className="border-0 border-b-2 outline-none"
        />
        <input
          type="text"
          placeholder="City"
          className="border-0 border-b-2 outline-none"
        />
        <button className="bg-primary-red text-xs text-white rounded-lg px-3 py-1 hover:shadow-lg hover:shadow-primary-red">
          Filter Branch
        </button>
      </div>
    </div>
  );
}

export default SearchInventory;
