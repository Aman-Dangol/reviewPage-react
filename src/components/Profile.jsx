import { ShoppingCart, Heart } from "lucide-react";
import profileImg from "../assets/download.jpg";
export default function Profile() {
  return (
    <div className="flex  [&>*]:mx-2">
      <a href="/Mycart">
        <ShoppingCart className="cursor-pointer" />
      </a>
      <Heart className="cursor-pointer" />
      <img src={profileImg} className="rounded-full h-[24px] cursor-pointer" />
    </div>
  );
}
