import { User } from "lucide-react";
import Stars from "./Stars";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { Heart } from "lucide-react";
import { REVIEWS } from "../constants/Reviews";
import { useContext } from "react";

import { productID } from "./ProductContainer";
export default function ProductDetail() {
  let [product] = useContext(productID);
  console.log("product ko id", product);

  const avg = (
    REVIEWS.reduce((acc, sum) => acc + parseInt(sum.stars), 0) / REVIEWS.length
  ).toFixed(1);
  return (
    <section>
      <div className="flex justify-between p-2 ">
        <User color="white" className="bg-black rounded-full" />
        <p className="text-slate-800">{product.id}</p>
      </div>
      <h3 className="font-bold ">{product.name}</h3>
      <Stars number={avg} width="20" height="20" />
      <h1 className="font-bold py-3 mb-3 ">{product.price}</h1>
      <ColorSelector colors ={product.color} imageLink={product.images[0]} />
      <SizeSelector />
      <div className="flex justify-center  items-center gap-5 w-[60%]">
        <button className="flex-1 p-2 bg-black text-white rounded-md">
          Add To Cart
        </button>
        <Heart />
      </div>
    </section>
  );
}
