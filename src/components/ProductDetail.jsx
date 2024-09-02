import { User } from "lucide-react";
import Stars from "./Stars";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { Heart } from "lucide-react";
export default function ProductDetail() {
  return (
    <section>
      <div className="flex justify-between ">
        <User color="white" className="bg-black rounded-full" />
        <p className="text-slate-300">HR1235-800</p>
      </div>
      <h3 className="font-bold ">Shoes Reebok Zig Kinetica 3</h3>
      <Stars number="4" />
      <h1 className="font-bold py-3 mb-8 ">$199.00</h1>
      <ColorSelector />
      <SizeSelector />
      <div className="flex justify-center items-center gap-5 w-[60%]">
        <button className="flex-1 p-2 bg-black text-white rounded-md">
          add to favourite
        </button>
        <Heart />
      </div>
    </section>
  );
}
