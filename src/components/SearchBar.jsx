import logo from "../assets/logo.png";
import Profile from "./Profile";
import { useContext } from "react";
import { SearchInput } from "../App";
export default function SearchBar() {
  let [search, setSearch] = useContext(SearchInput);

  return (
    <div className="flex justify-between items-center text-md p-2">
      <a href="/">
        <img src={logo} className="object-cover w-20  " alt="" />
      </a>
      <input
        className="outline-none p-2 text-left w-[30%] bg-slate-300 rounded-xl"
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Profile />
    </div>
  );
}
