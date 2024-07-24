import "./App.css";
import { PokemonsContainer } from "./components/PokemonsContainer";
import { AddGameForm } from "./components/AddGameForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsContainer />} />
        <Route path="/form" element={<AddGameForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
