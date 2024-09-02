import ProductPath from "../components/ProductPath";
import ProductContainer from "../components/ProductContainer";
import ProductCritics from "../components/ProductCritics";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <section className="p-2 ">
      <ProductPath />
      <ProductContainer />
      <ProductCritics />
      <Outlet />
    </section>
  );
}
