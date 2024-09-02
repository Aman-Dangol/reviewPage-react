import ImageContainer from "./ImageContainer";
import ProductDetail from "./ProductDetail";
export default function ProductContainer() {
  return (
    <section className="grid grid-cols-2 h-[80vh]">
      <ImageContainer />
      <ProductDetail />
    </section>
  );
}
