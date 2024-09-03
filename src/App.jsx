import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export default function App(params) {
  console.clear()
  return (
    <main className="bg-[#e2e4e1]">
      <SearchBar></SearchBar>
      <Nav></Nav>
      <Outlet />
    </main>
  );
}
