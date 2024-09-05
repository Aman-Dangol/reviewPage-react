import ImageContainer from "./ImageContainer";
import ProductDetail from "./ProductDetail";
import { createContext } from "react";
export const productID = createContext();
export default function ProductContainer({ product }) {
  return (
    <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
      <productID.Provider value={[...product]}>
        <ImageContainer />
        <ProductDetail />
      </productID.Provider>
    </section>
  );
}
