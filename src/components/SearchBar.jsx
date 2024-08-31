import logo from "../assets/logo.png";
import Profile from "./Profile";
export default function SearchBar() {
  return (
    <div className="flex justify-between items-center text-md p-2">
      <img src={logo} className="object-cover w-14  " alt="" />
      <input
        className="outline-none p-2 text-left w-[30%] bg-slate-200 rounded-xl"
        type="text"
        placeholder="Search"
      />
      <Profile />
    </div>
  );
}
