import ImageContainer from "./ImageContainer";

export default function ProductContainer() {
  return (
    <section className="grid grid-cols-2">
      <ImageContainer />
      <p className="p-2">this is details</p>
    </section>
  );
}
