import React from "react";
import SearchInventory from "../components/inventory/SearchInventory";
import AddItems from "../components/inventory/AddItems";
import InventoryTable from "../components/inventory/inventoryTable";

const Titles = [
  "item Name",
  "Branch Name",
  "Quantity",
  "stock in date",
  "stock Used",
  "stock remaining",
];
function Inventory() {
  return (
    <div>
      <h2 className="text-xs mx-4 m-2 font-semibold">Training </h2>
      <SearchInventory />
      <AddItems />
      <div className="mt-1">
        <InventoryTable Titles={Titles} />
      </div>
    </div>
  );
}

export default Inventory;
