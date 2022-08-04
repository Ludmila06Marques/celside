import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterScreen from "../src/EnterScreen.js";
import HomeScreen from "./HomeScreen.js";
import { useState } from "react";
export default function App() {
  const [nome, setNome] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen nome={nome} setNome={setNome} />}
          ></Route>
          <Route
            path="/cupao"
            element={<EnterScreen nome={nome} setNome={setNome} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
