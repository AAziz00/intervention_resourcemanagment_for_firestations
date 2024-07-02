function Links({ name, icon }) {
  return (
    <div
      className={`flex flex-row gap-4 cursor-pointer rounded-3xl hover:bg-primary-red hover:text-white w-full h-full px-3 py-3 justify-start  `}
    >
      <img src={icon} alt="icon" width="12" />
      <p className="text-sm font-light ">{name}</p>
    </div>
  );
}

export default Links;
