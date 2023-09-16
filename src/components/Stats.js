import { useItems } from "../Context/ItemsContext";

//import "./App.css";
function Stats() {
  const { items } = useItems();
  const itemsLength = items.length;
  const backedItems = items.filter((item) => item.packed === true).length;
  const precen = Math.round((backedItems / itemsLength) * 100);

  return (
    <footer className="stats">
      <em>
        {precen === 100
          ? "you have packed everything"
          : ` you have ${itemsLength} items in your list and you already packed
          ${backedItems} (${precen})%`}
      </em>
    </footer>
  );
}

export default Stats;
