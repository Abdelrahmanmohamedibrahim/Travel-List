import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> 🌲Far Away 👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    let newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItems(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip 😊</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        <option></option>
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItems, onToggleItem, onClearItems }) {
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
function Items({ items, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => onToggleItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
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
export default App;
