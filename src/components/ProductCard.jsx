import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className=" p-4 flex flex-col shadow-xl">
      <img
        src={product.images[0]}
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="flex justify-between p-2 items-center">
        <span className="font-semibold text-pretty">{product.name}</span>
        <span className="bg-green-600 p-1 rounded-lg text-white">${product.price}</span>
      </  div>
    </Link>
  );
}
