import ImageContainer from "./ImageContainer";
import ProductDetail from "./ProductDetail";
export default function ProductContainer() {
  return (
    <section className="grid grid-cols-2">
      <ImageContainer />
      <ProductDetail />
    </section>
  );
}
