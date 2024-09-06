import { useState, createContext, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export const SearchInput = createContext("");

export default function App(params) {
  console.clear();
  const [Search, setSearch] = useState("");
  const [listBg, setListBg] = useState("");
  const cartItems = useRef([]);
  return (
    <main className="bg-[#e2e4e1] min-h-screen">
      <SearchInput.Provider
        value={[Search, setSearch, listBg, setListBg, cartItems]}
      >
        <SearchBar></SearchBar>
        <Nav setListBg={setListBg} listBg={listBg}></Nav>
        <Suspense fallback="asdas">
          <Outlet />
        </Suspense>
      </SearchInput.Provider>
    </main>
  );
}
