import ProductCard from "../components/ProductCard";
import { SearchInput } from "../App";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
export default function HomePage() {
  let ProductList = useLoaderData();

  let [search, x, listBg] = useContext(SearchInput);
  const regex = new RegExp(search, "gi");

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4">
      {ProductList?.filter((p) => {
        if (listBg) {
          console.log(listBg);

          return p.for == listBg || p.type == listBg;
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
