import EventTable from "../components/Events/EventTable";

function Events() {
  return (
    <div>
      <div className="flex bg-white m-2 py-3 rounded-md items-center justify-between px-4">
        <h2 className="text-sm font-semibold">Events</h2>
        <button className="bg-primary-red text-[10px] text-white rounded-3xl px-3 py-1 hover:text-sm hover:shadow-lg hover:shadow-primary-red">
          <span className="text-sm">+</span> Add New
        </button>
      </div>
      <div>
        <EventTable />
      </div>
    </div>
  );
}

export default Events;
