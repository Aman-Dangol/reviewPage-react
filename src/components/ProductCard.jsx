import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className=" p-4 flex flex-col">
      <img
        src={product.images[0]}
        alt=""
        className="h-full w-full object-cover"
      />
      <span className="font-semiboldnpm">{product.name}</span>
      <span>{product.price}</span>
    </Link>
  );
}
