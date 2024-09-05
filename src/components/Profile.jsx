import { ShoppingCart, Heart } from "lucide-react";
import profileImg from "../assets/download.jpg";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="flex  [&>*]:mx-2">
      <Link to="/Mycart">
        <ShoppingCart className="cursor-pointer hover:text-red-600" />
      </Link>
      <Heart className="cursor-pointer hover:text-red-600" />
      <img src={profileImg} className="rounded-full h-[24px] cursor-pointer" />
    </div>
  );
}
