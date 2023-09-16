//import "./App.css";

import { useItems } from "../Context/ItemsContext";
import Items from "./Items";
function PackingList() {
  const { onClearItems, onDeleteItems, items, onToggleItem } = useItems();
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Items
            items={items}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            key={items.id}
          />
        ))}
      </ul>
      <div className="actions">
        <button onClick={() => onClearItems()}>clear-list</button>
      </div>
    </div>
  );
}

export default PackingList;
