import logo from "../assets/logo.png";
import Profile from "./Profile";
export default function SearchBar() {
  return (
    <div className="flex justify-between items-center text-md p-2">
      <a href="/">
        <img src={logo} className="object-cover w-14  " alt="" />
      </a>
      <input
        className="outline-none p-2 text-left w-[30%] bg-slate-300 rounded-xl"
        type="text"
        oncha
        placeholder="Search"
      />
      <Profile />
    </div>
  );
}
