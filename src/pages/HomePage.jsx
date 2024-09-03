import ProductCard from "../components/ProductCard";
import { PRODUCT_lIST } from "../constants/ProductLists";
export default function HomePage() {
  return (
    <section className="grid grid-cols-4">
      {PRODUCT_lIST?.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}
