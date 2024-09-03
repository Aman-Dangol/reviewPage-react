import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export const SearchInput = createContext("");

export default function App(params) {
  const [Search, setSearch] = useState("");
  return (
    <main className="bg-[#e2e4e1]">
      <SearchInput.Provider value={[Search, setSearch]}>
        <SearchBar></SearchBar>
        <Nav></Nav>
        <Outlet />
      </SearchInput.Provider>
    </main>
  );
}
