import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

export default function App(params) {
  return (
    <main className="bg-slate-200">
      <SearchBar></SearchBar>
      <Nav></Nav>
      <Outlet />
    </main>
  );
}
