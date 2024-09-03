import ImageContainer from "./ImageContainer";
import ProductDetail from "./ProductDetail";
import { createContext } from "react";
export const productID = createContext();
export default function ProductContainer({ product }) {
  return (
    <section className="grid grid-cols-2 h-[80vh]">
      {console.log("id in context", product)}
      <productID.Provider value={[...product]}>
        <ImageContainer />
        <ProductDetail />
      </productID.Provider>
    </section>
  );
}
