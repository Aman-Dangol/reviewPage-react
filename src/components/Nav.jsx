import { LISTS } from "../constants/navlists";
export default function Nav() {
  return (
    <nav className="flex list-none [&>*]:p-2 border-b-2">
      {LISTS.map((list, index) => (
        <li key={index} className="cursor-pointer">
          {list}
        </li>
      ))}
    </nav>
  );
}
