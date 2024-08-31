import { LISTS } from "../constants/navlists";
export default function Nav() {
  return (
    <nav className="flex list-none [&>*]:p-2">
      {LISTS.map((list) => (
        <li className="cursor-pointer">{list}</li>
      ))}
    </nav>
  );
}
