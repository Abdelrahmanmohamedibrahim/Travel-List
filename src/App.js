import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ItemsProvider } from "./Context/ItemsContext";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return (
    <>
      <ItemsProvider>
        <div className="App">
          <Logo />
          <Form />
          <PackingList />
          <Stats />
        </div>
      </ItemsProvider>
    </>
  );
}

export default App;
