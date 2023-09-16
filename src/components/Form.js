import { useState } from "react";
import { useItems } from "../Context/ItemsContext";

//import "./App.css";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(2);
  const { onAddItems } = useItems();

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
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
