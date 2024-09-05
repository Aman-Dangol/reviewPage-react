import { useContext } from "react";
import { productID } from "./ProductContainer";

export default function ImageContainer() {
  const [product] = useContext(productID);
  return (
    <div className="pr-10 row-span-2 ">
      <img
        src={product.images[0]}
        className="rounded-xl w-full  h-[20rem] lg:h-[25rem] bg-[#e2e4e1]  object-contain mb-1 "
      />
      <div className="grid grid-cols-4 gap-2 [&>*]:bg-slate-200">
        <img
          src={product.images[0]}
          className="w-full rounded-md h-[100px]  object-cover "
        />
        <img
          src={product.images[0]}
          className="w-full rounded-md h-[100px] object-cover "
        />
        <img
          src={product.images[0]}
          className="w-full rounded-md h-[100px]  object-cover "
        />
        <img
          src={product.images[0]}
          className="w-full rounded-md h-[100px]  object-cover "
        />
      </div>
    </div>
  );
}
