import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
export default function App(params) {
  return (
    <main>
      <SearchBar></SearchBar>
      <Nav></Nav>
      <Outlet />
    </main>
  );
}
