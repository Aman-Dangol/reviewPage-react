import { User } from "lucide-react";
import Stars from "./Stars";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { Heart } from "lucide-react";
import { REVIEWS } from "../constants/Reviews";
import { useContext, useState } from "react";
import useaddToCart from "../utilities/useAddToCart";
import { productID } from "./ProductContainer";
export default function ProductDetail() {
  const [popUp, setPopUp] = useState("");
  const [quantity, setQuantity] = useState("1");
  let [product] = useContext(productID);
  let cartFunction = useaddToCart();
  const avg = (
    REVIEWS.reduce((acc, sum) => acc + parseInt(sum.stars), 0) / REVIEWS.length
  ).toFixed(1);
  return (
    <section>
      <div
        className={`absolute bottom-10 p-4 uppercase font-bold rounded-lg  bg-slate-300 ${
          popUp || "hidden"
        } `}
      >
        {popUp}
      </div>

      <div className="flex justify-between p-2 ">
        <User color="white" className="bg-black rounded-full" />
        <p className="text-slate-800">{product.id}</p>
      </div>
      <h3 className="font-bold ">{product.name}</h3>
      <Stars number={avg} width="20" height="20" />
      <h1 className="font-bold py-3 mb-3 ">${product.price}</h1>
      <ColorSelector colors={product.color} imageLink={product.images[0]} />
      <SizeSelector />
      <div className="flex justify-center  items-center gap-5 w-[60%]">
        <select name="quantity" onChange={(e) => setQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          className="flex-1 p-2 bg-black text-white rounded-md"
          onClick={() => {
            setPopUp("item added");
            setTimeout(() => {
              setPopUp("");
            }, 1000);
            return cartFunction.addToCart(
              product.id,
              product.name,
              quantity,
              product.price
            );
          }}
        >
          Add To Cart
        </button>

        <Heart />
      </div>
    </section>
  );
}
