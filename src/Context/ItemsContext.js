import { createContext, useContext, useReducer, useState } from "react";
const ItemsContext = createContext();
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function ItemsProvider({ children }) {
  const [items, setItems] = useState(initialItems);
  function onAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function onDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onClearItems() {
    setItems([]);
  }

  return (
    <ItemsContext.Provider
      value={{
        onAddItems,
        onDeleteItems,
        onToggleItem,
        onClearItems,
        items,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("AuthContxt wasn't used");
  }
  return context;
}
export { ItemsProvider, useItems };
