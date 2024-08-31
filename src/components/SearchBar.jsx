import logo from "../assets/logo.png";
import { Search } from "lucide-react";
export default function SearchBar() {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="object-cover w-14  " alt="" />
      <input
        className="outline-none p-2 text-left"
        type="text"
        placeholder="search"
      />
      <div>hello</div>
    </div>
  );
}
