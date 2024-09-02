import { LISTS } from "../constants/navlists";
export default function Nav() {
  return (
    <nav className="flex list-none [&>*]:p-2 border-b-[1px] border-slate-900">
      {LISTS.map((list, index) => (
        <li key={index} className="cursor-pointer">
          {list}
        </li>
      ))}
    </nav>
  );
}
