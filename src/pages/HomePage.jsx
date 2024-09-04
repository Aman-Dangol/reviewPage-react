import ProductCard from "../components/ProductCard";
import { PRODUCT_LIST } from "../constants/ProductLists";
import { SearchInput } from "../App";
import { useContext } from "react";
export default function HomePage() {
  let [search, x, listBg] = useContext(SearchInput);
  const regex = new RegExp(search, "gi");

  return (
    <section className="grid grid-cols-4">
      {PRODUCT_LIST?.filter((p) => {
        if (listBg) {
          return p.for == listBg;
        }
        return p;
      })
        .filter((p) => {
          if (p.name.match(regex) || p.brand.match(regex)) {
            return p;
          }
        })
        .map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </section>
  );
}
