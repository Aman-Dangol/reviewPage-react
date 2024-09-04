import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export const SearchInput = createContext("");

export default function App(params) {
  const [Search, setSearch] = useState("");
  const [listBg, setListBg] = useState("");

  return (
    <main className="bg-[#e2e4e1] min-h-screen">
      <SearchInput.Provider value={[Search, setSearch, listBg, setListBg]}>
        <SearchBar></SearchBar>
        <Nav setListBg={setListBg} listBg={listBg}></Nav>
        <Outlet />
      </SearchInput.Provider>
    </main>
  );
}
