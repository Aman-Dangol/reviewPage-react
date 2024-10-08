import ProductPath from "../components/ProductPath";
import ProductContainer from "../components/ProductContainer";
import ProductCritics from "../components/ProductCritics";
import { PRODUCT_LIST } from "../constants/ProductLists";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Suspense } from "react";

export default function Home() {
  const { id } = useParams();

  const product = PRODUCT_LIST.filter((product) => product.id == id);

  return (
    <section className="p-2 ">
      <ProductPath />
      <ProductContainer product={product} />
      <ProductCritics id={id} />
      <Suspense fallback={<h1>Home test loading</h1>}>
        <Outlet />
      </Suspense>
    </section>
  );
}
