import { LISTS } from "../constants/navlists";

export default function Nav({ listBg, setListBg }) {
  return (
    <nav className="flex list-none [&>*]:p-2 border-b-[1px] border-slate-900">
      {LISTS.map((list, index) => (
        <li
          key={index}
          value={list}
          className={`cursor-pointer transition-all duration-300 ease-in ${
            listBg == list ? "bg-yellow-400" : ""
          }`}
          onClick={(e) => {
            setListBg(e.currentTarget.getAttribute("value"));
          }}
        >
          {list}
        </li>
      ))}
    </nav>
  );
}
