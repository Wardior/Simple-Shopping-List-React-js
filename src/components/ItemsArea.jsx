import React from "react";
import ItemCase from "./ItemCase";
import { useItems } from "../contexts/context.app";

function ItemsArea() {
  const { state } = useItems();

  return (
    <div className="bg-blue-300 rounded-t-md flex flex-col gap-2 p-4 h-4/5 max-h-4/5 md:h-60 md:max-h-60 overflow-y-scroll">
      {state.items.length > 0 ? (
        state.items.map((item, index) => <ItemCase key={index} item={item} />)
      ) : (
        <div className="h-full flex justify-center items-center">
          <span className="text-stone-500 italic">Nothing yet</span>
        </div>
      )}
    </div>
  );
}

export default ItemsArea;
